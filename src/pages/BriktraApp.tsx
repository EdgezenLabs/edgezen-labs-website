import { useState } from "react";
import { 
  Users, 
  FileBadge, 
  UserCheck, 
  Wallet, 
  Briefcase, 
  CreditCard, 
  Building2, 
  Newspaper, 
  FileText, 
  ShieldCheck, 
  Globe, 
  CalendarDays,
  Check,
  Zap,
  MapPin,
  Smartphone,
  ChevronRight,
  HardHat,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import briktraLogo from "@/assets/bricktra.jpg";

const modules = [
  {
    id: "labour",
    title: "Labour Management",
    category: "Workforce",
    icon: Users,
    description: "Manage workers assigned to projects with detailed profiles and histories.",
    features: ["Worker Profiles", "Assignment Tracking"]
  },
  {
    id: "contracts",
    title: "Contracts Management",
    category: "Operations",
    icon: FileBadge,
    description: "Create, manage, and track all contractor agreements and terms.",
    features: ["Agreement Tracking", "Term Management"]
  },
  {
    id: "attendance",
    title: "GPS Attendance Tracking",
    category: "Workforce",
    icon: UserCheck,
    description: "Record and monitor daily attendance with mandatory GPS location validation.",
    features: ["GPS Validation", "Real-time Sync"]
  },
  {
    id: "expenses",
    title: "Expenses & Bills",
    category: "Financials",
    icon: Wallet,
    description: "Track all project expenses and process bills accurately in one place.",
    features: ["Digital Receipt Capture", "Expense Analytics"]
  },
  {
    id: "salary",
    title: "Salary & Payroll",
    category: "Financials",
    icon: Briefcase,
    description: "Manage complex employee salaries and disburse payments directly.",
    features: ["Automated Calculation", "Payment History"]
  },
  {
    id: "advances",
    title: "Advance Tracking",
    category: "Financials",
    icon: CreditCard,
    description: "Record and auto-deduct employee salary advances accurately.",
    features: ["Advance Logs", "Auto-Deduction"]
  },
  {
    id: "suppliers",
    title: "Supplier Relations",
    category: "Operations",
    icon: Building2,
    description: "Maintain supplier databases and manage complex material billing.",
    features: ["Vendor Database", "Billing Hub"]
  },
  {
    id: "updates",
    title: "Daily Updates & Reports",
    category: "Operations",
    icon: Newspaper,
    description: "Stay in sync with daily site photos, activity feeds, and progress notes.",
    features: ["Site Photography", "Activity Logs"]
  },
  {
    id: "wallet",
    title: "Document Wallet",
    category: "Operations",
    icon: FileText,
    description: "Securely store and share all vital project and company documents.",
    features: ["Digital Storage", "One-Tap Sharing"]
  },
  {
    id: "roles",
    title: "Role-Based Access",
    category: "Governance",
    icon: ShieldCheck,
    description: "Custom app access for Admins, Managers, Supervisors, and Employees.",
    features: ["Access Control", "Activity Audits"]
  },
  {
    id: "multilingual",
    title: "Multilingual Interface",
    category: "Governance",
    icon: Globe,
    description: "Switch seamlessly between English, Tamil, and Hindi for ground-level teams.",
    features: ["Vernacular UI", "Localized Reports"]
  },
  {
    id: "milestones",
    title: "Milestone Tracking",
    category: "Operations",
    icon: CalendarDays,
    description: "Set start and end dates to visualize progress and prevent delays.",
    features: ["Project Health", "Phase Control"]
  }
];

const BriktraApp = () => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Briktra | Mobile-First ERP for Construction"
        description="Transform your construction operations with Briktra. The leading mobile-first ERP for project, labour, and material management with GPS attendance and offline support."
        keywords="Construction ERP, GPS Attendance, Project Management India, Contractor Software, Briktra App"
        canonical="https://edgezenlabs.com/briktra-app"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 animate-fade-in">
                <HardHat size={16} className="text-orange" />
                <span className="text-sm text-orange font-medium tracking-wide">Mobile-First Construction ERP</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Empower Your <span className="gradient-text">Site Operations</span> with Briktra
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The comprehensive solution for construction companies to manage projects, workforce, and finances right from the palm of their hand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-gradient-purple to-gradient-blue rounded-xl px-8 py-6 text-lg h-auto shadow-lg hover:shadow-xl transition-all" asChild>
                  <a href="https://briktra.com" target="_blank" rel="noopener noreferrer">
                    Explore Briktra Website
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl px-8 py-6 text-lg h-auto border-2 border-border hover:bg-secondary transition-all" asChild>
                  <a href="#modules">
                    View Modules
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-purple/20 rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
              <div className="relative z-10 group max-w-sm w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative glass rounded-[2rem] p-8 md:p-10 bg-white/10 backdrop-blur-3xl border border-white/30 hover:scale-[1.01] transition-transform duration-700 flex items-center justify-center shadow-lg">
                  <img src={briktraLogo} alt="Briktra App" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Offline-First", description: "Works perfectly in low or no connectivity zones.", icon: Zap },
              { label: "Multilingual", description: "Seamless switching between English, Tamil, and Hindi.", icon: Globe },
              { label: "GPS Validated", description: "Accurate attendance tracking with site-radius validation.", icon: MapPin },
            ].map((stat, i) => (
              <div key={i} className="glass p-8 rounded-3xl border border-border/50 space-y-4 hover:border-primary/20 transition-all group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section id="modules" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">The 12 Core <span className="gradient-text">Modules</span></h2>
            <p className="text-lg text-muted-foreground">Everything you need to run a construction business in one unified ERP platform.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((m) => (
              <div 
                key={m.id}
                className={`p-6 rounded-3xl border transition-all duration-300 ${
                  hoveredModule === m.id 
                  ? "bg-card border-primary/50 shadow-xl shadow-primary/5 -translate-y-2" 
                  : "bg-background border-border"
                }`}
                onMouseEnter={() => setHoveredModule(m.id)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                <div className={`h-12 w-12 rounded-2xl mb-6 flex items-center justify-center transition-colors ${
                  hoveredModule === m.id ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                }`}>
                  <m.icon size={24} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-2">{m.category}</p>
                <h3 className="text-xl font-bold mb-3">{m.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{m.description}</p>
                <ul className="space-y-2">
                  {m.features.map(f => (
                    <li key={f} className="flex items-center text-xs text-muted-foreground">
                      <Check size={14} className="text-primary mr-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GPS Feature Deep Dive */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <UserCheck size={16} className="text-orange" />
                <span className="text-sm font-medium tracking-wide">Featured Insight</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight italic">
                A Geolocation-Based <br /> Attendance System That Works.
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Mandatory GPS Verification", desc: "Users must provide real-time location to mark attendance at project sites." },
                  { title: "Site-Radius Validation", desc: "Calculates distance accurately to ensure the worker is within 100m of the site." },
                  { title: "Tamper-Proof Records", desc: "Coordinates and timestamps are captured directly from hardware for maximum integrity." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-full bg-orange flex items-center justify-center shrink-0 mt-1">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange/40 rounded-full blur-[100px] opacity-20" />
              <div className="glass bg-white/5 border-white/10 rounded-[3rem] p-8 md:p-12 relative z-10 space-y-8 transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-2 w-24 bg-white/20 rounded" />
                    <div className="h-4 w-40 bg-white/40 rounded" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-orange/20 border border-orange/40" />
                </div>
                <div className="aspect-[4/5] bg-zinc-900 rounded-[2rem] border border-white/5 overflow-hidden flex flex-col items-center justify-center p-6 text-center space-y-6">
                   <div className="h-20 w-20 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center text-orange animate-pulse">
                      <MapPin size={32} />
                   </div>
                   <div className="space-y-2">
                      <p className="text-xs font-black tracking-widest text-orange/80 uppercase">GPS Verification</p>
                      <h4 className="text-2xl font-bold tracking-tight">Accessing Location...</h4>
                   </div>
                   <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-orange" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] border border-border/50 space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to <span className="gradient-text">Streamline</span> <br /> Your Construction Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Joint the growing list of contractors and construction companies using Briktra to build more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-gradient-purple to-gradient-blue rounded-xl px-12 py-8 text-xl h-auto shadow-2xl hover:scale-105 transition-all" asChild>
                <a href="https://briktra.com" target="_blank" rel="noopener noreferrer">
                  Visit briktra.com <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BriktraApp;
