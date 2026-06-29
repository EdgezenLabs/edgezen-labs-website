import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageMain from "@/components/PageMain";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="site-shell flex min-h-screen flex-col bg-background">
      <PageMain className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <Link
            to="/"
            className="inline-flex items-center rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-default hover:opacity-90"
          >
            Return to Home
          </Link>
        </div>
      </PageMain>
    </div>
  );
};

export default NotFound;
