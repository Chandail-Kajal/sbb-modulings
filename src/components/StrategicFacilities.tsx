"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Section } from "@/components/Section";

// Set to true, click Rewari on the map, and paste the logged `pos` into a facility.
const PIN_PICKER = false;

// Geographic edges of map.png (degrees). Assumes the image is a full map of India.
// If pins sit slightly off, nudge these four numbers (or use PIN_PICKER below).
const MAP_BOUNDS = { west: 68.1, east: 97.4, north: 37.1, south: 6.7 };

interface Facility {
  id: number;
  name: string; // heading
  address: string; // subheading
  lat: number;
  lng: number;
  // Optional: exact spot on the image in % (0-100). Overrides lat/lng when set.
  pos?: { x: number; y: number };
}

// Real locations — all three are in Bawal, Rewari district, Haryana.
const facilities: Facility[] = [
  {
    id: 1,
    name: "Bawal Sector-3",
    address: "Plot No. 8 & 9, Sector 3, HSIIDC, Bawal, Rewari, Haryana 123501",
    lat: 28.0995,
    lng: 76.5855,
  },
  {
    id: 2,
    name: "Sangwari",
    address: "84 KM Stone, Sangwari–Jarthal Road, Bawal, Rewari, Haryana 123501",
    lat: 28.0512,
    lng: 76.5433,
  },
  {
    id: 3,
    name: "Bawal Sector-14",
    address: "Plot No. 58, Sector 14, HSIIDC, Bawal, Rewari, Haryana 123501",
    lat: 28.0847,
    lng: 76.6021,
  },
];

// lat/lng -> % position inside the map box
const clamp = (n: number) => Math.min(100, Math.max(0, n));

const project = (f: Facility) =>
  f.pos ?? {
    x: clamp(((f.lng - MAP_BOUNDS.west) / (MAP_BOUNDS.east - MAP_BOUNDS.west)) * 100),
    y: clamp(((MAP_BOUNDS.north - f.lat) / (MAP_BOUNDS.north - MAP_BOUNDS.south)) * 100),
  };

export const StrategicFacilities = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  // Where the image is actually drawn inside the box (object-contain, object-right)
  const [rect, setRect] = useState<{ left: number; top: number; w: number; h: number } | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box || !natural) return;
    const measure = () => {
      const bw = box.clientWidth;
      const bh = box.clientHeight;
      const scale = Math.min(bw / natural.w, bh / natural.h);
      const w = natural.w * scale;
      const h = natural.h * scale;
      setRect({ left: bw - w, top: (bh - h) / 2, w, h });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(box);
    return () => ro.disconnect();
  }, [natural]);

  return (
    <Section className="relative overflow-hidden py-8 sm:py-12 lg:py-14" disablePaddingY>
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image
          src="/map-bg.jpg"
          alt="map background"
          fill
          className="object-cover"
          priority
        />
        {/* 70% White Overlay */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 items-center gap-8 bg-transparent lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-fluid-32 font-semibold leading-none text-text-primary">
              Strategically Located <br className="hidden sm:block" />
              Manufacturing Facilities
            </h2>
            <p className="text-fluid-16 text-text-secondary">
              Three facilities across Bawal and Sangwari, Rewari (Haryana).
            </p>
          </div>

          <div
            className="flex max-w-lg flex-col gap-6 pt-2"
            onMouseLeave={() => setActiveId(null)}
          >
            {facilities.map((item) => (
              <div
                key={item.id}
                tabIndex={0}
                onMouseEnter={() => setActiveId(item.id)}
                onFocus={() => setActiveId(item.id)}
                onBlur={() => setActiveId(null)}
                className="group flex cursor-pointer flex-row items-start gap-4 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="shrink-0 pt-0.5">
                  <MapPin
                    className="text-text-primary transition-colors duration-300 group-hover:fill-primary/10 group-hover:text-primary"
                    size={24}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-fluid-24 font-bold leading-tight text-text-primary transition-colors duration-300 group-hover:text-primary">
                    {item.name}
                  </h3>
                  <p className="text-fluid-16 leading-snug text-text-secondary">
                    {item.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full w-full items-center justify-center lg:col-span-6">
          <div
            ref={boxRef}
            className={`relative h-64 w-full max-w-2xl sm:h-90 lg:h-130 xl:h-145 ${
              PIN_PICKER ? "cursor-crosshair" : ""
            }`}
            onClick={
              PIN_PICKER && rect
                ? (e) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - r.left - rect.left) / rect.w) * 100;
                    const y = ((e.clientY - r.top - rect.top) / rect.h) * 100;
                    console.log(`pos: { x: ${x.toFixed(1)}, y: ${y.toFixed(1)} }`);
                  }
                : undefined
            }
          >
            {/* Original map — unchanged */}
            <Image
              src="/map.png"
              alt="Manufacturing Facilities Map"
              fill
              className="object-contain object-right"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              onLoad={(e) =>
                setNatural({
                  w: e.currentTarget.naturalWidth,
                  h: e.currentTarget.naturalHeight,
                })
              }
            />

            {/* Pin for the hovered location only */}
            {rect && facilities.map((item) => {
              const isActive = activeId === item.id;
              const { x, y } = project(item);
              return (
                <div
                  key={item.id}
                  aria-hidden={!isActive}
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-full"
                  style={{
                    left: rect.left + (x / 100) * rect.w,
                    top: rect.top + (y / 100) * rect.h,
                  }}
                >
                  <span
                    className={`absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-text-primary px-3 py-1.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                    }`}
                  >
                    {item.name}
                  </span>

                  <span
                    className={`relative flex items-end justify-center transition-all duration-300 ${
                      isActive ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute bottom-0 h-5 w-5 rounded-full bg-red-500/40 motion-safe:animate-ping" />
                    )}
                    <MapPin
                      size={36}
                      className="relative fill-red-600 stroke-white drop-shadow-md"
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};