import { Section } from "../Section";

interface ProcessShape {
  id: string;
  name: string;
  points: string;
  textPos: { x: number; y: number };
}

// Coordinate grid: 1000 x 520 with exact rounded gaps and angles matching the screenshot
const processTiles: ProcessShape[] = [
  // 1. Top Left Diamond/Kite: Moulding
  {
    id: "moulding",
    name: "Moulding",
    points: "305,44 380,240 305,286 235,236",
    textPos: { x: 305, y: 226 },
  },
  // 2. Top Center-Left Wedge: Assembly
  {
    id: "assembly",
    name: "Assembly",
    points: "338,44 488,44 488,206 414,248",
    textPos: { x: 432, y: 172 },
  },
  // 3. Top Center-Right Wedge: Inspection
  {
    id: "inspection",
    name: "Inspection",
    points: "512,44 662,44 586,248 512,206",
    textPos: { x: 568, y: 172 },
  },
  // 4. Top Right Diamond/Kite: Packaging
  {
    id: "packaging",
    name: "Packaging",
    points: "695,44 765,236 695,286 620,240",
    textPos: { x: 695, y: 226 },
  },
  // 5. Central Diamond Keystone: Traceability
  {
    id: "traceability-center",
    name: "Traceability",
    points: "500,224 574,272 500,392 426,272",
    textPos: { x: 500, y: 272 },
  },
  // 6. Bottom Far-Left Triangular Wedge: Labelling
  {
    id: "labelling",
    name: "Labelling",
    points: "220,260 298,306 298,392 148,392",
    textPos: { x: 236, y: 348 },
  },
  // 7. Bottom Mid-Left Quadrilateral: Barcode
  {
    id: "barcode",
    name: "Barcode",
    points: "320,306 398,260 466,392 320,392",
    textPos: { x: 376, y: 348 },
  },
  // 8. Bottom Mid-Right Quadrilateral: Dispatch
  {
    id: "dispatch",
    name: "Dispatch",
    points: "602,260 680,306 680,392 534,392",
    textPos: { x: 624, y: 348 },
  },
  // 9. Bottom Far-Right Triangular Wedge: Traceability
  {
    id: "traceability-bottom",
    name: "Traceability",
    points: "702,306 780,260 852,392 702,392",
    textPos: { x: 764, y: 348 },
  },
];

export function ProductionProcess() {
  return (
    <Section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-white" disablePaddingY>
      <div className="mx-auto w-full max-w-[1780px] px-6 sm:px-10 lg:px-16 xl:px-24">
        
        {/* Header Grid: Left Title & Right Paragraph */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 sm:pb-8">
          <div className="max-w-xl text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#23272e] leading-[1.08] tracking-tight">
              Built Into the<br />
              Production Process
            </h2>
          </div>

          <div className="max-w-md lg:text-right pt-1">
            <p className="text-xs sm:text-[13px] leading-[1.65] text-[#737373]">
              Packaging and traceability are considered as part of the overall
              manufacturing activities rather than as a separate final-stage activity.
            </p>
          </div>
        </div>

        {/* Mosaic Diagram */}
        <div className="w-full flex justify-center py-6 sm:py-10">
          <div className="w-full max-w-[1180px] aspect-[1000/440]">
            <svg
              viewBox="120 20 760 400"
              className="w-full h-full select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 3D Texture Gradient */}
                <linearGradient id="tileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1270e3" />
                  <stop offset="45%" stopColor="#0857c5" />
                  <stop offset="100%" stopColor="#003e9b" />
                </linearGradient>

                {/* Drop shadow matching reference blur and offset */}
                <filter id="tileShadow" x="-20%" y="-20%" width="140%" height="150%">
                  <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#012354" floodOpacity="0.28" />
                </filter>
              </defs>

              {/* Tiles Rendering */}
              {processTiles.map((tile) => (
                <g
                  key={tile.id}
                  className="group cursor-pointer transition-transform duration-300"
                >
                  {/* Facet polygon with rounded corners via SVG stroke-linejoin */}
                  <polygon
                    points={tile.points}
                    fill="url(#tileGradient)"
                    filter="url(#tileShadow)"
                    stroke="#004eb8"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    className="transition-all duration-300 group-hover:brightness-110"
                  />

                  {/* Surface specular lighting rim */}
                  <polygon
                    points={tile.points}
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                    className="pointer-events-none"
                  />

                  {/* Centered Typography */}
                  <text
                    x={tile.textPos.x}
                    y={tile.textPos.y}
                    fill="#ffffff"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="13.5"
                    fontWeight="500"
                    letterSpacing="0.15px"
                    className="pointer-events-none select-none font-sans"
                  >
                    {tile.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Bottom Centered Description */}
        <div className="text-center pt-2 sm:pt-4">
          <p className="text-xs sm:text-[13px] text-[#737373]">
            This integrated approach helps preserve controlled flow from manufactured components to finished products.
          </p>
        </div>

      </div>
    </Section>
  );
}