export const websiteShowcases = [
  {
    name: "VS Corporate Lending",
    url: "vscorporatelending.com",
    href: "https://vscorporatelending.com/",
    industry: "Finance & Lending",
    headline: "Unsecured business loans made simple",
    summary:
      "A conversion-focused business lending website with loan services, eligibility guidance, document checklist, and direct inquiry flows.",
    description: "A focused lending website for banks, NBFCs, and growing business borrowers.",
    highlights: ["Loan service portfolio", "Eligibility-led UX", "Fast contact actions"],
    accent: "from-emerald-500/20 to-blue-500/20",
    previewGradient: "from-emerald-600/30 via-teal-500/20 to-blue-600/30",
  },
  {
    name: "Eladent Consulting",
    url: "eladentconsulting.com",
    href: "https://eladentconsulting.com/",
    industry: "Dental Billing & RCM",
    headline: "Dental billing and RCM experts",
    summary:
      "A professional consulting presence for dental revenue cycle services, built to communicate expertise and create a clean first impression.",
    description: "A clean consulting presence built around trust, clarity, and revenue operations.",
    highlights: ["Healthcare positioning", "Lead-ready structure", "Trust-focused design"],
    accent: "from-cyan-500/20 to-violet-500/20",
    previewGradient: "from-cyan-500/30 via-sky-400/20 to-violet-500/30",
  },
  {
    name: "Gabriel JM Events",
    url: "gabrieljmevents.com",
    href: "https://gabrieljmevents.com/",
    industry: "Event Management",
    headline: "Premier events in Chennai",
    summary:
      "A vibrant event management website designed to showcase services, capture inquiries, and present a premium local events brand.",
    description: "A vibrant event management website for services, inquiries, and brand presence.",
    highlights: ["Service showcase", "Mobile-first layout", "Inquiry-focused flow"],
    accent: "from-rose-500/20 to-amber-500/20",
    previewGradient: "from-rose-500/30 via-orange-400/20 to-amber-500/30",
  },
] as const;

/** Home page card subset */
export const homeWebsites = websiteShowcases.map(
  ({ name, url, href, industry, headline, description, accent, previewGradient }) => ({
    name,
    url,
    href,
    industry,
    headline,
    description,
    accent,
    previewGradient,
  }),
);
