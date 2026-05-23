import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react";

const edgezenLogo = "/ez.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-card">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-14 rounded-3xl border border-border/70 bg-background p-8 shadow-sm md:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Build With Us</p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
                Have a product idea, platform, or app that needs to feel premium?
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-semibold text-background shadow-lg shadow-foreground/10 transition-transform hover:scale-[1.03]"
            >
              Start a Project
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img src={edgezenLogo} alt="EdgeZen Labs" className="h-10 w-auto" />
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              Engineering digital excellence through mobile apps, web platforms, cloud systems, AI, and games.
            </p>
            <a
              href="https://www.linkedin.com/company/edgezen-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-accent/30 hover:text-accent"
              aria-label="EdgeZen Labs LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/60">Company</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Products", "Websites", "Technologies", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/60">Products</h3>
            <ul className="space-y-3">
              {[
                { name: 'CredoSafe', path: '/products#credosafe' },
                { name: 'Briktra', path: '/products#briktra' },
                { name: 'Expeniqo', path: '/products#expeniqo' },
                { name: 'ClashCard Legends', path: '/products#clashcard-legends-arena' },
                { name: 'Maintzen', path: '/products#maintzen' },
              ].map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/60">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-accent" />
                <a href="mailto:edgezenlabs@gmail.com" className="transition-colors hover:text-accent">
                  edgezenlabs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 text-accent" />
                <div className="space-y-1">
                  <a href="tel:+917673838389" className="block transition-colors hover:text-accent">
                    +91 76738 38389
                  </a>
                  <a href="tel:+918680890318" className="block transition-colors hover:text-accent">
                    +91 86808 90318
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {currentYear} EdgeZen Labs. All rights reserved.</p>
          <p>Built for intelligent, scalable digital products.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
