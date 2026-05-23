import { ArrowRight, Brain, CheckCircle2, Cloud, Code, Gamepad2, Globe, Palette, Settings, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built for speed, clarity, and daily usage.",
    tech: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    icon: Globe,
    title: "Web App Development",
    description: "Responsive web applications and business platforms, from MVPs to internal tools.",
    tech: ["React", "TypeScript", "Node.js", "FastAPI"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Secure, scalable infrastructure for APIs, data, deployments, and high-availability systems.",
    tech: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    icon: Code,
    title: "API Engineering",
    description: "Fast, reliable APIs designed around real workflows, permissions, reporting, and integrations.",
    tech: ["REST", "GraphQL", "PostgreSQL", "Auth"],
  },
  {
    icon: Gamepad2,
    title: "Unity Game Development",
    description: "Mobile and multiplayer game experiences with polished UI, progression, and scalable systems.",
    tech: ["Unity", "C#", "Multiplayer", "3D"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean product interfaces, prototypes, and design systems that make complex apps easier to use.",
    tech: ["Figma", "Prototyping", "Design Systems", "Motion"],
  },
  {
    icon: Brain,
    title: "AI-Powered Applications",
    description: "AI integrations that automate reading, categorization, insights, workflows, and support tasks.",
    tech: ["OpenAI", "Python", "ML", "Automation"],
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD",
    description: "Deployment pipelines, monitoring, and release systems that keep teams shipping confidently.",
    tech: ["GitHub Actions", "Terraform", "Monitoring", "CI/CD"],
  },
];

const process = [
  "Discovery & Planning",
  "Design & Prototyping",
  "Development",
  "Testing & QA",
  "Deployment & Support",
];

const Services = () => {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 mesh-grid opacity-30" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-6 inline-flex rounded-full border border-accent/20 bg-background/80 px-4 py-2 text-sm font-semibold text-accent shadow-sm backdrop-blur">
              Services
            </p>
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Full-stack product services for <span className="gradient-text">serious launches</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              From mobile apps and business websites to cloud systems, AI, and games, we design and build the full digital experience.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact">
                <Button className="h-13 rounded-xl bg-foreground px-7 text-background">
                  Discuss a Project
                  <ArrowRight className="ml-2" size={17} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue opacity-70" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <service.icon size={26} />
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mb-6 text-sm leading-7 text-muted-foreground">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary/30 py-20 md:py-28">
        <div className="absolute inset-0 mesh-grid opacity-25" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Process</p>
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">Designed to keep momentum high and surprises low.</h2>
              </div>
              <p className="max-w-md text-lg leading-8 text-muted-foreground">
                Every engagement follows a clear rhythm: align, prototype, build, test, launch, and improve.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-5">
              {process.map((phase, index) => (
                <div key={phase} className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                  <p className="mb-8 text-4xl font-bold gradient-text">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mb-3 text-lg font-semibold">{phase}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Focused checkpoints, practical decisions, and visible progress at every stage.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {["Product-first planning", "Modern scalable stack", "Launch and support"].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                <CheckCircle2 className="text-accent" size={24} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

