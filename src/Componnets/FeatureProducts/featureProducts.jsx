// src/components/FeaturedProducts.jsx
import { FaStethoscope, FaBed, FaPills, FaUserMd, FaClipboardList, FaUser } from "react-icons/fa";

const products = [
  { icon: <FaStethoscope />, title: "OPD" },
  { icon: <FaPills />, title: "Ward" },
  { icon: <FaBed />, title: "OT" },
  { icon: <FaUserMd />, title: "Recovery" },
  { icon: <FaClipboardList />, title: "Appointment" },
  { icon: <FaUser />, title: "Patient App" },
];

export default function FeaturedProducts() {
  return (
    <section className="relative bg-white px-6 py-16 sm:px-12 lg:px-24 overflow-hidden">
      {/* Top-left grid */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[300px] w-[300px] bg-[length:30px_30px] bg-[linear-gradient(to_right,rgba(44,105,209,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,105,209,0.08)_1px,transparent_1px)]"
        style={{
          maskImage: "radial-gradient(circle at top left, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at top left, black 60%, transparent 100%)",
        }}
      ></div>

      {/* Bottom-right grid */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] bg-[length:30px_30px] bg-[linear-gradient(to_right,rgba(44,105,209,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,105,209,0.08)_1px,transparent_1px)]"
        style={{
          maskImage: "radial-gradient(circle at bottom right, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at bottom right, black 60%, transparent 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#2C69D1] md:text-3xl">Featured Products</h2>
          <a href="#" className="text-sm font-medium text-[#2C69D1] hover:underline transition-colors duration-300">
            See all Products <span className="inline-block transition-transform duration-300 hover:translate-x-1">➤</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl border border-transparent hover:border-[#2C69D1]/10 cursor-pointer"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf2fc] text-[#2C69D1] text-xl transition-transform duration-300 group-hover:scale-110">
                {product.icon}
              </div>
              <h3 className="text-md font-semibold text-[#2C69D1] transition-colors duration-300 group-hover:text-[#1a4a9e]">
                {product.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-medium text-[#2C69D1] hover:text-white px-3 py-1.5 rounded-full border border-[#2C69D1] hover:bg-[#2C69D1] transition-all duration-300"
                >
                  Learn more
                  <svg 
                    className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
