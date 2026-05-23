import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const edgezenLogo = "/ez.png";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Briktra App", path: "/briktra-app" },
    { name: "Technologies", path: "/technologies" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group outline-none">
            <motion.img
              src={edgezenLogo}
              alt="EdgeZen Labs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-8 md:h-10 w-auto filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-secondary/50 backdrop-blur-md border border-white/5 rounded-full p-1 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-foreground text-background shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-foreground text-background hover:scale-105 transition-transform rounded-xl px-6 py-2 text-xs font-bold uppercase tracking-widest">
                Start a Project
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-foreground bg-secondary/80 backdrop-blur-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-10 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={link.path}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-4 rounded-2xl text-lg font-medium transition-all ${
                      location.pathname === link.path
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-foreground text-background py-8 rounded-3xl text-xl font-bold uppercase tracking-widest">
                    Start a Project
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
