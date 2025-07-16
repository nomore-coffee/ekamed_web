// src/components/GetStarted.jsx
import { FaUserPlus, FaHospitalAlt, FaCogs } from "react-icons/fa";

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
  return (
    <section className="bg-[#2C69D1] py-16 px-6 text-white">
      <h2 className="mb-12 text-center text-3xl font-semibold">Get Started with EKAMED</h2>

      

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm border border-white/20"
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
