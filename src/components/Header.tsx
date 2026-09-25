"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const servicesSubItems = [
    { label: "Manufacturing Capabilities", link: "/manufacturing-capabilities" },
    { label: "Injection Moulding", link: "/injection-moulding" },
    { label: "Assembly", link: "/assembly" },
    { label: "Packaging and Tracing", link: "/packaging-tracebility" },
  ];

  const navItems = [
    { label: "Services", link: "/manufacturing-capabilities", isServices: true },
    { label: "Blog", link: "/blog" },
    { label: "About Us", link: "/about-us" },
    { label: "Quality & Certification", link: "/quality" },
    { label: "Industries We Serve", link: "/industries" },
    { label: "Our Work", link: "/products" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    /* Full-width container with edge-to-edge shadow & background */
    <header className="w-full bg-background shadow-md shadow-black/5 border-b border-gray-100 relative z-50">
      {/* Constrained content container */}
      <div className="section-container py-(--header-y)">
        <div className="w-full flex flex-row justify-between items-center gap-4">
          <div className="shrink-0 flex items-center">
            <Link href="/">
              <Image
                className="h-15 w-auto"
                src="/shree_logo.png"
                height={100}
                width={100}
                alt="logo"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex flex-row justify-center items-center gap-6 text-fluid-16">
            {navItems.map((item) => {
              if (item.isServices) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesDropdownOpen((prev) => !prev)}
                      className="flex items-center font-normal font-neue gap-1 text-text-primary hover:text-primary transition-colors cursor-pointer py-1"
                    >
                      <span>{item.label}</span>
                      {servicesDropdownOpen ? (
                        <ChevronUp className="text-primary stroke-[2.5]" size={14} />
                      ) : (
                        <ChevronDown className="text-primary stroke-[2.5]" size={14} />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 top-full pt-2 w-64 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 px-1 flex flex-col gap-0.5">
                          {servicesSubItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.link}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="px-4 py-2.5 text-sm font-normal font-neue text-text-primary hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  className="flex items-center font-normal font-neue gap-1 text-text-primary hover:text-primary transition-colors cursor-pointer"
                  href={item.link}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center shrink-0 text-fluid-16">
            <Link href="/contact-us">
              <button className="font-medium rounded-lg bg-primary text-white p-2.5 px-6 hover:bg-primary-light transition-colors">
                Request A Quote
              </button>
            </Link>
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
            {navItems.map((item) => {
              if (item.isServices) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className="flex items-center justify-between py-2 text-fluid-16 font-normal font-neue text-text-primary hover:text-primary transition-colors w-full text-left"
                    >
                      <span>{item.label}</span>
                      {mobileServicesOpen ? (
                        <ChevronUp className="text-primary" size={16} />
                      ) : (
                        <ChevronDown className="text-primary" size={16} />
                      )}
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 py-1 flex flex-col gap-2 border-l-2 border-primary/20 my-1">
                        {servicesSubItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.link}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="py-1.5 text-sm font-normal font-neue text-text-primary hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-fluid-16 font-normal font-neue text-text-primary hover:text-primary transition-colors w-full text-left"
                  href={item.link}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-2">
              <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full text-fluid-16 font-medium rounded-lg bg-primary text-white p-3 px-4 hover:bg-primary-light transition-colors">
                  Request A Quote
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};