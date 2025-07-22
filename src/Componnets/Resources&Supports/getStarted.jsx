// src/components/GetStarted.jsx
import { FaUserPlus, FaHospitalAlt, FaCogs } from "react-icons/fa";
import { useEffect, useRef } from "react";

const steps = [
  {
    icon: <FaUserPlus className="text-white text-2xl" />,
    title: "Create Your Free Account",
    desc: "Sign up for EKAMED and get immediate access to our Free Tier Offers",
    btn: "Create Account",
  },
  {
    icon: <FaHospitalAlt className="text-white text-2xl" />,
    title: "15-Minute Hospital Setup",
    desc: "Follow our guided tutorials to configure your first department and start managing patients",
    btn: "One Click Setup",
  },
  {
    icon: <FaCogs className="text-white text-2xl" />,
    title: "Start Managing",
    desc: "Launch your hospital management system with staff training and ongoing support",
    btn: "Create Account",
  },
];

export default function GetStarted() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = section.getBoundingClientRect();
      
      const x = clientX - left;
      const y = clientY - top;
      
      section.style.setProperty('--spot-x', `${x}px`);
      section.style.setProperty('--spot-y', `${y}px`);
    };

    section.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#2C69D1] py-16 px-6 text-white overflow-hidden"
      style={{
        '--spot-x': '50%',
        '--spot-y': '50%',
      }}
    >
      {/* White spot background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--spot-x) var(--spot-y), rgba(255,255,255,0.15) 0%, transparent 150px)',
          transition: 'background 0.3s ease-out',
        }}
      ></div>

      <h2 className="relative mb-12 text-center text-3xl font-semibold">Get Started with EKAMED</h2>

      <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm border border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:scale-105"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              {step.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mb-6 text-sm text-blue-100">{step.desc}</p>
            <button className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#2C69D1]">
              {step.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
