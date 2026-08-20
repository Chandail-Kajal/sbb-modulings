import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  className?: string;
  disablePaddingX?: boolean;
  disablePaddingY?: boolean;
  asChild?: boolean;
}

export const Section = ({
  children,
  className = "",
  disablePaddingX = false,
  disablePaddingY = false,
  asChild = false,
}: SectionProps) => {
  const containerClass = disablePaddingX
    ? "w-full"
    : "mx-auto w-full max-w-[1500px]";

  const paddingYClass = disablePaddingY ? "" : "py-[var(--section-y)]";

  return (
    <section
      className={`w-full bg-background ${paddingYClass} ${className}`.trim()}
    >
      {asChild ? children : <div className={containerClass}>{children}</div>}
    </section>
  );
};
