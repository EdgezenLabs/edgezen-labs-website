import { ArrowRight, BadgeCheck, ChevronRight, HardHat, Shield, Sparkles, Swords, TrendingUp, Wrench } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMain from "@/components/PageMain";
import { Button } from "@/components/ui/button";

const credosafeLogo = "/credo_logo.jpg";
const briktraLogo = "/bricktra.jpg";
const expeniqoLogo = "/expeniqo-logo.png";
const cardclashLogo = "/cardclash.png";
const maintzenLogo = "/maintzen_logo_accurate.png";
const gstledgerLogo = "/gstledger-logo.png";

const products = [
  {
    name: "CredoSafe",
    tagline: "Loan Processing ERP",
    description: "Complete loan processing and ERP system designed for financial institutions. Manage the entire loan lifecycle from application to disbursal with our mobile-first platform.",
    logo: credosafeLogo,
    icon: Shield,
    color: "text-gold",
    logoBackground: "bg-yellow-500/10",
    gradient: "from-yellow-500/20 via-amber-500/10 to-orange-500/20",
    stats: ["Loan lifecycle", "Credit checks", "Secure vault"],
    features: [
      "Loan Application Management",
      "Credit Verification & Checks",
      "Document Management & Vault",
      "Approval Workflows",
      "Automated Disbursal",
      "Analytics & Reporting Dashboard",
      "Multi-channel Integration",
      "Role-based Access Control",
    ],
  },
  {
    name: "Briktra",
    tagline: "Construction ERP",
    description: "Mobile-first ERP for construction and contractors. Built for the field with advanced billing, multilingual support, and super lightweight performance.",
    logo: briktraLogo,
    icon: HardHat,
    color: "text-orange",
    logoBackground: "bg-orange-500/10",
    gradient: "from-orange-500/20 via-red-500/10 to-yellow-500/20",
    stats: ["Labour tracking", "Vendor control"],
    features: [
      "Project Management & Tracking",
      "Labour Attendance & Management",
      "Material Procurement & Inventory",
      "Vendor & Supplier Management",
      "Expense Tracking & Budgeting",
      "Site Reports & Documentation",
      "GPS Attendance Tracking",
      "Multilingual Interface",
    ],
    cta: { label: "Explore Briktra", path: "/briktra-app" },
  },
  {
    name: "Expeniqo",
    tagline: "AI Expense Tracker",
    description: "Smart expense tracker powered by AI. Automatically reads SMS messages, identifies transactions, categorizes spending, and generates actionable insights.",
    logo: expeniqoLogo,
    icon: TrendingUp,
    color: "text-gold",
    logoBackground: "bg-violet-500/10",
    gradient: "from-violet-500/20 via-pink-500/10 to-yellow-500/20",
    stats: ["SMS extraction", "AI categories", "Smart insights"],
    features: [
      "Automatic SMS Transaction Reading",
      "AI-powered Categorization",
      "Smart Spending Analytics",
      "Budget Planning & Alerts",
      "Expense Forecasting",
      "Multi-account Management",
      "Export Reports (PDF/Excel)",
      "Privacy-first Design",
    ],
  },
  {
    name: "ClashCard Legends Arena",
    tagline: "Strategy Card Battle Game",
    description: "A competitive mobile fantasy card-battle game where players build powerful decks, collect unique legendary cards, and compete in strategic arena battles.",
    logo: cardclashLogo,
    icon: Swords,
    color: "gradient-text",
    logoBackground: "bg-purple-500/10",
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-blue-500/20",
    stats: ["Deck building", "Arena battles", "Progression"],
    features: [
      "Custom Deck Building System",
      "Fantasy-Themed Strategic Card Battles",
      "Legendary & Rare Card Collection",
      "Secure Account System with Authentication",
      "Progression & Player Growth System",
      "Competitive Arena Gameplay",
      "Mobile-Optimized User Experience",
      "Expandable Multiplayer Architecture",
    ],
    note: "Strategy. Cards. Legends. Battle Beyond Limits.",
  },
  {
    name: "Maintzen",
    tagline: "Field Service Management",
    description: "Specialized field service management for RO water purifier companies. Streamline your entire service lifecycle from agreement signing to technician dispatch.",
    logo: maintzenLogo,
    icon: Wrench,
    color: "text-blue-600",
    logoBackground: "bg-blue-500/10",
    gradient: "from-blue-500/20 via-cyan-500/10 to-emerald-500/20",
    stats: ["Agreements", "Scheduling", "Technicians"],
    features: [
      "Manage Customer Agreements",
      "Automated Service Scheduling",
      "Technician Job Assignment",
      "Comprehensive Field Reports",
      "Real-time Job Notifications",
      "Built-in Customer Navigation",
      "Instant Service Reporting",
      "Digital Signature Capture",
    ],
  },
  {
    name: "GSTLedger Pro",
    tagline: "Enterprise GST Suite",
    description: "Precision invoicing, smarter inventory, and seamless GST compliance. An all-in-one business management suite designed for high-speed POS and multi-warehouse operations.",
    logo: gstledgerLogo,
    icon: BadgeCheck,
    color: "text-emerald-600",
    logoBackground: "bg-emerald-500/10",
    gradient: "from-emerald-600/20 via-green-500/10 to-teal-400/20",
    stats: ["Precision GST", "POS Ready", "Loyalty Ready"],
    features: [
      "Unified Sales & Purchase Ledger",
      "Advanced POS & Cashier Ops",
      "Multi-Warehouse Inventory",
      "Precision GST Compliance Engine",
      "HSN/SAC Management",
      "Ready-to-File GSTR Reports",
      "Loyalty & Reward Programs",
      "Interactive Analytics Dashboards",
    ],
  },
];

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/products" && location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.pathname, location.hash]);

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
                Product Portfolio
              </p>
              <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Products built for <span className="gradient-text">real business workflows</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                ERP platforms, AI tools, field apps, and game experiences designed with strong product thinking and scalable engineering.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact">
                  <Button className="h-13 rounded-xl bg-foreground px-7 text-background">
                    Build a Product
                    <ArrowRight className="ml-2" size={17} />
                  </Button>
                </Link>
                <Link to="/websites">
                  <Button variant="outline" className="h-13 rounded-xl border-accent/30 px-7">
                    View Websites
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-gradient-purple/15 via-gradient-pink/10 to-gradient-blue/15 blur-2xl" />
              <div className="relative rounded-3xl border border-border/70 bg-card/85 p-5 shadow-2xl shadow-foreground/10 backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Product Suite</p>
                    <p className="text-xs text-muted-foreground">5 active product lines</p>
                  </div>
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">Live</span>
                </div>
                <div className="space-y-3">
                  {products.map((product, index) => (
                    <a 
                      key={product.name} 
                      href={`#/products#${product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} 
                      className="group flex items-center gap-4 rounded-[2rem] border border-border/50 bg-background/70 p-4 transition-all hover:border-accent/20 hover:shadow-sm"
                      onClick={(e) => {
                        const id = product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                        const element = document.getElementById(id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                    >
                      <div className={`flex h-14 w-16 shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br ${product.gradient} shadow-sm${product.name === "Briktra" ? " p-1" : " rounded-2xl p-2.5"}`}>
                         <img src={product.logo} alt={product.name} className={`max-h-10 w-auto object-contain opacity-85 drop-shadow-md${product.name === "Briktra" ? "" : " rounded-md"}`} />
                       </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.tagline}</p>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-0">
        {products.map((product, index) => {
          const reversed = index % 2 === 1;
          const sectionId = product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

          return (
            <section key={product.name} id={sectionId} className={`relative overflow-hidden py-20 md:py-28 ${index % 2 === 0 ? "bg-secondary/30" : "bg-background"}`}>
              <div className="absolute inset-0 mesh-grid opacity-20" />
              <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative">
                    <div className={`absolute -inset-5 rounded-[2rem] bg-gradient-to-br ${product.gradient} blur-2xl`} />
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-card/90 p-6 shadow-sm">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-400/80" />
                          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                          <span className="h-3 w-3 rounded-full bg-green-400/80" />
                        </div>
                        <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary">
                          Product 0{index + 1}
                        </span>
                      </div>
                      <div className={`relative flex min-h-[320px] items-center justify-center rounded-[2.5rem] bg-gradient-to-br ${product.gradient} p-8 shadow-inner shadow-slate-900/5`}>
                        <div className="absolute inset-0 rounded-[2.5rem] opacity-40 bg-white/0" />
                           <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${product.gradient} p-8 ring-1 ring-white/10 shadow-inner shadow-slate-900/5 backdrop-blur-sm${product.name === "Briktra" ? "" : " rounded-[2rem]"}`}>
                             <div className={`absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent opacity-60${product.name === "Briktra" ? "" : " rounded-[2rem]"}`} />
                             <img src={product.logo} alt={product.name} className={`relative max-h-64 w-auto object-contain opacity-80 drop-shadow-lg transition-all duration-500${product.name === "Briktra" ? "" : " rounded-lg"}`} />
                         </div>
                      </div>
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {product.stats.map((stat) => (
                          <div key={stat} className="rounded-2xl border border-border/70 bg-background p-4 text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{stat}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 shadow-sm">
                      <product.icon className={product.color.includes("gradient") ? "text-accent" : product.color} size={16} />
                      <span className={`text-sm font-semibold ${product.color}`}>{product.tagline}</span>
                    </div>
                    <h2 className={`text-4xl font-bold tracking-tight md:text-6xl ${product.color}`}>{product.name}</h2>
                    {product.note && <p className="mt-4 text-lg font-semibold italic text-accent">{product.note}</p>}
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">{product.description}</p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-4 shadow-sm">
                          <BadgeCheck className={product.color.includes("gradient") ? "text-accent" : product.color} size={18} />
                          <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      {product.cta ? (
                        <Link to={product.cta.path}>
                          <Button className="h-12 rounded-xl bg-foreground px-6 text-background">
                            {product.cta.label}
                            <ChevronRight className="ml-2" size={16} />
                          </Button>
                        </Link>
                      ) : (
                        <Link to="/contact">
                          <Button className="h-12 rounded-xl bg-foreground px-6 text-background">
                            Discuss This Product
                            <ArrowRight className="ml-2" size={16} />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </section>

      </PageMain>

      <Footer />
    </div>
  );
};

export default Products;

