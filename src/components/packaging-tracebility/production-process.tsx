import { Section } from "../Section";

const processTiles = [
  {
    id: "moulding",
    name: "Moulding",
    textPos: { x: 250, y: 220 },
    d: "M 245 74 Q 250 64 255 74 L 338 238 Q 343 248 334 255 L 255 316 Q 250 320 245 316 L 166 255 Q 157 248 162 238 Z",
  },
  {
    id: "labelling",
    name: "Labelling",
    textPos: { x: 155, y: 405 },
    d: "M 148 276 Q 155 268 166 276 L 230 326 Q 237 332 237 342 L 237 435 Q 237 445 227 445 L 60 445 Q 49 445 54 435 Z",
  },
  {
    id: "barcode",
    name: "Barcode",
    textPos: { x: 345, y: 405 },
    d: "M 267 342 Q 267 332 274 326 L 338 276 Q 349 268 356 276 L 450 435 Q 455 445 444 445 L 277 445 Q 267 445 267 435 Z",
  },
  {
    id: "assembly",
    name: "Assembly",
    textPos: { x: 418, y: 175 },
    d: "M 302 70 Q 296 70 297 78 L 388 234 Q 393 243 403 248 L 476 200 Q 484 195 484 185 L 484 78 Q 484 70 476 70 Z",
  },
  {
    id: "inspection",
    name: "Inspection",
    textPos: { x: 582, y: 175 },
    d: "M 524 70 Q 516 70 516 78 L 516 185 Q 516 195 524 200 L 597 248 Q 607 243 612 234 L 703 78 Q 704 70 698 70 Z",
  },
  {
    id: "traceability-center",
    name: "Traceability",
    textPos: { x: 500, y: 295 },
    d: "M 495 225 Q 500 220 505 225 L 590 282 Q 598 288 593 298 L 507 441 Q 503 448 497 448 Q 493 448 489 441 L 407 298 Q 402 288 410 282 Z",
  },
  {
    id: "packaging",
    name: "Packaging",
    textPos: { x: 750, y: 220 },
    d: "M 745 74 Q 750 64 755 74 L 838 238 Q 843 248 834 255 L 755 316 Q 750 320 745 316 L 666 255 Q 657 248 662 238 Z",
  },
  {
    id: "dispatch",
    name: "Dispatch",
    textPos: { x: 655, y: 405 },
    d: "M 648 276 Q 655 268 666 276 L 730 326 Q 737 332 737 342 L 737 435 Q 737 445 727 445 L 560 445 Q 549 445 554 435 Z",
  },
  {
    id: "traceability-right",
    name: "Traceability",
    textPos: { x: 845, y: 405 },
    d: "M 767 342 Q 767 332 774 326 L 838 276 Q 849 268 856 276 L 950 435 Q 955 445 944 445 L 777 445 Q 767 445 767 435 Z",
  },
];

export default function ProcessDiagram() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-full max-w-[1050px] aspect-[1000/480]">
        <svg
          viewBox="30 45 940 420"
          className="w-full h-full select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Exact Figma Drop Shadow: X: 10, Y: 15, Blur: 15, #000000 30% */}
            <filter
              id="figmaShadow"
              x="-20%"
              y="-20%"
              width="150%"
              height="160%"
            >
              <feDropShadow
                dx="10"
                dy="15"
                stdDeviation="7.5"
                floodColor="#000000"
                floodOpacity="0.30"
              />
            </filter>

            {/* Exact Figma Linear Gradient: #569FF2 -> #0057B8 */}
            <linearGradient
              id="figmaLinearGrad"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#569FF2" />
              <stop offset="100%" stopColor="#0057B8" />
            </linearGradient>

            {/* Fine Grain Texture matching Image 1 */}
            <filter id="tileGrain" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.75"
                numOctaves="3"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0.18 0"
                in="noise"
                result="darkNoise"
              />
              <feComposite
                operator="in"
                in="darkNoise"
                in2="SourceGraphic"
              />
            </filter>
          </defs>

          {processTiles.map((tile) => (
            <g
              key={tile.id}
              className="group cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Base Shape with Figma Shadow and Figma Linear Gradient */}
              <path
                d={tile.d}
                fill="url(#figmaLinearGrad)"
                filter="url(#figmaShadow)"
                className="transition-all duration-300 group-hover:brightness-105"
              />

              {/* Textured Grain Surface Overlay */}
              <path
                d={tile.d}
                fill="url(#figmaLinearGrad)"
                filter="url(#tileGrain)"
                pointerEvents="none"
              />

              {/* Text Label */}
              <text
                x={tile.textPos.x}
                y={tile.textPos.y}
                fill="#ffffff"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="15"
                fontWeight="600"
                letterSpacing="0.25px"
                className="pointer-events-none select-none font-sans"
              >
                {tile.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function ProductionProcess() {
  return (
    <Section
      className="relative overflow-hidden py-8 sm:py-10 lg:py-14 bg-white"
      disablePaddingY
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 sm:pb-8">
          <div className="max-w-xl text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#23272e] leading-[1.08] tracking-tight">
              Built Into the
              <br />
              Production Process
            </h2>
          </div>

          <div className="max-w-md lg:text-right pt-1">
            <p className="text-fluid-18 leading-[1.65] text-[#737373]">
              Packaging and traceability are considered as part of the overall
              manufacturing activities rather than as a separate final-stage
              activity.
            </p>
          </div>
        </div>

        <ProcessDiagram />

        <div className="text-center pt-2 sm:pt-4">
          <p className="text-fluid-18 text-[#737373]">
            This integrated approach helps preserve controlled flow from
            manufactured components to finished products.
          </p>
        </div>
      </div>
    </Section>
  );
}