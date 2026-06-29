import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMain from "@/components/PageMain";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  showBreadcrumbs?: boolean;
}

const PageLayout = ({ children, className = "", showBreadcrumbs = false }: PageLayoutProps) => (
  <div className={`site-shell min-h-screen overflow-x-hidden bg-background ${className}`.trim()}>
    <Navbar />
    {showBreadcrumbs && <Breadcrumbs />}
    <PageMain>{children}</PageMain>
    <Footer />
  </div>
);

export default PageLayout;
