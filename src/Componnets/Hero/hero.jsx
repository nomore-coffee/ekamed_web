// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-gradient-to-b from-[#eaf2fc] to-white text-center overflow-hidden">
      {/* 🔹 Grid Background Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* ✅ Top Grid - Brand Color */}
        <div
          className="absolute top-0 left-0 w-full h-[40vh]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(44, 105, 209, 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(44, 105, 209, 0.6) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            transform: "perspective(800px) rotateX(55deg)",
            transformOrigin: "top center",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
          }}
        ></div>

        {/* ✅ Bottom Grid - Same Brand Color */}
        <div
          className="absolute bottom-0 left-0 w-full h-[40vh]"
          style={{
             backgroundImage:
              "linear-gradient(to right, rgba(44, 105, 209, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(44, 105, 209, 0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            transform: "perspective(800px) rotateX(55deg)",
            transformOrigin: "bottom center",
            maskImage: "linear-gradient(to top, black 0%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 70%)",
          }}
        ></div>
      </div>

      {/* 🔹 Hero Text Content */}
      <div className="relative z-20 max-w-3xl px-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-[#2C69D1] drop-shadow-lg">
          <span className="font-extrabold">EKAMED</span> Free Tier
        </h1>
        <p className="mt-4 text-lg text-slate-600 sm:text-xl drop-shadow-md">
          The Cloud Platform for Hospital Automation
        </p>
        <a
          href="#"
          className="mt-6 inline-block rounded-full bg-[#2C69D1] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Try EKAMED for Free
        </a>
      </div>
    </section>
  );
}
