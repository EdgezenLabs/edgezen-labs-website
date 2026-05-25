import { ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const credosafeLogo = "/credo_logo.jpg";
const briktraLogo = "/bricktra.jpg";
const expeniqoLogo = "/expeniqo-logo.png";
const cardClashLogo = "/cardclash.png";
const maintzenLogo = "/maintzen_logo_accurate.png";

const products = [
  {
    name: "CredoSafe",
    eyebrow: "Fintech ERP",
    description: "Complete loan processing & ERP system. Mobile-first platform managing applications, verifications, credit checks, approvals & disbursals.",
    logo: credosafeLogo,
    color: "text-gold",
    link: "/products#credosafe",
  },
  {
    name: "Briktra",
    eyebrow: "Construction ERP",
    description: "Construction & Contractor ERP. Field-optimized mobile platform for projects, labour, materials, vendors. Offline-first & multilingual.",
    logo: briktraLogo,
    color: "text-orange",
    link: "/briktra-app",
  },
  {
    name: "Expeniqo",
    eyebrow: "Finance AI",
    description: "Smart AI-powered expense tracker. Automatically reads SMS, identifies transactions, categorizes spending, and generates insights.",
    logo: expeniqoLogo,
    color: "text-gold",
    link: "/products#expeniqo",
  },
  {
    name: "ClashCard Legends Arena",
    eyebrow: "Mobile Game",
    description: "A fantasy mobile card battle experience where players build decks, unlock legendary cards, and compete through strategy-driven arena gameplay.",
    logo: cardClashLogo,
    color: "gradient-text",
    link: "/products#clashcard-legends-arena",
  },
  {
    name: "Maintzen",
    eyebrow: "Field Service",
    description: "Specialized field service management for RO water purifier companies. Manage agreements, schedules, and technicians with real-time field reporting.",
    logo: maintzenLogo,
    color: "text-blue-500",
    link: "/products#maintzen",
  },
];

const websites = [
  {
    name: "VS Corporate Lending",
    url: "vscorporatelending.com",
    href: "https://vscorporatelending.com/",
    industry: "Finance",
    headline: "Unsecured business loans made simple",
    description: "A focused lending website for banks, NBFCs, and growing business borrowers.",
    cta: "Apply Now",
    accent: "from-emerald-500/20 to-blue-500/20",
  },
  {
    name: "Eladent Consulting",
    url: "eladentconsulting.com",
    href: "https://eladentconsulting.com/",
    industry: "Dental RCM",
    headline: "Dental billing and RCM experts",
    description: "A clean consulting presence built around trust, clarity, and revenue operations.",
    cta: "Book Consultation",
    accent: "from-cyan-500/20 to-violet-500/20",
  },
  {
    name: "Gabriel JM Events",
    url: "gabrieljmevents.com",
    href: "https://gabrieljmevents.com/",
    industry: "Events",
    headline: "Premier events in Chennai",
    description: "A vibrant event management website for services, inquiries, and brand presence.",
    cta: "Plan Event",
    accent: "from-rose-500/20 to-amber-500/20",
  },
];

const Index = () => {
  return (
    <div className="site-shell min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 mesh-grid opacity-40" />
        <div className="absolute left-1/2 top-24 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-gradient-purple/20 via-gradient-pink/20 to-gradient-blue/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 rounded-full border border-accent/20 bg-background/80 px-4 py-2 shadow-sm backdrop-blur">
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Engineering Digital Excellence</span>
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                We build <span className="gradient-text">software products</span> that feel fast, clear, and ready to scale.
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Mobile apps, web platforms, cloud systems, AI workflows, and immersive games for businesses that need more than a template.
              </p>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Link to="/contact">
                  <Button size="lg" className="h-14 rounded-xl bg-foreground px-8 text-base text-background shadow-xl shadow-foreground/10 transition-transform hover:scale-[1.03]">
                    Start a Project
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="h-14 rounded-xl border-accent/30 bg-background/70 px-8 text-base text-foreground backdrop-blur hover:border-accent hover:bg-accent/10">
                    View Our Products
                  </Button>
                </Link>
              </div>

              <div className="grid max-w-2xl grid-cols-3 gap-4 pt-4">
                {[
                  ["100+", "Projects"],
                  ["50+", "Clients"],
                  ["10+", "Years"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-border/70 bg-card/70 p-4 shadow-sm backdrop-blur">
                    <div className="text-2xl font-bold gradient-text">{value}</div>
                    <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gradient-purple/15 via-gradient-pink/10 to-gradient-blue/15 blur-2xl" />
              <div className="relative rounded-3xl border border-border/70 bg-card/85 p-5 shadow-2xl shadow-foreground/10 backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Product Studio Console</p>
                    <p className="text-xs text-muted-foreground">Live delivery pipeline</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    Active
                  </div>
                </div>
                <div className="space-y-3">
                  {products.map((product, index) => (
                    <Link
                      key={product.name}
                      to={product.link || "/products"}
                      className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-background/70 p-4 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
                    >
                       <div className={`flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/80 to-secondary/40${product.name === "Briktra" ? " p-1" : " rounded-2xl p-2.5"}`}>
                         <img src={product.logo} alt={product.name} className={`max-h-10 w-auto object-contain opacity-90 drop-shadow-md transition-all duration-300${product.name === "Briktra" ? "" : " rounded-md"}`} />
                       </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.eyebrow}</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <Zap size={14} className="text-accent" />
                        0{index + 1}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Who We Are</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                A focused team for serious digital products.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">EdgeZen Labs</span> is a full-stack software development company specializing in mobile-first applications, cloud-native systems, and enterprise-grade digital solutions.
              </p>
              <p>
                We build with cutting-edge technologies: <span className="text-accent">Flutter</span>, <span className="text-accent">React</span>, <span className="text-accent">React Native</span>, <span className="text-accent">Unity</span>, <span className="text-accent">TypeScript</span>, <span className="text-accent">Node.js</span>, <span className="text-accent">FastAPI</span>, and <span className="text-accent">Python</span>.
              </p>
              <p>
                Our expertise spans secure cloud architecture on AWS and Google Cloud, AI integrations, API engineering, and immersive game development. We deliver products that are beautiful, scalable, and built to last.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Fast MVP builds", "Production-grade architecture", "UX-focused interfaces", "Cloud-ready delivery"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm">
                    <CheckCircle2 size={18} className="text-accent" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary/30 py-20 md:py-32">
        <div className="absolute inset-0 mesh-grid opacity-30" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Portfolio</p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                Products built with business logic, speed, and polish.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-muted-foreground">
              Innovative solutions designed to transform businesses and delight users.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Websites Designed</p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                Business websites crafted by EdgeZen Labs.
              </h2>
            </div>
            <Link
              to="/websites"
              className="inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-foreground"
            >
              View all websites
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {websites.map((site, index) => (
              <Link
                key={site.name}
                to="/websites"
                className="group block overflow-hidden rounded-[2.5rem] border border-border/70 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl"
              >
                <article className="grid h-full gap-0">
                  <div className="relative overflow-hidden rounded-t-[2.5rem] border-b border-border/70 bg-secondary/20 p-5">
                    <div className={`absolute inset-0 bg-gradient-to-br ${site.accent} opacity-15`} />
                    <div className="relative rounded-[2rem] border border-border/70 bg-background/95 p-5 shadow-xl shadow-slate-900/5">
                      <div className="flex items-center justify-start gap-3 rounded-full border border-border/70 bg-secondary/60 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground shadow-sm backdrop-blur">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                        </div>
                      </div>

                      <div className="relative mt-5 rounded-[1.75rem] border border-border/70 bg-slate-50/90 p-0 shadow-inner shadow-slate-900/5">
                        <iframe
                          src={site.href}
                          title={`${site.name} preview`}
                          loading="lazy"
                          sandbox="allow-same-origin allow-scripts allow-popups"
                          className="h-[295px] w-full rounded-[1.75rem] border-0 md:h-[355px]"
                        />
                        <a
                          href={site.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0"
                          aria-label={`Open ${site.name} preview in a new tab`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-4 p-6">
                    <div>
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                          {site.industry}
                        </span>
                        <span className="text-xs text-muted-foreground">Project 0{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">{site.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{site.description}</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-3xl border border-border/70 bg-secondary/50 px-4 py-3 text-sm font-semibold text-muted-foreground">
                        {site.cta}
                      </div>
                      <div className="rounded-3xl border border-border/70 bg-secondary/50 px-4 py-3 text-sm text-muted-foreground">
                        {site.url}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

