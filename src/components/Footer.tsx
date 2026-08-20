import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-(--section-y)">
      <div className="w-full bg-linear-to-bl from-primary-light to-primary text-white">
        <div className="section-container lg:py-16 sm:py-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/shree_logo_white.png"
                  alt="SBB Logo"
                  width={150}
                  height={150}
                  className="object-contain h-24 w-24"
                />
              </div>
              <h3 className="text-fluid-24 font-bold">
                SBB Mouldings Pvt. Ltd.
              </h3>
              <p className="text-fluid-16 text-white/80 leading-snug max-w-sm">
                Advanced injection moulding and assembly solutions for the
                automotive, HVAC, white goods, and industrial sectors. With
                high-capacity manufacturing infrastructure and experienced
                professionals, we deliver precision components and reliable
                production solutions.
              </p>
            </div>

            <div className="grid lg:col-span-8 lg:grid-cols-9 md:grid-cols-2 sm:grid-cols-1 gap-10">
              <div className="lg:col-span-2 flex flex-col gap-2">
                <h4 className="text-fluid-24 font-semibold mb-1">
                  Quick Links
                </h4>
                <ul className="flex flex-col gap-2.5 text-fluid-16 leading-snug text-white/80">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Quality
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-2">
                <h4 className="text-fluid-24 font-semibold mb-1">
                  Manufacturing
                </h4>
                <ul className="flex flex-col gap-2.5 text-fluid-16 leading-snug text-white/80">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Injection Moulding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Assembly Operations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Component Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Packaging & Traceability
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Manufacturing Infrastructure
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-2">
                <h4 className="text-fluid-24 font-semibold mb-1">Industries</h4>
                <ul className="flex flex-col gap-2.5 text-fluid-16 leading-snug text-white/80">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Automotive
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      HVAC & Air Conditioning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      White Goods
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Industrial Applications
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3 flex flex-col gap-2">
                <h4 className="text-fluid-24 font-semibold mb-1">Contact Us</h4>
                <div className="flex flex-col gap-3 text-fluid-16 leading-snug text-white/80">
                  <span className="font-semibold text-white">
                    Manufacturing Locations
                  </span>

                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="shrink-0 mt-0.5 text-white" />
                    <span>
                      84 km Stone, Sangwari Jarthal Road Bawal, Rewari, Haryana
                      – 123501
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="shrink-0 mt-0.5 text-white" />
                    <span>Plot No. 8 & 9, Sector 3, HSIIDC Bawal</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="shrink-0 mt-0.5 text-white" />
                    <span>Plot No. 58, Sector 14, HSIIDC Bawal</span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Phone size={14} className="shrink-0 text-white" />
                    <span>+91 98765-43210</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail size={14} className="shrink-0 text-white" />
                    <span>info@sbbmoulding.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white section-container text-text-secondary py-4  border-t border-gray-100">
        <div className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-fluid-16">
          <p>© 2026 SBB Mouldings Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <FaFacebook size={14} />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <FaLinkedin size={14} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <FaInstagram size={14} />
            </Link>
            <Link
              href="#"
              aria-label="X"
              className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <XIcon size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
