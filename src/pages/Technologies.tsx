import { Brain, Cloud, Code2, Database, Gamepad2, Layers3, Palette, Smartphone, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMain from "@/components/PageMain";

const techStack = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    accent: "from-blue-500/20 to-cyan-500/20",
    technologies: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    category: "Web Development",
    icon: Layers3,
    accent: "from-violet-500/20 to-pink-500/20",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    icon: Code2,
    accent: "from-emerald-500/20 to-blue-500/20",
    technologies: ["Node.js", "FastAPI", "Express", "GraphQL"],
  },
  {
    category: "Databases",
    icon: Database,
    accent: "from-orange-500/20 to-amber-500/20",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Firestore"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    accent: "from-sky-500/20 to-indigo-500/20",
    technologies: ["AWS", "Google Cloud", "Firebase", "Docker"],
  },
  {
    category: "Game Development",
    icon: Gamepad2,
    accent: "from-fuchsia-500/20 to-purple-500/20",
    technologies: ["Unity", "C#", "Multiplayer", "Unity UI"],
  },
  {
    category: "Design & Prototyping",
    icon: Palette,
    accent: "from-rose-500/20 to-violet-500/20",
    technologies: ["Figma", "Prototyping", "Design Systems", "Motion UI"],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    accent: "from-lime-500/20 to-cyan-500/20",
    technologies: ["OpenAI API", "Python", "TensorFlow", "NLP"],
  },
];

const Technologies = () => {
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
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-background/80 px-4 py-2 text-sm font-semibold text-accent shadow-sm backdrop-blur">
                <Sparkles size={16} />
                Technology Stack
              </p>
              <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Modern tools for <span className="gradient-text">fast, scalable products</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                We choose practical, proven technologies that help products launch faster, scale cleanly, and stay maintainable.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-gradient-purple/15 via-gradient-pink/10 to-gradient-blue/15 blur-2xl" />
              <div className="relative rounded-3xl border border-border/70 bg-card/85 p-6 shadow-2xl shadow-foreground/10 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-3">
                  {["React", "Flutter", "Node.js", "AWS", "Unity", "OpenAI"].map((tech) => (
                    <div key={tech} className="rounded-2xl border border-border/70 bg-background p-4 text-center font-semibold">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-foreground p-5 text-background">
                  <p className="text-sm uppercase tracking-[0.2em] text-background/60">Build Standard</p>
                  <p className="mt-2 text-2xl font-bold">Secure, fast, maintainable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {techStack.map((category) => (
              <div key={category.category} className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
                <div className={`bg-gradient-to-br ${category.accent} p-7`}>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/80 text-accent shadow-sm backdrop-blur">
                    <category.icon size={26} />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">{category.category}</h2>
                </div>
                <div className="space-y-3 p-6">
                  {category.technologies.map((tech) => (
                    <div key={tech} className="flex items-center justify-between rounded-xl border border-border/70 bg-background px-4 py-3">
                      <span className="font-medium">{tech}</span>
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </div>
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
          <div className="mx-auto max-w-5xl rounded-3xl border border-border/70 bg-card p-8 shadow-sm md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Technical Expertise</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">We do not chase tools. We pick the right stack for the product.</h2>
            <div className="mt-8 grid gap-6 text-lg leading-8 text-muted-foreground md:grid-cols-2">
              <p>
                Our team works across mobile-first Flutter applications, React interfaces, cloud-native APIs, databases, CI/CD, and AI integrations.
              </p>
              <p>
                Every product is designed around maintainability, performance, security, and the ability to keep improving after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      </PageMain>

      <Footer />
    </div>
  );
};

export default Technologies;

