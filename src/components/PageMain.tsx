import type { ReactNode } from "react";

interface PageMainProps {
  children: ReactNode;
  className?: string;
}

/** Accessible main landmark — pairs with SkipLink (#main-content) */
const PageMain = ({ children, className = "" }: PageMainProps) => (
  <main
    id="main-content"
    tabIndex={-1}
    className={`outline-none ${className}`.trim()}
  >
    {children}
  </main>
);

export default PageMain;
