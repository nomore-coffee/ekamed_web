import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const stories = [
  {
    title: "OPD",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    img: "", // placeholder or real image
  },
  {
    title: "Ward",
    desc: "Another success story...",
    img: "",
  },
  {
    title: "Recovery",
    desc: "Something inspiring...",
    img: "",
  },
  {
    title: "Recovery",
    desc: "Something inspiring...",
    img: "",
  },
];

export default function SuccessStories() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? stories.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % stories.length);

  return (
    <section className="relative bg-white px-6 py-16 sm:px-12 lg:px-24 overflow-hidden">
      
      {/* ✅ Top-left grid */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[300px] w-[300px] bg-[length:30px_30px] bg-[linear-gradient(to_right,rgba(44,105,209,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,105,209,0.08)_1px,transparent_1px)]"
        style={{
          maskImage: "radial-gradient(circle at top left, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at top left, black 60%, transparent 100%)",
        }}
      ></div>

      {/* ✅ Bottom-right grid */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] bg-[length:30px_30px] bg-[linear-gradient(to_right,rgba(44,105,209,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,105,209,0.08)_1px,transparent_1px)]"
        style={{
          maskImage: "radial-gradient(circle at bottom right, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at bottom right, black 60%, transparent 100%)",
        }}
      ></div>

      {/* ✅ Content - now with relative positioning */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-[#2C69D1]">Success Stories</h2>
          <a href="#" className="text-[#2C69D1] text-sm underline flex items-center gap-1 hover:text-blue-700 transition-colors">
            View Customer Stories <span className="text-xs">➤</span>
          </a>
        </div>

        <div className="relative">
          {/* Cards */}
          <div className="flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-4xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                {stories.map((story, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="rounded-2xl bg-white shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-[#2C69D1] text-4xl font-bold drop-shadow-sm">X</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-[#2C69D1] font-bold text-lg mb-2">{story.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{story.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 rounded-full bg-white border border-gray-200 p-2 sm:p-3 shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200 z-20 touch-manipulation"
            aria-label="Previous story"
          >
            <FaChevronLeft className="text-[#2C69D1] text-xs sm:text-sm" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 rounded-full bg-white border border-gray-200 p-2 sm:p-3 shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200 z-20 touch-manipulation"
            aria-label="Next story"
          >
            <FaChevronRight className="text-[#2C69D1] text-xs sm:text-sm" />
          </button>

          {/* ✅ Dot indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {stories.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setIndex(dotIndex)}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  index === dotIndex 
                    ? 'bg-[#2C69D1] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to story ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}