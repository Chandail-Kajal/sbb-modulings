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
  /* 
    Fluid Padding Math:
    px: 210px on 1920px screen -> clamp(1.25rem, 10.938vw, 13.125rem)
    py: 157.5px (75% of 210px) -> clamp(1.5rem, 8.2vw, 9.84375rem)
  */
  const pxClass = disablePaddingX
    ? ""
    : "px-[clamp(1.25rem,10.938vw,13.125rem)]";
  const pyClass = disablePaddingY ? "" : "py-[clamp(1.5rem,8.2vw,9.84375rem)]";

  return (
    <section
      className={`w-full bg-background ${pxClass} ${pyClass} ${className}`.trim()}
    >
      {asChild ? children : <div className="w-full">{children}</div>}
    </section>
  );
};
