"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    "About Us",
    "Manufacturing",
    "Products",
    "Industries",
    "Quality",
    "Clients",
    "Contact Us",
  ];

  return (
    <header className="w-full bg-background px-4 py-4 sm:px-8 lg:px-16 sm:py-6">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4">
        <div className="shrink-0 flex items-center">
          <Image
            src="/shree_logo.png"
            height={40}
            width={40}
            alt="logo"
            priority
          />
        </div>

        <nav className="hidden lg:flex flex-row justify-center items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              className="flex items-center text-sm font-normal font-neue gap-1 text-text-primary hover:text-primary transition-colors cursor-pointer"
            >
              <span>{item}</span>
              <ChevronDown className="text-primary stroke-[2.5]" size={16} />
            </button>
          ))}
        </nav>

        <div className="hidden sm:flex items-center shrink-0">
          <button className="text-sm font-medium rounded-lg bg-primary text-white p-3 px-4 hover:bg-primary-light transition-colors">
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
            <button
              key={item}
              className="flex items-center justify-between py-2 text-sm font-normal font-neue text-text-primary hover:text-primary transition-colors w-full text-left"
            >
              <span>{item}</span>
              <ChevronDown className="text-primary" size={16} />
            </button>
          ))}
          <div className="pt-2">
            <button className="w-full text-sm font-medium rounded-lg bg-primary text-white p-3 px-4 hover:bg-primary-light transition-colors">
              Request A Quote
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
