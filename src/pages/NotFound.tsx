import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="text-h1 font-bold">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            The page you are looking for does not exist or may have moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex h-btn-lg items-center rounded-xl bg-foreground px-6 text-sm font-semibold text-background transition-default hover:opacity-90"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
