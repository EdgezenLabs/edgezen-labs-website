import { Award, CheckCircle2, Code2, Eye, Heart, Rocket, ShieldCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMain from "@/components/PageMain";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "Create intelligent, scalable digital products that help businesses move faster and serve customers better.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "Become a trusted product engineering partner for companies that care about design, performance, and long-term quality.",
  },
  {
    icon: Heart,
    title: "Craft",
    description: "We care about the details users feel: speed, clarity, reliability, and interfaces that make complex work simple.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "From architecture to launch, we build with discipline so every product can grow beyond its first release.",
  },
];

const approach = [
  {
    step: "01",
    title: "Discover",
    description: "We map your goals, users, workflows, and technical risks before writing code.",
  },
  {
    step: "02",
    title: "Design",
    description: "We shape clear screens, user journeys, and system flows so the product feels natural.",
  },
  {
    step: "03",
    title: "Build",
    description: "We develop in focused iterations with clean architecture, reusable components, and regular demos.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy, monitor, refine, and support the product so it stays dependable after release.",
  },
];

const About = () => {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <PageMain>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 mesh-grid opacity-30" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-accent/20 bg-background/80 px-4 py-2 text-sm font-semibold text-accent shadow-sm backdrop-blur">
                About EdgeZen Labs
              </p>
              <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                We turn bold product ideas into <span className="gradient-text">usable software</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                EdgeZen Labs is a full-stack product studio building mobile apps, web platforms, cloud systems, AI workflows, and games with a strong design-first engineering mindset.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact">
                  <Button className="h-13 rounded-xl bg-foreground px-7 text-background">Start a Project</Button>
                </Link>
                <Link to="/websites">
                  <Button variant="outline" className="h-13 rounded-xl border-accent/30 px-7">View Our Work</Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-gradient-purple/15 via-gradient-pink/10 to-gradient-blue/15 blur-2xl" />
              <div className="relative rounded-3xl border border-border/70 bg-card/85 p-6 shadow-2xl shadow-foreground/10 backdrop-blur-xl">
                <div className="grid gap-4">
                  {[
                    ["Product Strategy", Rocket],
                    ["Clean Engineering", Code2],
                    ["Secure Systems", ShieldCheck],
                  ].map(([label, Icon]) => (
                    <div key={label as string} className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="font-semibold">{label as string}</p>
                        <p className="text-sm text-muted-foreground">Designed, built, and shipped with care</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["100+", "Projects"],
                    ["50+", "Clients"],
                    ["10+", "Years"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl bg-secondary/70 p-4 text-center">
                      <p className="text-2xl font-bold gradient-text">{value}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Our Philosophy</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Technology should feel elegant, powerful, and accessible.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {["We do not just write code, we craft experiences.", "We design for real users, real teams, and real business operations.", "We build systems that can evolve after launch."].map((text) => (
                <div key={text} className="rounded-2xl border border-border/70 bg-card p-7 shadow-sm">
                  <CheckCircle2 className="mb-5 text-accent" size={24} />
                  <p className="text-lg leading-8 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary/30 py-20 md:py-28">
        <div className="absolute inset-0 mesh-grid opacity-25" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Core Values</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">The way we build.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="group rounded-2xl border border-border/70 bg-card p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <value.icon size={26} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Our Approach</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">A clear path from idea to launch.</h2>
            </div>
            <div className="grid gap-5">
              {approach.map((item) => (
                <div key={item.step} className="grid gap-5 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all hover:border-accent/30 md:grid-cols-[120px_1fr] md:items-center">
                  <div className="text-4xl font-bold gradient-text">{item.step}</div>
                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      </PageMain>

      <Footer />
    </div>
  );
};

export default About;

