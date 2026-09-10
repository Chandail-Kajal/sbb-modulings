"use client"
import React from "react";
import Image from "next/image";

export default function ContactUsSection() {
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* ================= Header ================= */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    {/* Title */}
                    <div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-800">
                            Contact Us
                        </h2>
                    </div>

                    {/* Subheader / Description */}
                    <div className="md:max-w-md text-left md:text-right space-y-1.5">
                        <p className="text-lg sm:text-xl text-neutral-700 font-medium">
                            Get in touch with{" "}
                            <span className="font-bold text-[#1d63c6]">SBB Mouldings</span>
                        </p>
                        <p className="text-[13px] sm:text-sm text-neutral-500 leading-snug">
                            Whether you&apos;re evaluating us as a Tier-1 or Tier-2 supplier,
                            planning a vendor audit, or exploring a new injection moulding or
                            assembly program, our team is ready to help.
                        </p>
                    </div>
                </div>

                {/* ================= Content Grid ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Form Card */}
                    <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-[28px] p-6 sm:p-10 flex flex-col justify-between shadow-sm">
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            {/* Row 1: Name & Company Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-neutral-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full h-12 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 px-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-neutral-700">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full h-12 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 px-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Email Address & Phone Number */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-neutral-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full h-12 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 px-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-neutral-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full h-12 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 px-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
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
                                    className="w-full sm:w-2/3 h-12 rounded-xl bg-[#E8E8E8] border border-neutral-300/60 px-4 text-neutral-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            {/* Row 4: Large Field / Textarea */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-neutral-700">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
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

                    {/* Right Side: Image Card */}
                    <div className="lg:col-span-5 min-h-[420px] lg:min-h-full rounded-[28px] overflow-hidden relative shadow-sm">
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
        </section>
    );
}