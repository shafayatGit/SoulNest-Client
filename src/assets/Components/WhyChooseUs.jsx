const WhyChooseUs = () => {
  const points = [
    { title: "Verified Profiles", desc: "We ensure all biodatas are authentic and verified." },
    { title: "Advanced Search", desc: "Filter by age, profession, location, and more." },
    { title: "Privacy First", desc: "Your personal details are always safe with us." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42] mb-10">
        Why Choose Us?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {points.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
