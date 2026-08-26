"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {label:"About Us",link:"/about-us"},
    {label:"Manufacturing",link:"/manufacturing"},
    {label:"Products",link:"/products"},
    {label:"Industries",link:"/industries"},
    {label:"Quality",link:"/quality"},
    {label:"Clients",link:"/clients"},
    {label:"Contact Us",link:"/contact-us"},
  ];

  return (
    <header className="w-full bg-background section-container py-(--header-y)">
      <div className="w-full flex flex-row justify-between items-center gap-4">
        <div className="shrink-0 flex items-center">
          <Image
            className="h-15 w-full"
            src="/shree_logo.png"
            height={100}
            width={100}
            alt="logo"
            priority
          />
        </div>

        <nav className="hidden lg:flex flex-row justify-center items-center gap-6 text-fluid-16">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className="flex items-center font-normal font-neue gap-1 text-text-primary hover:text-primary transition-colors cursor-pointer"
              href={item.link}
            >
              <span>{item.label}</span>
              {/* <ChevronDown className="text-primary stroke-[2.5]" size={16} /> */}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center shrink-0 text-fluid-16">
          <button className="font-medium rounded-lg bg-primary text-white p-2.5 px-6 hover:bg-primary-light transition-colors">
            Request A Quote
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-text-primary hover:text-primary focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className="flex items-center justify-between py-2 text-fluid-16 font-normal font-neue text-text-primary hover:text-primary transition-colors w-full text-left"
              href={item.link}
            >
              <span>{item.label}</span>
              {/* <ChevronDown className="text-primary" size={16} /> */}
            </Link>
          ))}
          <div className="pt-2">
            <button className="w-full text-fluid-16 font-medium rounded-lg bg-primary text-white p-3 px-4 hover:bg-primary-light transition-colors">
              Request A Quote
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
