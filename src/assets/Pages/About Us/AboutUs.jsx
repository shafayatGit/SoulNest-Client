const AboutUs = () => {
  return (
    <section className="mt-24 nuni max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-6">
        🕌{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
          About Us
        </span>
      </h2>
      <p className="text-center max-w-3xl mx-auto text-lg mb-12">
        We are a trusted and halal-focused Matrimony platform dedicated to
        helping Muslims find their ideal life partner. Our goal is to provide a
        safe, respectful, and user-friendly space where biodatas are carefully
        managed and matches are made with sincerity and Islamic values.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <div className="text-4xl mb-4">🤝</div>
          <h4 className="text-xl font-semibold mb-2">Halal Matchmaking</h4>
          <p className="">
            We focus on meaningful and halal connections for marriage — not
            dating.
          </p>
        </div>

        <div className="shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <div className="text-4xl mb-4">🧕</div>
          <h4 className="text-xl font-semibold mb-2">Privacy & Respect</h4>
          <p className="">
            All biodata and profiles are managed securely, with full user
            control.
          </p>
        </div>

        <div className="shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <div className="text-4xl mb-4">🌍</div>
          <h4 className="text-xl font-semibold mb-2">Global Community</h4>
          <p className="">
            Connect with genuine Muslim singles from across the world who share
            your values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
