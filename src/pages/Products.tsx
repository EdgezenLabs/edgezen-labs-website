import { Shield, HardHat, TrendingUp, Swords, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import credosafeLogo from "@/assets/credo_logo.jpg";
import briktraLogo from "@/assets/bricktra.jpg";
import expeniqoLogo from "@/assets/expeniqo-logo.png";

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

      {/* Card Clash Legends */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2">
                <Swords size={16} className="text-accent" />
                <span className="text-sm text-accent font-medium">Mobile Game</span>
              </div>
              <h2 className="text-4xl font-bold gradient-text">Card Clash Legends Arena</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A competitive PvP collectible card battle game built in Unity with C#. Immersive AAA fantasy UI, strategic gameplay, and intense multiplayer battles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Multiplayer Modes",
                  description: "1v1 Ranked, Tournament, and Casual battles with real-time matchmaking",
                },
                {
                  title: "Collectible Cards",
                  description: "100+ unique cards with different rarities, abilities, and strategic combinations",
                },
                {
                  title: "Battle Arenas",
                  description: "Dynamic arenas with environmental effects that influence gameplay",
                },
                {
                  title: "Progression System",
                  description: "Level up cards, unlock new abilities, and climb the global leaderboard",
                },
                {
                  title: "AAA Fantasy UI",
                  description: "Stunning visual effects, animations, and polished user interface",
                },
                {
                  title: "Cross-platform",
                  description: "Seamless gameplay across iOS and Android with cloud save",
                },
              ].map((feature) => (
                <div key={feature.title} className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 gradient-text">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
