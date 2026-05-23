import { Shield, HardHat, TrendingUp, Swords, Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

const Products = () => {
  const credosafeLogo = "/credo_logo.jpg";
  const briktraLogo = "/bricktra.jpg";
  const expeniqoLogo = "/expeniqo-logo.png";
  const cardclashLogo = "/cardclash.png";
  const maintzenLogo = "/maintzen_logo_accurate.png";

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-52 md:pb-40 mesh-gradient relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              Our <span className="gradient-text">Masterpieces</span>
            </motion.h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue mx-auto mb-8 rounded-full" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto"
            >
              Precision-engineered solutions designed to redefine industry standards.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CredoSafe */}
      <section className="py-32 bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl group-hover:bg-gold/20 transition-all duration-700" />
                <img src={credosafeLogo} alt="CredoSafe" className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-5 py-2 border-gold/20">
                  <Shield size={16} className="text-gold" />
                  <span className="text-sm text-gold font-medium tracking-wider uppercase">Enterprise Loan ERP</span>
                </div>
                <h2 className="text-5xl font-bold text-gold tracking-tight">CredoSafe</h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  A high-performance loan processing ecosystem designed for elite financial institutions. Seamlessly manage the complete credit lifecycle with millisecond precision.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Lifecycle Management",
                    "Real-time Credit Verification",
                    "Encrypted Document Vault",
                    "Dynamic Approval Flows",
                    "Automated Liquidity",
                    "Predictive Analytics",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 group">
                      <Check className="text-gold shrink-0 transition-transform group-hover:scale-125" size={20} />
                      <span className="text-muted-foreground font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Briktra */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-5 py-2 border-orange/20">
                  <HardHat size={16} className="text-orange" />
                  <span className="text-sm text-orange font-medium tracking-wider uppercase">Industrial Architecture ERP</span>
                </div>
                <h2 className="text-5xl font-bold text-orange tracking-tight">Briktra</h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  The definitive field-first ERP for construction giants. Engineered for extreme performance in low-connectivity environments with sophisticated multilingual logic.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Project Orchestration",
                    "Labor Optimization",
                    "Asset Intelligence",
                    "Vendor Ecosystems",
                    "Fiscal Governance",
                    "Offline-Ready Core",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 group">
                      <Check className="text-orange shrink-0 transition-transform group-hover:scale-125" size={20} />
                      <span className="text-muted-foreground font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link to="/briktra-app">
                    <Button className="bg-orange hover:bg-orange/90 text-white rounded-2xl px-8 py-6 text-lg hover:shadow-xl hover:shadow-orange/20 transition-all">
                      Explore Briktra <ChevronRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-orange/10 rounded-3xl blur-2xl group-hover:bg-orange/20 transition-all duration-700" />
                <img src={briktraLogo} alt="Briktra" className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expeniqo */}
      <section className="py-32 bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                <img src={expeniqoLogo} alt="Expeniqo" className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-5 py-2">
                  <TrendingUp size={16} className="text-accent" />
                  <span className="text-sm text-accent font-medium tracking-wider uppercase">Cognitive Finance AI</span>
                </div>
                <h2 className="text-5xl font-bold gradient-text tracking-tight">Expeniqo</h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  Next-generation financial intelligence. Expeniqo leverages advanced neural pattern recognition to automate expense tracking and deliver breathtaking fiscal insights.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Neural SMS Extraction",
                    "Cognitive Categorization",
                    "Predictive Analytics",
                    "Fiscal Governance",
                    "Smart Forecasting",
                    "Privacy-First Core",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 group">
                      <Check className="text-accent shrink-0 transition-transform group-hover:scale-125" size={20} />
                      <span className="text-muted-foreground font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ClashCard Legends Arena */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-5 py-2">
                  <Swords size={16} className="text-accent" />
                  <span className="text-sm text-accent font-medium tracking-wider uppercase">Immersive Strategy Game</span>
                </div>
                <h2 className="text-5xl font-bold gradient-text tracking-tight">ClashCard Legends</h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  The ultimate competitive card-battle experience. Built on a scalable multiplayer architecture with breathtaking AAA-grade visual effects and tactical depth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Real-time Matchmaking",
                    "Legendary Card Economy",
                    "Dynamic Battle Arenas",
                    "Progression Mastery",
                    "Fluid AAA Interface",
                    "Cross-Platform Core",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 group">
                      <Check className="text-accent shrink-0 transition-transform group-hover:scale-125" size={20} />
                      <span className="text-muted-foreground font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
                <img src={cardclashLogo} alt="ClashCard Legends" className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Maintzen */}
      <section className="py-32 bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl group-hover:bg-blue-500/20 transition-all duration-700" />
                <img
                  src={maintzenLogo}
                  alt="Maintzen"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 glass rounded-full px-5 py-2 border-blue-500/20">
                  <Shield size={16} className="text-blue-500" />
                  <span className="text-sm text-blue-500 font-medium tracking-wider uppercase">Service Orchestration</span>
                </div>
                <h2 className="text-5xl font-bold text-blue-600 tracking-tight">Maintzen</h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  Revolutionizing service management for the water purification industry. An end-to-end orchestration platform for high-velocity field teams.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">A</span> Admin Command
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2 font-light">
                      <li>• Agreement Automation</li>
                      <li>• Smart Dispatching</li>
                      <li>• Fiscal Intelligence</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-3">
                       <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">T</span> Technician Edge
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2 font-light">
                      <li>• Real-time Routing</li>
                      <li>• Digital Diagnostics</li>
                      <li>• Instant Compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
