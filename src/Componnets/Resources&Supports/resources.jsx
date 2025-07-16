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

        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {resources.map((res, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow hover:shadow-md transition"
            >
              {/* Top Placeholder for Image */}
              <div className="h-56 w-full bg-red-500"></div>

              {/* Bottom Text */}
              <div className="p-6">
                <a
                  href={res.link}
                  className="text-sm font-medium text-[#2C69D1] hover:underline block"
                >
                  {res.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}