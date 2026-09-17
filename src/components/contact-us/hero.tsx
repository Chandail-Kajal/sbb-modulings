"use client";
import React from "react";
import Image from "next/image";
import { Section } from "../Section";

export default function ContactUsSection() {
  return (
    <Section disablePaddingY className="pt-24">
      <div className="section-container mx-auto space-y-12">
        {/* ================= Header ================= */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
          {/* Left Main Title */}
          <div className="shrink-0">
            <h1 className="text-[64px] sm:text-[80px] xl:text-[92px] font-extrabold tracking-[-0.04em] leading-[0.95] text-[#262626]">
              Contact Us
            </h1>
          </div>

          {/* Right Information Block */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right space-y-3.5 max-w-[720px] pb-1">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[38px] font-normal tracking-[-0.02em] leading-snug text-[#374151]">
              Get in touch with{" "}
              <span className="font-bold text-[#0B57D0]">SBB Mouldings</span>
            </h2>

            <p className="text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.4] font-normal text-[#595959] tracking-tight">
              Whether you&apos;re evaluating us as a Tier-1 or Tier-2 supplier, planning a vendor audit, or exploring a new injection moulding or assembly program, our team is ready to help.
            </p>
          </div>
        </div>
        {/* ================= Content Grid ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-14">
          {/* Form Card */}
          <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-[28px] p-6 sm:p-10 flex flex-col justify-between shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* Row 1: Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-neutral-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-14 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 px-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-neutral-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-14 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 px-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-neutral-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full h-14 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 px-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-neutral-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full h-14 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 px-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Row 3: Inline Label & Field */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label className="text-sm font-semibold text-neutral-700 sm:w-1/3">
                  Mchine Type
                </label>
                <input
                  type="text"
                  className="w-full sm:w-2/3 h-14 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 px-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Row 4: Large Field / Textarea */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral-700">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded-xl bg-[#E8E8E8] border border-neutral-300/60 p-4 text-neutral-800 outline-none resize-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#1560BD] hover:from-[#2563EB] hover:to-[#104899] text-white font-bold tracking-[0.25em] text-sm shadow-md transition-all active:scale-[0.99]"
              >
                S e n d
              </button>
            </form>
          </div>

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
