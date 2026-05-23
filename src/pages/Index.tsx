import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

const Index = () => {
  const credosafeLogo = "/credo_logo.jpg";
  const briktraLogo = "/bricktra.jpg";
  const expeniqoLogo = "/expeniqo-logo.png";
  const cardClashLogo = "/cardclash.png";
  const maintzenLogo = "/maintzen_logo_accurate.png";

  const products = [
    {
      name: "CredoSafe",
      description: "Complete loan processing & ERP system. Mobile-first platform managing applications, verifications, credit checks, approvals & disbursals.",
      logo: credosafeLogo,
      color: "text-gold",
    },
    {
      name: "Briktra",
      description: "Construction & Contractor ERP. Field-optimized mobile platform for projects, labour, materials, vendors. Offline-first & multilingual.",
      logo: briktraLogo,
      color: "text-orange",
    },
    {
      name: "Expeniqo",
      description: "Smart AI-powered expense tracker. Automatically reads SMS, identifies transactions, categorizes spending, and generates insights.",
      logo: expeniqoLogo,
      color: "text-gold",
    },
    {
      name: "ClashCard Legends Arena",
      description: "A fantasy mobile card battle experience where players build decks, unlock legendary cards, and compete through strategy-driven arena gameplay.",
      logo: cardClashLogo,
      color: "gradient-text",
    },
    {
      name: "Maintzen",
      description: "Specialized field service management for RO water purifier companies. Manage agreements, schedules, and technicians with real-time field reporting.",
      logo: maintzenLogo,
      color: "text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 mesh-gradient">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-purple/30 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-blue/30 rounded-full blur-[120px]" 
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-4"
            >
              <Sparkles size={16} className="text-accent animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium tracking-wide">ENGINEERING DIGITAL EXCELLENCE</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight"
            >
              We Build{" "}
              <span className="gradient-text text-glow">Intelligent, Beautiful,</span>{" "}
              Scalable Products
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light tracking-wide"
            >
              Enterprise Mobile Apps • AI Systems • Immersive Games
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-foreground text-background hover:scale-105 transition-transform text-lg px-10 py-7 rounded-2xl shadow-xl shadow-foreground/10">
                  Start a Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="ghost" className="text-lg px-10 py-7 rounded-2xl bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80">
                  View Our Products
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/30"
        >
          <div className="w-1 h-10 bg-gradient-to-b from-muted-foreground/50 to-transparent rounded-full" />
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Who We Are</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-gradient-purple to-gradient-blue mx-auto rounded-full" />
              </div>
              
              <div className="space-y-8 text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                <p>
                  <span className="text-foreground font-medium">EdgeZen Labs</span> is an elite digital product studio specializing in high-performance cross-platform applications and AI-driven solutions.
                </p>
                <div className="flex flex-wrap gap-3 py-4">
                  {["Flutter", "React", "Unity", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
                    <span key={tech} className="px-4 py-1 rounded-full border border-border text-sm font-medium hover:border-accent transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
                <p>
                  We blend deep engineering expertise with world-class design to deliver products that are not just functional, but <span className="text-accent underline underline-offset-8">extraordinary</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 md:py-40 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Pushing the boundaries of what's possible in tech
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
