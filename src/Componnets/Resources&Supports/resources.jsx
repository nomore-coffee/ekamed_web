// src/components/ResourcesSupport.jsx
const resources = [
  {
    title: "Getting Started Resource Center",
    link: "#",
  },
  {
    title: "Join the Healthcare Community",
    link: "#",
  },
  {
    title: "EKAMED Support Hub",
    link: "#",
  },
];

export default function ResourcesSupport() {
  return (
    <section className="relative bg-[#eaf2fc] px-6 py-16 sm:px-12 lg:px-24 overflow-hidden">
      
      {/* ✅ Top-left grid */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[300px] w-[300px] bg-[length:30px_30px] bg-[linear-gradient(to_right,rgba(44,105,209,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,105,209,0.1)_1px,transparent_1px)]"
        style={{
          maskImage: "radial-gradient(circle at top left, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at top left, black 60%, transparent 100%)",
        }}
      ></div>

      {/* ✅ Bottom-right grid */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] bg-[length:30px_30px] bg-[linear-gradient(to_right,rgba(44,105,209,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,105,209,0.1)_1px,transparent_1px)]"
        style={{
          maskImage: "radial-gradient(circle at bottom right, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at bottom right, black 60%, transparent 100%)",
        }}
      ></div>

      {/* ✅ Content - now with relative positioning */}
      <div className="relative z-10">
        <h2 className="mb-10 text-2xl font-semibold text-[#2C69D1] md:text-3xl">
          Resources & Support
        </h2>

        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-start">
          {resources.map((res, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
            >
              {/* Increased height here */}
              <div className="h-80 w-full bg-red-500"></div>

              <div className="p-6 transition-all duration-300 relative">
                <a
                  href={res.link}
                  className="text-sm font-medium text-[#2C69D1] hover:underline block mb-4"
                >
                  {res.title}
                </a>

                <div className="absolute inset-x-0 bottom-0 p-6 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Discover comprehensive resources and get the support you need to make the most of EKAMED.
                  </p>
                  <button className="inline-flex items-center px-4 py-2 text-white text-sm font-medium bg-[#2C69D1] border border-[#2C69D1] rounded-full hover:bg-white hover:text-[#2C69D1] transition-colors duration-200 cursor-pointer">
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
