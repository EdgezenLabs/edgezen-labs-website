import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import GlobalCTA from "@/components/layout/GlobalCTA";
import { footerCompanyLinks, footerLegalLinks, productLinks } from "@/content/navigation";

const edgezenLogo = "/ez.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-card">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="container mx-auto px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-14">
          <GlobalCTA />
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <img src={edgezenLogo} alt="EdgeZen Labs" className="h-10 w-auto" />
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Engineering digital excellence through mobile apps, web platforms, cloud systems, AI, and games.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/edgezen-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-default hover:border-accent/30 hover:text-accent"
                aria-label="EdgeZen Labs on LinkedIn"
              >
                <Linkedin size={18} aria-hidden />
              </a>
              <a
                href="https://github.com/edgezen-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-default hover:border-accent/30 hover:text-accent"
                aria-label="EdgeZen Labs on GitHub"
              >
                <Github size={18} aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/70">Company</h3>
            <ul className="space-y-3">
              {footerCompanyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground transition-default hover:text-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/70">Products</h3>
            <ul className="space-y-3">
              {productLinks
                .filter((p) => p.path !== "/products")
                .map((product) => (
                  <li key={product.name}>
                    <Link
                      to={product.path}
                      className="text-sm text-muted-foreground transition-default hover:text-accent"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/70">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="shrink-0 text-accent" aria-hidden />
                <a href="mailto:contact@edgezenlabs.com" className="transition-default hover:text-accent">
                  contact@edgezenlabs.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <div className="space-y-1">
                  <a href="tel:+919176738389" className="block transition-default hover:text-accent">
                    +91 91767 38389
                  </a>
                  <a href="tel:+918680890318" className="block transition-default hover:text-accent">
                    +91 86808 90318
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {currentYear} EdgeZen Labs. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {footerLegalLinks.map((link) => (
              <Link key={link.path} to={link.path} className="transition-default hover:text-accent">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
