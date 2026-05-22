import { Shield, HardHat, TrendingUp, Swords, Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
const credosafeLogo = "/credo_logo.jpg";
const briktraLogo = "/bricktra.jpg";
const expeniqoLogo = "/expeniqo-logo.png";
const cardclashLogo = "/cardclash.png";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Products</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue mx-auto mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground">
              Innovative solutions built to transform industries and empower businesses
            </p>
          </div>
        </div>
      </section>

      {/* CredoSafe */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={credosafeLogo} alt="CredoSafe" className="w-full max-w-md mx-auto" />
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <Shield size={16} className="text-gold" />
                  <span className="text-sm text-gold font-medium">Loan Processing ERP</span>
                </div>
                <h2 className="text-4xl font-bold text-gold">CredoSafe</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Complete loan processing and ERP system designed for financial institutions. Manage the entire loan lifecycle from application to disbursal with our mobile-first platform.
                </p>
                <div className="space-y-3">
                  {[
                    "Loan Application Management",
                    "Credit Verification & Checks",
                    "Document Management & Vault",
                    "Approval Workflows",
                    "Automated Disbursal",
                    "Analytics & Reporting Dashboard",
                    "Multi-channel Integration",
                    "Role-based Access Control",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <Check className="text-gold shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Briktra */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <HardHat size={16} className="text-orange" />
                  <span className="text-sm text-orange font-medium">Construction ERP</span>
                </div>
                <h2 className="text-4xl font-bold text-orange">Briktra</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mobile-first ERP for construction and contractors. Built for the field with offline capability, multilingual support, and super lightweight performance.
                </p>
                <div className="space-y-3">
                  {[
                    "Project Management & Tracking",
                    "Labour Attendance & Management",
                    "Material Procurement & Inventory",
                    "Vendor & Supplier Management",
                    "Expense Tracking & Budgeting",
                    "Site Reports & Documentation",
                    "Offline-first Architecture",
                    "Multilingual Interface",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <Check className="text-orange shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link to="/briktra-app">
                    <Button className="bg-orange hover:bg-orange/90 text-white rounded-lg">
                      Learn More <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img src={briktraLogo} alt="Briktra" className="w-full max-w-md mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expeniqo */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={expeniqoLogo} alt="Expeniqo" className="w-full max-w-md mx-auto" />
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <TrendingUp size={16} className="text-gold" />
                  <span className="text-sm text-gold font-medium">AI Expense Tracker</span>
                </div>
                <h2 className="text-4xl font-bold text-gold">Expeniqo</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Smart expense tracker powered by AI. Automatically reads your SMS messages, identifies transactions, categorizes spending, and generates actionable insights.
                </p>
                <div className="space-y-3">
                  {[
                    "Automatic SMS Transaction Reading",
                    "AI-powered Categorization",
                    "Smart Spending Analytics",
                    "Budget Planning & Alerts",
                    "Expense Forecasting",
                    "Multi-account Management",
                    "Export Reports (PDF/Excel)",
                    "Privacy-first Design",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <Check className="text-gold shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ClashCard Legends Arena */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <Swords size={16} className="text-accent" />
                  <span className="text-sm text-accent font-medium">Strategy Card Battle Game</span>
                </div>
                <h2 className="text-4xl font-bold gradient-text">ClashCard Legends Arena</h2>
                <div className="text-accent font-semibold italic text-lg opacity-80">
                  Strategy. Cards. Legends. Battle Beyond Limits.
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ClashCard Legends Arena is a competitive mobile fantasy card-battle game where players build powerful decks, collect unique legendary cards, and compete in strategic arena battles. Designed with an immersive fantasy experience and simple gameplay flow, the game combines deck-building mechanics, tactical decision-making, and engaging progression systems.
                </p>
                <div className="space-y-3">
                  {[
                    "Custom Deck Building System",
                    "Fantasy-Themed Strategic Card Battles",
                    "Legendary & Rare Card Collection",
                    "Secure Account System with Authentication",
                    "Progression & Player Growth System",
                    "Competitive Arena Gameplay",
                    "Mobile-Optimized User Experience",
                    "Expandable Multiplayer Architecture",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <Check className="text-accent shrink-0" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  Players can create personalized decks, unlock powerful characters, and challenge opponents through exciting arena gameplay. The game focuses on delivering a smooth mobile experience with intuitive design and scalable systems for future competitive and social features.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src={cardclashLogo} alt="ClashCard Legends Arena" className="w-full max-w-md mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintzen */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-full max-w-md aspect-square bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <span className="text-muted-foreground italic">Maintzen Logo Placeholder</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2">
                  <Shield size={16} className="text-blue-500" />
                  <span className="text-sm text-blue-500 font-medium">Field Service Management</span>
                </div>
                <h2 className="text-4xl font-bold text-blue-600">Maintzen</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Maintzen is a specialized field service management platform designed for RO water purifier service companies. Streamline your entire service lifecycle from agreement signing to technician dispatch.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Check className="text-blue-500" size={18} /> Admin Dashboard
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1 pl-7">
                      <li>• Manage Customer Agreements</li>
                      <li>• Automated Service Scheduling</li>
                      <li>• Technician Job Assignment</li>
                      <li>• Comprehensive Field Reports</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Check className="text-blue-500" size={18} /> Tech Mobile App
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1 pl-7">
                      <li>• Real-time Job Notifications</li>
                      <li>• Built-in Customer Navigation</li>
                      <li>• Instant Service Reporting</li>
                      <li>• Digital Signature Capture</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  Designed to help RO service businesses scale by automating periodic maintenance tracking and optimizing field worker efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
