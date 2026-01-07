import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import edgezenLogo from "@/assets/ez.png";
import credosafeLogo from "@/assets/credo_logo.jpg";
import briktraLogo from "@/assets/bricktra.jpg";
import expeniqoLogo from "@/assets/expeniqo-logo.png";
import cardClashLogo from "@/assets/cardclash.png";

const Index = () => {
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
      name: "Card Clash Legends Arena",
      description: "Competitive PvP collectible card battle game built in Unity. AAA fantasy UI with strategic gameplay and multiplayer modes.",
      logo: cardClashLogo,
      color: "gradient-text",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-purple/10 via-gradient-pink/5 to-gradient-blue/10 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-4">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm text-muted-foreground">Engineering Digital Excellence</span>
            </div>

            {/* <img
              src={edgezenLogo}
              alt="EdgeZen Labs"
              className="h-24 md:h-32 w-auto mx-auto mb-8 animate-glow"
            /> */}

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              We Build{" "}
              <span className="gradient-text">Intelligent, Beautiful,</span>{" "}
              Scalable Products
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Mobile Apps • Web Apps • Cloud • AI • Games
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8">
                  Start a Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="text-lg px-8 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  View Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue mx-auto mb-12" />
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">EdgeZen Labs</span> is a full-stack software development company specializing in mobile-first applications, cloud-native systems, and enterprise-grade digital solutions.
              </p>
              <p>
                We build with cutting-edge technologies: <span className="text-accent">Flutter</span>, <span className="text-accent">React</span>, <span className="text-accent">React Native</span>, <span className="text-accent">Unity</span>, <span className="text-accent">TypeScript</span>, <span className="text-accent">Node.js</span>, <span className="text-accent">FastAPI</span>, and <span className="text-accent">Python</span>.
              </p>
              <p>
                Our expertise spans secure cloud architecture on AWS and Google Cloud, AI integrations, API engineering, and immersive game development. We deliver products that are beautiful, scalable, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions designed to transform businesses and delight users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
