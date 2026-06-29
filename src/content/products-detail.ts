import type { LucideIcon } from "lucide-react";
import { BadgeCheck, HardHat, Shield, Swords, TrendingUp, Wrench } from "lucide-react";

export const productDetails: {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  stats: string[];
  features: string[];
  note?: string;
  cta?: { label: string; path: string };
}[] = [
  {
    name: "CredoSafe",
    tagline: "Loan Processing ERP",
    description:
      "Complete loan processing and ERP system designed for financial institutions. Manage the entire loan lifecycle from application to disbursal with our mobile-first platform.",
    logo: "/credo_logo.jpg",
    icon: Shield,
    color: "text-gold",
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
    description:
      "Mobile-first ERP for construction and contractors. Built for the field with advanced billing, multilingual support, and super lightweight performance.",
    logo: "/bricktra.jpg",
    icon: HardHat,
    color: "text-orange",
    gradient: "from-orange-500/20 via-red-500/10 to-yellow-500/20",
    stats: ["Labour tracking", "Vendor control", "Field reports"],
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
    description:
      "Smart expense tracker powered by AI. Automatically reads SMS messages, identifies transactions, categorizes spending, and generates actionable insights.",
    logo: "/expeniqo-logo.png",
    icon: TrendingUp,
    color: "text-gold",
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
    description:
      "A competitive mobile fantasy card-battle game where players build powerful decks, collect unique legendary cards, and compete in strategic arena battles.",
    logo: "/cardclash.png",
    icon: Swords,
    color: "gradient-text",
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
    description:
      "Specialized field service management for RO water purifier companies. Streamline your entire service lifecycle from agreement signing to technician dispatch.",
    logo: "/maintzen_logo_accurate.png",
    icon: Wrench,
    color: "text-blue-600",
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
    description:
      "Precision invoicing, smarter inventory, and seamless GST compliance. An all-in-one business management suite designed for high-speed POS and multi-warehouse operations.",
    logo: "/gstledger-logo.png",
    icon: BadgeCheck,
    color: "text-emerald-600",
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

export const slugifyProduct = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
