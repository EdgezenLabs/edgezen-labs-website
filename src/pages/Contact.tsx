import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nProject Details:\n${formData.message}`
    );
    const link = `mailto:edgezenlabs@gmail.com?subject=${subject}&body=${body}`;
    const win = window.open(link, "_blank");
    if (!win) {
      window.location.href = link;
    }
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="site-shell min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 mesh-grid opacity-30" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-background/80 px-4 py-2 text-sm font-semibold text-accent shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Start the conversation
            </p>
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Tell us what you want to <span className="gradient-text">build next</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              Share your product idea, business website, app, or platform requirement. We will help shape it into a clear build plan.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border/70 bg-card p-7 shadow-sm">
                <h2 className="mb-4 text-3xl font-bold tracking-tight">Let's Talk</h2>
                <p className="leading-7 text-muted-foreground">
                  Whether you need a mobile app, business website, web platform, cloud solution, or game, we can help turn the idea into a product people can actually use.
                </p>
              </div>

              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "edgezenlabs@gmail.com",
                  href: "mailto:edgezenlabs@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 76738 38389 | +91 86808 90318",
                  href: "tel:+917673838389",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Global - Remote First",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all hover:border-accent/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-3xl border border-border/70 bg-foreground p-7 text-background shadow-xl shadow-foreground/10">
                <div className="mb-5 flex items-center gap-3">
                  <Clock size={22} />
                  <h3 className="text-xl font-semibold">What happens next?</h3>
                </div>
                <div className="space-y-4 text-sm text-background/75">
                  {["We review your idea and goals.", "We suggest the right scope and stack.", "We plan the first practical version."].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 size={17} className="mt-0.5 text-background" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-gradient-purple/15 via-gradient-pink/10 to-gradient-blue/15 blur-2xl" />
              <div className="relative rounded-3xl border border-border/70 bg-card p-7 shadow-2xl shadow-foreground/10 md:p-9">
                <div className="mb-8">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Project Inquiry</p>
                  <h3 className="text-3xl font-bold tracking-tight">Start Your Project</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="ex: Maya Patel" required className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="ex: +91 98765 43210" className="h-12 rounded-xl" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ex: you@company.com" required className="h-12 rounded-xl" />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Project Details
                    </label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="ex: A mobile app for booking services with admin dashboard and analytics" required className="min-h-[170px] rounded-xl" />
                  </div>

                  <Button type="submit" className="h-13 w-full rounded-xl bg-foreground text-background">
                    Send Message
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

