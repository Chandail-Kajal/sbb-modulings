import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  className?: string;
  enablePadding?: boolean;
  enableLeftPadding?: boolean;
  enableRightPadding?: boolean;
  enableTopPadding?: boolean;
  enableBottomPadding?: boolean;
  asChild?: boolean;
}

export const Section = ({
  children,
  className = "",
  enablePadding = true,
  enableLeftPadding = true,
  enableRightPadding = true,
  enableTopPadding = true,
  enableBottomPadding = true,
  asChild = false,
}: SectionProps) => {
  const pxClass = !enablePadding
    ? ""
    : enableLeftPadding && enableRightPadding
      ? "px-4 sm:px-8 lg:px-16"
      : enableLeftPadding
        ? "pl-4 sm:pl-8 lg:pl-16"
        : enableRightPadding
          ? "pr-4 sm:pr-8 lg:pr-16"
          : "";

  const pyClass = !enablePadding
    ? ""
    : enableTopPadding && enableBottomPadding
      ? "py-16 sm:py-24"
      : enableTopPadding
        ? "pt-16 sm:pt-24"
        : enableBottomPadding
          ? "pb-16 sm:pb-24"
          : "";

  return (
    <section
      className={`w-full bg-background ${pxClass} ${pyClass} ${className}`.trim()}
    >
      {asChild ? children : <div className="max-w-7xl mx-auto">{children}</div>}
    </section>
  );
};
