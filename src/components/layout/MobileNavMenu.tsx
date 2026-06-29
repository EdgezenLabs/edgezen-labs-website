import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { REVEAL_TRANSITION, staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { primaryNavLinks, productLinks } from "@/content/navigation";

type ProductLink = (typeof productLinks)[number];
type PrimaryLink = (typeof primaryNavLinks)[number];

interface MobileNavMenuProps {
  productLinks: readonly ProductLink[];
  primaryNavLinks: readonly PrimaryLink[];
  isActive: (path: string) => boolean;
  isProductsActive: boolean;
}

const linkClass = (active: boolean) =>
  cn(
    "block rounded-xl px-4 py-3 text-sm font-medium transition-default",
    active ? "bg-foreground text-background" : "text-muted-foreground hover:bg-secondary hover:text-foreground",
  );

const MobileNavMenu = ({
  productLinks,
  primaryNavLinks,
  isActive,
  isProductsActive,
}: MobileNavMenuProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <nav className="mt-8 flex flex-col gap-6" aria-label="Mobile navigation">
        <div>
          <p className="eyebrow mb-3">Products</p>
          <ul className="space-y-1">
            {productLinks.map((item) => (
              <li key={item.path}>
                <SheetClose asChild>
                  <Link
                    to={item.path}
                    className={linkClass(isActive(item.path) || (item.path === "/products" && isProductsActive))}
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Company</p>
          <ul className="space-y-1">
            {primaryNavLinks.map((link) => (
              <li key={link.path}>
                <SheetClose asChild>
                  <Link to={link.path} className={linkClass(isActive(link.path))}>
                    {link.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </div>

        <SheetClose asChild>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="w-full">
              Start a Project
              <ArrowRight className="ml-2" size={16} aria-hidden />
            </Button>
          </Link>
        </SheetClose>
      </nav>
    );
  }

  return (
    <motion.nav
      className="mt-8 flex flex-col gap-6"
      aria-label="Mobile navigation"
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.07)}
    >
      <motion.div variants={staggerItem} transition={REVEAL_TRANSITION}>
        <p className="eyebrow mb-3">Products</p>
        <ul className="space-y-1">
          {productLinks.map((item) => (
            <li key={item.path}>
              <SheetClose asChild>
                <Link
                  to={item.path}
                  className={linkClass(isActive(item.path) || (item.path === "/products" && isProductsActive))}
                >
                  {item.name}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={staggerItem} transition={REVEAL_TRANSITION}>
        <p className="eyebrow mb-3">Company</p>
        <ul className="space-y-1">
          {primaryNavLinks.map((link) => (
            <li key={link.path}>
              <SheetClose asChild>
                <Link to={link.path} className={linkClass(isActive(link.path))}>
                  {link.name}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={staggerItem} transition={REVEAL_TRANSITION}>
        <SheetClose asChild>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="w-full">
              Start a Project
              <ArrowRight className="ml-2" size={16} aria-hidden />
            </Button>
          </Link>
        </SheetClose>
      </motion.div>
    </motion.nav>
  );
};

export default MobileNavMenu;
