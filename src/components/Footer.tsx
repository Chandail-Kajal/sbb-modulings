import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SolidLocationBuildingIcon, SolidPhoneIcon, SolidMailIcon } from "./SolidLocationBuildingIcon";

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
    <footer className="w-full flex flex-col">
      <div className="w-full bg-linear-to-bl from-primary-light to-primary text-white">
        {/* Adjusted vertical padding and wide letterbox spacing */}
        <div className="section-container py-14 sm:py-16 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 2xl:gap-12 items-start">
            
            {/* Left Column: Logo + Company Info */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col gap-5 lg:gap-6">
              <div className="flex items-center">
                <Image
                  src="/shree_logo_white.png"
                  alt="SBB Logo"
                  width={150}
                  height={150}
                  className="object-contain h-20 w-20 sm:h-24 sm:w-24"
                />
              </div>
              <h3 className="text-fluid-24 font-bold">
                SBB Mouldings Pvt. Ltd.
              </h3>
              <p className="text-fluid-16 font-ce text-primary-foreground leading-relaxed max-w-sm">
                Advanced injection moulding and assembly solutions for the automotive, HVAC, white goods, and industrial sectors. With high-capacity manufacturing infrastructure and experienced professionals, we deliver precision components and reliable production solutions.
              </p>
            </div>

            {/* Right Columns: Adjusted 12-column grid distribution for accurate spacing */}
            <div className="grid lg:col-span-8 xl:col-span-8 lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-6 xl:gap-8 pt-1">
              
              {/* Quick Links (lg:col-span-3) */}
              <div className="lg:col-span-3 flex flex-col gap-5 lg:gap-6">
                <h4 className="text-fluid-24 font-semibold text-primary-foreground">
                  Quick Links
                </h4>
                <ul className="flex flex-col gap-2.5 text-fluid-16 leading-snug text-primary-foreground tracking-normal font-ce">
                  <li>
                    <Link
                      href="/about-us"
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
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="hover:text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Manufacturing (lg:col-span-4) */}
              <div className="lg:col-span-4 flex flex-col gap-5 lg:gap-6">
                <h4 className="text-fluid-24 font-semibold text-primary-foreground">
                  Manufacturing
                </h4>
                <ul className="flex flex-col gap-2.5 text-fluid-16 leading-snug text-primary-foreground font-ce">
                  <li>
                    <Link
                      href="/injection-moulding"
                      className="hover:text-white transition-colors"
                    >
                      Injection Moulding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/assembly"
                      className="hover:text-white transition-colors"
                    >
                      Assembly Operations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packaging-tracebility"
                      className="hover:text-white transition-colors"
                    >
                      Packaging & Traceability
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="manufacturing-capabilities"
                      className="hover:text-white transition-colors"
                    >
                      Manufacturing Capabilities
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-6">
                <h4 className="text-fluid-24 font-semibold text-primary-foreground">Contact Us</h4>
                <div className="flex flex-col gap-3.5 text-fluid-16 leading-snug text-primary-foreground">
                  <span className="font-semibold text-primary-foreground">
                    Manufacturing Locations
                  </span>

                  <div className="flex flex-col gap-3 text-white text-sm">
                    {/* Location 1 */}
                    <div className="flex items-start gap-2.5">
                      <SolidLocationBuildingIcon className="shrink-0 mt-0.5" size={18} />
                      <span className="leading-snug">
                        84 km Stone, Sangwari Jarthal Road<br />
                        Bawal, Rewari, Haryana – 123501
                      </span>
                    </div>

                    {/* Location 2 */}
                    <div className="flex items-start gap-2.5">
                      <SolidLocationBuildingIcon className="shrink-0 mt-0.5" size={18} />
                      <span>Plot No. 8 & 9, Sector 3, HSIIDC Bawal</span>
                    </div>

                    {/* Location 3 */}
                    <div className="flex items-start gap-2.5">
                      <SolidLocationBuildingIcon className="shrink-0 mt-0.5" size={18} />
                      <span>Plot No. 58, Sector 14, HSIIDC Bawal</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2.5 pt-1">
                      <SolidPhoneIcon className="shrink-0" size={16} />
                      <span>+91 98765-43210</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2.5">
                      <SolidMailIcon className="shrink-0" size={16} />
                      <span>info@sbbmoulding.com</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-white section-container text-text-secondary py-3.5 border-t border-gray-100">
        <div className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-fluid-16">
          <p>© 2026 SBB Mouldings Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-2.5">
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