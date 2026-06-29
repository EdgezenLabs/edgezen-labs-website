import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@edgezenlabs.com",
    href: "mailto:contact@edgezenlabs.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 91767 38389 | +91 86808 90318",
    href: "tel:+919176738389",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Global — Remote First",
  },
] as const;

const nextSteps = [
  "We review your idea and goals.",
  "We suggest the right scope and stack.",
  "We plan the first practical version.",
] as const;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted) {
      toast.error("Please accept the privacy policy to continue.");
      return;
    }

    if (formData.phone) {
      const digitCount = formData.phone.replace(/[\D]/g, "").length;
      if (digitCount > 15) {
        toast.error("Phone number cannot exceed 15 digits.");
        return;
      }
      const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
      if (!phoneRegex.test(formData.phone) || digitCount < 7) {
        toast.error("Please enter a valid phone number.");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xdavnyly", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setPrivacyAccepted(false);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "phone") {
      if (/[^\d\s\-()+]/.test(value)) {
        toast.error("Please enter only numbers and standard phone symbols.");
        value = value.replace(/[^\d\s\-()+]/g, "");
      }
      const digitCount = value.replace(/[\D]/g, "").length;
      if (digitCount > 15 || value.length > 25) {
        toast.error("Phone number cannot exceed 15 digits.");
        return;
      }
    }

    if (name === "name" && value.length > 100) {
      toast.error("Name cannot exceed 100 characters.");
      return;
    }

    if (name === "email" && value.length > 150) {
      toast.error("Email cannot exceed 150 characters.");
      return;
    }

    if (name === "message" && value.length > 2000) {
      toast.error("Project details cannot exceed 2000 characters.");
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <PageLayout showBreadcrumbs>
      <SEO
        title="Contact"
        description="Start a conversation with EdgeZen Labs — share your product idea, business website, app, or platform requirement."
        canonical="https://edgezenlabs.com/contact"
      />

      <PageHero
        eyebrow={
          <span className="inline-flex items-center gap-2">
            <Sparkles size={16} aria-hidden />
            Start the conversation
          </span>
        }
        title={
          <>
            Tell us what you want to <span className="gradient-text">build next</span>.
          </>
        }
        description="Share your product idea, business website, app, or platform requirement. We will help shape it into a clear build plan."
        align="center"
      />

      <section className="pb-section-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-wide gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <Reveal>
                <div className="rounded-3xl border border-border/70 bg-card p-7 shadow-token-sm">
                  <h2 className="mb-4 text-h3 font-bold tracking-tight">Let's Talk</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Whether you need a mobile app, business website, web platform, cloud solution, or game, we can help
                    turn the idea into a product people can actually use.
                  </p>
                </div>
              </Reveal>

              {contactItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-token-sm transition-default hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <item.icon size={22} aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm text-muted-foreground transition-default hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-border/70 bg-foreground p-7 text-background shadow-token-lg">
                  <div className="mb-5 flex items-center gap-3">
                    <Clock size={22} aria-hidden />
                    <h3 className="text-xl font-semibold">What happens next?</h3>
                  </div>
                  <div className="space-y-4 text-sm text-background/75">
                    {nextSteps.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-background" aria-hidden />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gradient-purple/15 via-gradient-pink/10 to-gradient-blue/15 blur-2xl" />
                <div className="relative rounded-3xl border border-border/70 bg-card p-7 shadow-token-lg md:p-9">
                  <div className="mb-8">
                    <p className="eyebrow mb-3">Project Inquiry</p>
                    <h3 className="text-h3 font-bold tracking-tight">Start Your Project</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name" className="mb-2 block">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="ex: Maya Patel"
                          required
                          autoComplete="name"
                          maxLength={100}
                          className="h-input rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="ex: +91 98765 43210"
                          autoComplete="tel"
                          maxLength={25}
                          className="h-input rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="mb-2 block">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ex: you@company.com"
                        required
                        autoComplete="email"
                        maxLength={150}
                        className="h-input rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="mb-2 block">
                        Project Details
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="ex: A mobile app for booking services with admin dashboard and analytics"
                        required
                        maxLength={2000}
                        className="min-h-[170px] rounded-xl"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="privacy"
                        checked={privacyAccepted}
                        onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                        aria-describedby="privacy-desc"
                      />
                      <Label htmlFor="privacy" id="privacy-desc" className="text-sm leading-relaxed text-muted-foreground">
                        I agree to the{" "}
                        <Link to="/legal/privacy" className="font-medium text-accent hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        and consent to being contacted about my inquiry.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !privacyAccepted}
                      className="h-btn-lg w-full rounded-xl bg-foreground text-background"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2" size={18} aria-hidden />}
                    </Button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
