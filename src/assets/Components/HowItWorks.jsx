// src/Pages/Home/HowItWorks.jsx
import { FaUserPlus, FaSearch, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-4xl text-amber-600" />,
      title: "Create Your Profile",
      desc: "Sign up with your basic details and build your profile reflecting your Islamic values.",
    },
    {
      icon: <FaSearch className="text-4xl text-amber-600" />,
      title: "Find Your Match",
      desc: "Browse and filter through genuine biodatas that match your preferences and deen.",
    },
    {
      icon: <FaHandshake className="text-4xl text-amber-600" />,
      title: "Connect for Nikah",
      desc: "Start conversations through family-friendly features and connect for a halal marriage.",
    },
  ];

  return (
    <section className="nuni mt-24 py-16 px-4 lg:px-20" id="how-it-works">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold  mb-2 ">🧭 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cfb992] to-[#8a6c42]">How It Works</span></h2>
        <p className="text-xl max-w-xl mx-auto">
          Simple steps to find your perfect life partner with sincerity and trust.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border-[#908549] border-2 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold  mb-2">{step.title}</h3>
            <p className="">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
