const MembershipPlans = () => {
  const plans = [
    { name: "Free", price: "৳0", features: ["Create biodata", "Search profiles", "Basic matchmaking"] },
    { name: "Premium", price: "৳999/month", features: ["View contact info", "Priority search listing", "Unlimited requests"] },
    { name: "Elite", price: "৳1999/month", features: ["Dedicated support", "Profile highlight", "Exclusive match suggestions"] },
  ];

  return (
    <section className="nuni  px-5">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42] mb-10">
        Membership Plans
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className="shadow-[#8a6c42] border-[#8a6c42]  p-6 rounded-xl shadow-md text-center border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-2xl font-bold text-[#8a6c42]">{plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((f, idx) => <li key={idx}>✅ {f}</li>)}
            </ul>
            <button className="mt-6 px-6 py-2 bg-pink-600  rounded-md hover:bg-pink-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipPlans;
