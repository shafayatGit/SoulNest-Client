import Aos from "aos";
import { useEffect } from "react";

const AboutUs = () => {
     useEffect(() => {
        Aos.init({
          duration: 900, // animation duration
          once: false, // only once per element
          offset: 200, // offset (in px) from the original trigger point
        });
      }, []);
  return (
    <section className="nuni max-w-7xl mx-auto px-4 py-16">
      <h2 data-aos="fade-down" className="text-4xl md:text-4xl font-bold text-center mb-6">
        🕌 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">About Us</span>
      </h2>
      <p data-aos="fade-right" className="text-center max-w-3xl mx-auto text-lg mb-12">
        We are a trusted and halal-focused Matrimony platform dedicated to helping Muslims find their ideal life partner. Our goal is to provide a safe, respectful, and user-friendly space where biodatas are carefully managed and matches are made with sincerity and Islamic values.
      </p>

      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <div className="text-4xl mb-4">🤝</div>
          <h4 className="text-xl font-semibold mb-2">Halal Matchmaking</h4>
          <p className="">We focus on meaningful and halal connections for marriage — not dating.</p>
        </div>

        <div data-aos="fade-up" className="shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <div className="text-4xl mb-4">🧕</div>
          <h4 className="text-xl font-semibold mb-2">Privacy & Respect</h4>
          <p className="">All biodata and profiles are managed securely, with full user control.</p>
        </div>

        <div data-aos="fade-up" className="shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <div className="text-4xl mb-4">🌍</div>
          <h4 className="text-xl font-semibold mb-2">Global Community</h4>
          <p className="">Connect with genuine Muslim singles from across the world who share your values.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
