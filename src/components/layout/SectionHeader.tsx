import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className = "",
}: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`.trim()}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-h2 font-bold tracking-tight">{title}</h2>
      {description && (
        <p className={`mt-4 text-body-lg text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeader;
