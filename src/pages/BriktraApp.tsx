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
  ArrowRight,
  Box,
  Fingerprint,
  Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
const briktraLogo = "/bricktra.jpg";
const appMockup = "/briktra_app_mockup.png";
const holographicIntel = "/holographic_intel.png";

const platformFeatures = [
  {
    title: "Mobile App",
    description: "Empower your field teams with GPS attendance, daily updates, and offline-first capabilities.",
    icon: Smartphone,
    color: "bg-orange/10 text-orange"
  },
  {
    title: "Web Dashboard",
    description: "Deep-dive analytics, payroll management, and real-time site monitoring for office teams.",
    icon: Globe,
    color: "bg-orange/10 text-orange"
  },
  {
    title: "Real-Time Reports",
    description: "Automated daily logs and financial summaries delivered straight to your inbox.",
    icon: Newspaper,
    color: "bg-orange/10 text-orange"
  }
];

const workflowSteps = [
  {
    id: "01",
    title: "Setup Projects",
    description: "Define sites, milestones, and budget allocations in seconds.",
    icon: Building2
  },
  {
    id: "02",
    title: "Onboard Teams",
    description: "Register workers with biometric or GPS profiles for secure tracking.",
    icon: UserCheck
  },
  {
    id: "03",
    title: "Daily Operations",
    description: "Track attendance, expenses, and material delivery in real-time.",
    icon: HardHat
  },
  {
    id: "04",
    title: "Phase Closure",
    description: "Generate comprehensive site reports and final handovers.",
    icon: FileText
  }
];

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
    <div className="site-shell min-h-screen overflow-x-hidden bg-background">
      <SEO 
        title="Briktra | Mobile-First ERP for Construction"
        description="Transform your construction operations with Briktra. The leading mobile-first ERP for project, labour, and material management with GPS attendance and offline support."
        keywords="Construction ERP, GPS Attendance, Project Management India, Contractor Software, Briktra App"
        canonical="https://edgezenlabs.com/briktra-app"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white dark:bg-black">
        {/* Architectural Blueprint Background & Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 10 L100 10 M0 30 L100 30 M0 50 L100 50 M0 70 L100 70 M0 90 L100 90" stroke="currentColor" strokeWidth="0.1" fill="none" />
              <path d="M10 0 L10 100 M30 0 L30 100 M50 0 L50 100 M70 0 L70 100 M90 0 L90 100" stroke="currentColor" strokeWidth="0.1" fill="none" />
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.05" fill="none" />
            </svg>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background" />
          
          {/* Floating Decorative Icons */}
          <div className="absolute top-1/4 left-10 text-orange/20 animate-float opacity-50 hidden lg:block">
            <HardHat size={64} />
          </div>
          <div className="absolute bottom-1/4 right-10 text-orange/20 animate-float opacity-50 hidden lg:block" style={{ animationDelay: "1.5s" }}>
            <Building2 size={80} />
          </div>
          <div className="absolute top-1/2 right-1/4 text-orange/10 animate-bounce-slow opacity-30 hidden lg:block" style={{ animationDelay: "0.5s" }}>
            <Briefcase size={48} />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="space-y-8 max-w-5xl relative">
              <div className="inline-flex items-center space-x-2 bg-orange/5 border border-orange/10 rounded-full px-4 py-2 animate-fade-in shadow-sm">
                <HardHat size={16} className="text-orange" />
                <span className="text-xs text-orange font-bold tracking-[0.15em] uppercase">Mobile-First Construction ERP</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-normal">
                Empower Your <span className="briktra-gradient-text">Site</span> <span className="briktra-gradient-text">Operations</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                The comprehensive solution for construction companies to manage projects, workforce, and finances right from the palm of their hand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="briktra-gradient-bg text-white rounded-full px-10 py-7 text-lg h-auto shadow-[0_10px_20px_-10px_rgba(16,77,55,0.4)] hover:shadow-[0_20px_40px_-15px_rgba(16,77,55,0.5)] hover:-translate-y-1 transition-all duration-300" asChild>
                  <a href="https://briktra.com" target="_blank" rel="noopener noreferrer">
                    Explore Briktra Website
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-10 py-7 text-lg h-auto border-2 border-border/50 hover:bg-orange/5 hover:border-orange/20 transition-all duration-300" 
                  onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Modules
                </Button>
              </div>
              

            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange/10 rounded-full blur-[100px] animate-float" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
              
              {/* Feature Highlight Tags */}
              <div className="absolute -left-16 top-1/4 space-y-3 z-20 hidden xl:block">
                {[
                  { text: "GPS Attendance", icon: MapPin },
                  { text: "Smart Reporting", icon: Newspaper },
                  { text: "Daily Photos", icon: Smartphone }
                ].map((tag, i) => (
                  <div key={i} className="bg-white dark:bg-zinc-900 px-4 py-3 rounded-2xl shadow-xl border border-orange/10 flex items-center space-x-3 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                    <tag.icon size={16} className="text-orange" />
                    <span className="text-sm font-bold">{tag.text}</span>
                  </div>
                ))}
              </div>

              <div className="relative z-10 group max-w-md w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange to-orange rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-zinc-900/50 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/40 dark:border-white/5 shadow-2xl hover:scale-[1.02] transition-transform duration-700">
                  <img src={briktraLogo} alt="Briktra App" className="w-full h-auto object-contain rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronRight className="rotate-90 text-orange/40" size={32} />
        </div>
      </section>



      {/* Stats Section - Replaced with Platform Suite */}
      <section className="py-24 relative overflow-hidden bg-[hsl(var(--briktra-warm))] dark:bg-zinc-900/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h3 className="text-orange font-bold uppercase tracking-widest text-xs">The Digital Ecosystem</h3>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Unified <span className="briktra-gradient-text">Product Suite</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {platformFeatures.map((feature, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] shadow-sm border border-border/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                <div className={`h-16 w-16 rounded-2xl ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the App Showcase */}
      <section className="py-32 relative mesh-grid">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Floating UI Elements */}
              <div className="absolute -top-10 -left-10 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl border border-orange/10 z-20 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold">Live Tracking: Block A</span>
                </div>
              </div>
              <div className="absolute bottom-1/4 -right-10 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl border border-orange/10 z-20 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-3">
                  <FileText className="text-orange" size={16} />
                  <span className="text-xs font-bold">Daily Report Generated</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-orange/20 blur-[120px] rounded-full animate-pulse" />
              <div className="relative bg-white dark:bg-zinc-900 p-4 rounded-[3.5rem] shadow-2xl border border-white/20 overflow-hidden group">
                <img src={appMockup} alt="Inside Briktra" className="w-full h-auto rounded-[3rem] group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8 relative">
              {/* Guiding Arrow */}
              <div className="absolute -top-10 -right-20 text-orange/10 rotate-[20deg] hidden xl:block">
                <ArrowRight size={160} strokeWidth={0.5} />
              </div>

              <div className="inline-flex items-center space-x-2 bg-orange/10 px-4 py-2 rounded-full">
                <ShieldCheck size={16} className="text-orange" />
                <span className="text-xs font-bold text-orange uppercase tracking-wider">Field-Proven Reliability</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">
                Intelligence <br /> <span className="briktra-gradient-text">In The Field</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Briktra is built specifically for the rugged environment of construction sites. Our "Field-to-Office" technology ensures that your data is synced the moment site activity happens, meaning no more lost reports or manual logs.
              </p>
              <ul className="space-y-6">
                {[
                  "Automated GPS-fenced attendance tracking",
                  "Material inventory with manual logs & tracking",
                  "Instant digital receipt capture for accounting",
                  "Multi-manager approval workflows"
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="h-6 w-6 rounded-full bg-orange/10 flex items-center justify-center mr-4 mt-1 group-hover:bg-orange group-hover:text-white transition-all">
                      <Check size={14} className="text-orange group-hover:text-white" />
                    </div>
                    <span className="text-lg font-medium text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Briktra Section - Dark High-Contrast */}
      <section className="py-32 bg-[hsl(var(--briktra-navy))] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange/5 blur-[150px] -mr-32" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic px-2 -mx-2">Why <span className="text-orange">Briktra?</span></h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
              We bridge the massive gap between traditional site management and modern digital intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "10x Faster", desc: "Digital reporting vs manual paper logs.", icon: Zap },
              { label: "Precision Tracking", desc: "Monitor every rupee and resource in real-time.", icon: ShieldCheck },
              { label: "Local Ready", desc: "Full support for Tamil, Hindi, and English.", icon: Globe },
              { label: "Bank Grade", desc: "Your project data is encrypted and secure.", icon: CreditCard }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group">
                <div className="h-14 w-14 rounded-2xl bg-orange flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.label}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Workflow */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-orange font-bold uppercase tracking-widest text-xs">The Workflow</h3>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">Standardized <br /> <span className="text-muted-foreground font-light">Execution</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Implement professional ERP processes across all your project sites in four simple steps.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {workflowSteps.map((step) => (
                <div key={step.id} className="p-10 rounded-[3rem] bg-[hsl(var(--briktra-warm))] border border-orange/5 flex flex-col items-start space-y-6 group hover:border-orange/20 transition-all">
                  <div className="flex justify-between w-full items-start">
                    <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-orange shadow-sm group-hover:bg-orange group-hover:text-white transition-all">
                      <step.icon size={24} />
                    </div>
                    <span className="text-4xl font-black text-orange/10 group-hover:text-orange/20 transition-colors">{step.id}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">{step.title}</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section id="modules" className="py-32 relative mesh-grid bg-[hsl(var(--briktra-warm))] dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">
              The 12 Core <span className="briktra-gradient-text">Modules</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Everything you need to run a construction business in one unified, high-performance ERP platform.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {modules.map((m) => (
              <div 
                key={m.id}
                className={`group p-8 rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden ${
                  hoveredModule === m.id 
                  ? "bg-white dark:bg-zinc-800 border-orange/30 shadow-2xl shadow-orange/10 -translate-y-2" 
                  : "bg-white/50 dark:bg-zinc-900/50 border-border/50 hover:border-orange/20"
                }`}
                onMouseEnter={() => setHoveredModule(m.id)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                {/* Hover Background Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-full -mr-16 -mt-16 blur-2xl transition-opacity duration-500 ${hoveredModule === m.id ? "opacity-100" : "opacity-0"}`} />
                
                <div className={`h-16 w-16 rounded-2xl mb-8 flex items-center justify-center transition-all duration-500 ${
                  hoveredModule === m.id ? "bg-orange text-white rotate-[10deg]" : "bg-orange/10 text-orange shadow-inner"
                }`}>
                  <m.icon size={32} />
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange mb-2">{m.category}</p>
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-orange transition-colors">{m.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed font-light">{m.description}</p>
                  
                  <ul className="space-y-3 pt-2">
                    {m.features.map(f => (
                      <li key={f} className="flex items-center text-sm text-muted-foreground font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange mr-3 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-white dark:bg-black overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h3 className="text-orange font-bold uppercase tracking-widest text-xs">The Digital Edge</h3>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Manual Logs <span className="text-muted-foreground font-light text-3xl align-middle px-4">VS</span> <span className="briktra-gradient-text">Briktra</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-border/40 rounded-[3rem] overflow-hidden border border-border/40">
            <div className="bg-zinc-50 dark:bg-zinc-900/20 p-12 space-y-8">
              <h4 className="text-2xl font-bold flex items-center">
                <div className="h-2 w-2 rounded-full bg-zinc-400 mr-3" />
                Traditional Method
              </h4>
              <ul className="space-y-6">
                {[
                  "Manual attendance on paper registers",
                  "Scattered expense bills and lost receipts",
                  "Weekly status updates via phone calls",
                  "Inaccurate labour & material billing",
                  "Zero visibility on real-time site productivity"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-muted-foreground line-through opacity-50">
                    <Check size={16} className="mr-4 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[hsl(var(--briktra-warm))] p-12 space-y-8 relative">
              <div className="absolute top-0 right-0 p-8">
                <Zap className="text-orange animate-pulse" size={48} />
              </div>
              <h4 className="text-2xl font-bold flex items-center text-orange uppercase tracking-tighter">
                <div className="h-2 w-2 rounded-full bg-orange mr-3 animate-pulse" />
                The Briktra Way
              </h4>
              <ul className="space-y-6">
                {[
                  "Automated GPS-fenced biometric tracking",
                  "Instant digital receipt capture & auto-filing",
                  "Live site photos and daily progress feeds",
                  "Precision-calculated billing & payroll",
                  "Real-time dashboards for 100% control"
                ].map((item, i) => (
                  <li key={i} className="flex items-start font-medium animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="h-5 w-5 rounded-full bg-orange/20 flex items-center justify-center mr-4 mt-1 shrink-0">
                      <Check size={12} className="text-orange" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto bg-[hsl(var(--briktra-navy))] text-white p-16 md:p-24 rounded-[4rem] relative overflow-hidden group border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-orange/20 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange/5 rounded-full blur-[100px] -ml-32 -mb-32 group-hover:bg-orange/15 transition-all duration-700" />
            
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                Ready to <span className="text-orange">Streamline</span> <br /> Your Construction?
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                Join the leading contractors who are building the future with digital precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button size="lg" className="bg-orange text-white rounded-full px-12 py-10 text-2xl h-auto shadow-2xl hover:bg-orange/90 hover:scale-105 transition-all duration-300 group" asChild>
                  <a href="https://briktra.com" target="_blank" rel="noopener noreferrer">
                    Visit briktra.com <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BriktraApp;
