import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/products": "Products",
  "/websites": "Websites",
  "/briktra-app": "Briktra",
  "/technologies": "Technologies",
  "/contact": "Contact",
  "/legal/privacy": "Privacy Policy",
  "/legal/terms": "Terms of Service",
  "/legal": "Legal",
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((_, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    return {
      path,
      label: routeLabels[path] ?? segments[index].replace(/-/g, " "),
    };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border/50 bg-background/80 pt-nav backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1 py-3 text-sm text-muted-foreground">
          <li>
            <Link
              to="/"
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 transition-default hover:text-foreground"
            >
              <Home size={14} aria-hidden />
              <span>Home</span>
            </Link>
          </li>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1">
                <ChevronRight size={14} className="opacity-50" aria-hidden />
                {isLast ? (
                  <span className="px-2 py-1 font-medium capitalize text-foreground" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="rounded-md px-2 py-1 capitalize transition-default hover:text-foreground"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
