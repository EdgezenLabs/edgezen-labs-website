export const clientLogos = [
  { name: "VS Corporate Lending", industry: "Finance" },
  { name: "Eladent Consulting", industry: "Healthcare RCM" },
  { name: "Gabriel JM Events", industry: "Events" },
  { name: "CredoSafe", industry: "Fintech" },
  { name: "Briktra", industry: "Construction" },
  { name: "Expeniqo", industry: "Finance AI" },
] as const;

export const trustStats = [
  { value: "6+", label: "Product lines" },
  { value: "3", label: "Client websites" },
  { value: "Full-stack", label: "Delivery model" },
] as const;

export const trustPillars = [
  "Mobile-first engineering",
  "Production-grade architecture",
  "Design-led UX",
  "Cloud-native delivery",
] as const;

export const techStack = ["Flutter", "React", "TypeScript", "Node.js", "AWS", "Unity"] as const;

export const testimonials = [
  {
    quote:
      "EdgeZen delivered a lending website that made our offer clear and gave borrowers a straightforward path to apply. The team understood our business from day one.",
    author: "VS Corporate Lending",
    role: "Business lending platform",
    industry: "Finance",
  },
  {
    quote:
      "Our consulting site needed to feel credible and professional. EdgeZen built a clean, trust-focused presence that reflects how we work with dental practices.",
    author: "Eladent Consulting",
    role: "Dental RCM services",
    industry: "Healthcare",
  },
  {
    quote:
      "Briktra changed how we run sites — attendance, expenses, and reports finally live in one system our field teams actually use.",
    author: "Construction operations lead",
    role: "Briktra ERP rollout",
    industry: "Construction",
  },
] as const;

export const caseStudy = {
  eyebrow: "Featured work",
  title: "Briktra — construction ERP built for the field",
  description:
    "A mobile-first ERP for contractors managing labour, materials, expenses, and site reporting — with GPS attendance, offline support, and multilingual workflows.",
  metrics: [
    { value: "12", label: "Core modules" },
    { value: "3", label: "Languages" },
    { value: "Field-first", label: "Architecture" },
  ],
  href: "/briktra-app",
  cta: "Explore Briktra",
  image: "/briktra_app_mockup.png",
  accent: "from-orange-500/20 via-red-500/10 to-amber-500/20",
} as const;

export const websites = [
  {
    name: "VS Corporate Lending",
    url: "vscorporatelending.com",
    href: "https://vscorporatelending.com/",
    industry: "Finance",
    headline: "Unsecured business loans made simple",
    description: "A focused lending website for banks, NBFCs, and growing business borrowers.",
    accent: "from-emerald-500/25 to-blue-500/20",
    previewGradient: "from-emerald-600/30 via-teal-500/20 to-blue-600/30",
  },
  {
    name: "Eladent Consulting",
    url: "eladentconsulting.com",
    href: "https://eladentconsulting.com/",
    industry: "Dental RCM",
    headline: "Dental billing and RCM experts",
    description: "A clean consulting presence built around trust, clarity, and revenue operations.",
    accent: "from-cyan-500/25 to-violet-500/20",
    previewGradient: "from-cyan-500/30 via-sky-400/20 to-violet-500/30",
  },
  {
    name: "Gabriel JM Events",
    url: "gabrieljmevents.com",
    href: "https://gabrieljmevents.com/",
    industry: "Events",
    headline: "Premier events in Chennai",
    description: "A vibrant event management website for services, inquiries, and brand presence.",
    accent: "from-rose-500/25 to-amber-500/20",
    previewGradient: "from-rose-500/30 via-orange-400/20 to-amber-500/30",
  },
] as const;
