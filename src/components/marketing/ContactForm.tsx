import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

const contactSchema = z
  .object({
    name: z.string().min(1, "Name is required").max(100, "Name cannot exceed 100 characters"),
    email: z.string().email("Please enter a valid email").max(150, "Email cannot exceed 150 characters"),
    phone: z.string().max(25, "Phone number is too long").optional().or(z.literal("")),
    message: z
      .string()
      .min(1, "Project details are required")
      .max(2000, "Project details cannot exceed 2000 characters"),
    privacyAccepted: z.boolean().refine((val) => val === true, {
      message: "Please accept the privacy policy to continue",
    }),
  })
  .superRefine((data, ctx) => {
    if (!data.phone) return;
    const digitCount = data.phone.replace(/\D/g, "").length;
    if (digitCount > 15) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Phone number cannot exceed 15 digits", path: ["phone"] });
    }
    if (digitCount > 0 && (digitCount < 7 || !phoneRegex.test(data.phone))) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please enter a valid phone number", path: ["phone"] });
    }
  });

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      privacyAccepted: false,
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const { privacyAccepted: _, ...payload } = values;
      const response = await fetch("https://formspree.io/f/xdavnyly", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="ex: Maya Patel" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="ex: +91 98765 43210"
                    autoComplete="tel"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^\d\s\-()+]/g, "");
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="ex: you@company.com" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="ex: A mobile app for booking services with admin dashboard and analytics"
                  className="min-h-[170px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="privacyAccepted"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value === true}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    aria-describedby="privacy-desc"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel id="privacy-desc" className="text-sm font-normal leading-relaxed text-muted-foreground">
                    I agree to the{" "}
                    <Link to="/legal/privacy" className="font-medium text-accent hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and consent to being contacted about my inquiry.
                  </FormLabel>
                  <FormMessage />
                </div>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && <Send className="ml-2" size={18} aria-hidden />}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
