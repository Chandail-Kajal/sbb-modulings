"use client";
import React from "react";
import Image from "next/image";
import {
  User,
  Building2,
  Mail,
  Phone,
  Cog,
  MessageSquare,
  Send,
} from "lucide-react";
import { Section } from "../Section";

const inputBase =
  "w-full h-14 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 pl-12 pr-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100";

const labelBase =
  "block text-xl font-semibold text-neutral-700 font-neue tracking-wider";

const iconBase =
  "pointer-events-none absolute left-4 text-neutral-500 transition-colors peer-focus:text-blue-500";

export default function ContactUsSection() {
  return (
    <Section disablePaddingY className="pt-24">
      <div className="section-container mx-auto space-y-12">
        {/* ================= Header ================= */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
          <div className="shrink-0">
            <h1 className="text-[64px] sm:text-[80px] xl:text-[92px] font-extrabold tracking-[-0.04em] leading-[0.95] text-[#262626]">
              Contact Us
            </h1>
          </div>

          <div className="flex flex-col items-start lg:items-end text-left lg:text-right space-y-3.5 max-w-[720px] pb-1">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[38px] font-normal tracking-[-0.02em] leading-snug text-[#374151]">
              Get in touch with{" "}
              <span className="font-bold text-[#0B57D0]">SBB Mouldings</span>
            </h2>

            <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.4] font-normal text-[#595959] tracking-tight">
              Whether you&apos;re evaluating us as a Tier-1 or Tier-2 supplier,
              planning a vendor audit, or exploring a new injection moulding or
              assembly program, our team is ready to help.
            </p>
          </div>
        </div>

        {/* ================= Content Grid ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-14">
          {/* Form Card */}
          <div className="lg:col-span-8 bg-[#FBFBFB] border border-neutral-200 rounded-[28px] p-6 sm:p-10 flex flex-col justify-between shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* Row 1: Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className={labelBase}>
                    Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className={`peer ${inputBase}`}
                    />
                    <User size={20} className={iconBase} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className={labelBase}>
                    Company Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="company"
                      type="text"
                      placeholder="Your company"
                      className={`peer ${inputBase}`}
                    />
                    <Building2 size={20} className={iconBase} />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="email" className={labelBase}>
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className={`peer ${inputBase}`}
                    />
                    <Mail size={20} className={iconBase} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className={labelBase}>
                    Phone Number
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={`peer ${inputBase}`}
                    />
                    <Phone size={20} className={iconBase} />
                  </div>
                </div>
              </div>

              {/* Row 3: Machine Type */}
              <div className="space-y-2">
                <label htmlFor="machine" className={labelBase}>
                  Machine Type
                </label>
                <div className="relative flex items-center">
                  <input
                    id="machine"
                    type="text"
                    placeholder="e.g. 150T injection moulding"
                    className={`peer ${inputBase}`}
                  />
                  <Cog size={20} className={iconBase} />
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="space-y-2">
                <label htmlFor="message" className={labelBase}>
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your requirement..."
                    className="peer w-full rounded-xl bg-[#E8E8E8] border border-neutral-300/60 py-4 pl-12 pr-4 text-neutral-800 outline-none resize-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                  <MessageSquare
                    size={20}
                    className="pointer-events-none absolute left-4 top-4 text-neutral-500 transition-colors peer-focus:text-blue-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#1560BD] hover:from-[#2563EB] hover:to-[#104899] text-white font-semibold text-base shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2.5"
              >
                <Send size={20} />
                <span className="tracking-wide">Send Message</span>
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="lg:col-span-4 min-h-140 lg:min-h-160 rounded-[28px] overflow-hidden relative shadow-sm">
            <Image
              src="/contact-us.jpg"
              alt="Assembly process"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}