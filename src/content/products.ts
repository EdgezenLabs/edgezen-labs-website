import { productAssets } from "@/lib/assets";

export const products = [
  {
    name: "CredoSafe",
    eyebrow: "Fintech ERP",
    description:
      "Complete loan processing & ERP system. Mobile-first platform managing applications, verifications, credit checks, approvals & disbursals.",
    logo: productAssets.credosafe.src,
    color: "text-gold",
    link: "/products#credosafe",
  },
  {
    name: "Briktra",
    eyebrow: "Construction ERP",
    description:
      "Construction & Contractor ERP. Field-optimized mobile platform for projects, labour, materials, vendors. Offline-first & multilingual.",
    logo: productAssets.briktra.src,
    mockup: productAssets.briktraMockup.src,
    color: "text-orange",
    link: "/briktra-app",
  },
  {
    name: "Expeniqo",
    eyebrow: "Finance AI",
    description:
      "Smart AI-powered expense tracker. Automatically reads SMS, identifies transactions, categorizes spending, and generates insights.",
    logo: productAssets.expeniqo.src,
    color: "text-gold",
    link: "/products#expeniqo",
  },
  {
    name: "ClashCard Legends Arena",
    eyebrow: "Mobile Game",
    description:
      "A fantasy mobile card battle experience where players build decks, unlock legendary cards, and compete through strategy-driven arena gameplay.",
    logo: productAssets.cardclash.src,
    color: "gradient-text",
    link: "/products#clashcard-legends-arena",
  },
  {
    name: "Maintzen",
    eyebrow: "Field Service",
    description:
      "Specialized field service management for RO water purifier companies. Manage agreements, schedules, and technicians with real-time field reporting.",
    logo: productAssets.maintzen.src,
    color: "text-blue-500",
    link: "/products#maintzen",
  },
  {
    name: "GSTLedger Pro",
    eyebrow: "Enterprise GST Suite",
    description:
      "Precision invoicing, smarter inventory, and seamless GST compliance. All-in-one business management for high-speed POS & multi-warehouse operations.",
    logo: productAssets.gstledger.src,
    color: "text-emerald-600",
    link: "/products#gstledger-pro",
  },
] as const;

export const featuredProducts = [products[0], products[1], products[2]];

export type Product = (typeof products)[number];
