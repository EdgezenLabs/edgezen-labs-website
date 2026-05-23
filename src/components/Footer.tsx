import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const edgezenLogo = "/ez.png";

  return (
    <footer className="relative border-t border-white/5 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-secondary/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {/* Brand */}
          <div className="space-y-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <img src={edgezenLogo} alt="EdgeZen Labs" className="h-12 w-auto filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
            </motion.div>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xs">
              Engineering Digital Excellence. We craft high-performance products for the next generation of enterprises.
            </p>
            <div className="flex space-x-6">
              {[
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/edgezen-labs" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">Company</h3>
            <ul className="space-y-4">
              {["About", "Services", "Products", "Technologies", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 font-light flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-foreground mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">Portfolio</h3>
            <ul className="space-y-4">
              {["CredoSafe", "Briktra", "Expeniqo", "ClashCard Legends"].map((product) => (
                <li key={product}>
                  <Link
                    to={product === "Briktra" ? "/briktra-app" : "/products"}
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 font-light"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">Connectivity</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-2xl glass flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={18} className="text-muted-foreground group-hover:text-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">Email</p>
                  <a href="mailto:edgezenlabs@gmail.com" className="text-sm font-light hover:text-foreground transition-colors">
                    edgezenlabs@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-2xl glass flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={18} className="text-muted-foreground group-hover:text-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">Phone</p>
                  <a href="tel:+917673838389" className="text-sm font-light hover:text-foreground transition-colors block">
                    +91 76738 38389
                  </a>
                  <a href="tel:+918680890318" className="text-sm font-light hover:text-foreground transition-colors block">
                    +91 86808 90318
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-muted-foreground font-light tracking-wide">
            © {currentYear} EdgeZen Labs. Orchestrating digital futures.
          </p>
          <div className="flex space-x-12">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-all duration-300 font-light underline-offset-4 hover:underline">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-all duration-300 font-light underline-offset-4 hover:underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
