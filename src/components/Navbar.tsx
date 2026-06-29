import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { primaryNavLinks, productLinks } from "@/content/navigation";
import { cn } from "@/lib/utils";

const edgezenLogo = "/ez.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isProductsActive =
    location.pathname === "/products" ||
    location.pathname === "/briktra-app" ||
    location.pathname.startsWith("/products");

  const navLinkClass = (active: boolean) =>
    cn(
      "rounded-lg px-3 py-2 text-sm font-medium transition-default",
      active
        ? "bg-foreground text-background shadow-token-sm"
        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-default",
        scrolled
          ? "border-b border-border/70 bg-background/90 shadow-token-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-nav items-center justify-between gap-4 lg:h-nav-lg">
          <Link to="/" className="group flex shrink-0 items-center gap-3">
            <img
              src={edgezenLogo}
              alt="EdgeZen Labs"
              className="h-8 w-auto transition-default group-hover:scale-105 lg:h-10"
            />
            <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
              EdgeZen Labs
            </span>
          </Link>

          {/* Desktop navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1 rounded-full border border-border/70 bg-card/80 p-1 shadow-token-sm backdrop-blur">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-lg bg-transparent text-sm font-medium",
                    isProductsActive && "bg-foreground text-background hover:bg-foreground hover:text-background",
                  )}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-3 md:w-[360px]">
                    {productLinks.map((item) => (
                      <li key={item.path}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.path}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium transition-default hover:bg-accent/10 hover:text-foreground"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {primaryNavLinks.map((link) => (
                <NavigationMenuItem key={link.path}>
                  <NavigationMenuLink asChild>
                    <Link to={link.path} className={navLinkClass(isActive(link.path))}>
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/contact" className="hidden sm:inline-flex">
              <Button className="h-10 rounded-xl bg-foreground px-5 text-background shadow-token-md transition-default hover:scale-[1.02]">
                Start a Project
                <ArrowRight className="ml-2" size={16} aria-hidden />
              </Button>
            </Link>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-xl border-border/70 bg-card/80 lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu size={20} aria-hidden />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-left">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-6" aria-label="Mobile navigation">
                  <div>
                    <p className="eyebrow mb-3">Products</p>
                    <ul className="space-y-1">
                      {productLinks.map((item) => (
                        <li key={item.path}>
                          <SheetClose asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block rounded-xl px-4 py-3 text-sm font-medium transition-default",
                                isActive(item.path) || (item.path === "/products" && isProductsActive)
                                  ? "bg-foreground text-background"
                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                              )}
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
                            <Link
                              to={link.path}
                              className={cn(
                                "block rounded-xl px-4 py-3 text-sm font-medium transition-default",
                                isActive(link.path)
                                  ? "bg-foreground text-background"
                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                              )}
                            >
                              {link.name}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <SheetClose asChild>
                    <Link to="/contact">
                      <Button className="h-12 w-full rounded-xl bg-foreground text-background">
                        Start a Project
                        <ArrowRight className="ml-2" size={16} aria-hidden />
                      </Button>
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
