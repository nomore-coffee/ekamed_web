// src/components/Hero.jsx
import React from "react";
import heroBg from "../../assets/hero.png"; // optional background

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-b from-[#eaf2fc] to-white text-center text-[#2C69D1] overflow-hidden">
      
      {/* ✅ Back Grid Layer (behind text) */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[120vh] w-[150%] -translate-x-1/2 transform bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(44,105,209,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,105,209,0.2)_1px,transparent_1px)]"
        style={{
          transform: "perspective(1000px) rotateX(65deg) translateY(-50px)",
          transformOrigin: "top center",
          zIndex: 5, // behind text
        }}
      ></div>

      {/* ✅ Text content (middle layer) */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl drop-shadow-lg">
          <span className="text-[#2C69D1] font-extrabold">EKAMED</span> Free Tier
        </h1>
        <p className="mt-4 text-lg text-slate-600 sm:text-xl drop-shadow-md">
          The Cloud Platform for Hospital Automation
        </p>
        <a
          href="#"
          className="mt-6 inline-block rounded-full bg-[#2C69D1] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 relative z-20"
        >
          Try EKAMED for Free
        </a>
      </div>

      {/* ✅ Front Grid Layer (in front of text) */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[120vh] w-[150%] -translate-x-1/2 transform bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(44,105,209,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,105,209,0.08)_1px,transparent_1px)]"
        style={{
          transform: "perspective(1000px) rotateX(65deg) translateY(-50px)",
          transformOrigin: "top center",
          zIndex: 15, // in front of text but behind button
        }}
      ></div>

      {/* ✅ Optional: Add subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 pointer-events-none"></div>
    </section>
  );
}