import Aos from "aos";
import { useEffect } from "react";
import CountUp from "react-countup";
import { FaUsers, FaFemale, FaMale, FaHeart } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const SuccessCounter = () => {

   useEffect(() => {
       Aos.init({
         duration: 900, // animation duration
         once: false, // only once per element
         offset: 200, // offset (in px) from the original trigger point
       });
     }, []);

  const stats = [
    {
      icon: <FaUsers className="text-4xl text-rose-600" />,
      label: "Total Biodata",
      count: 3200,
    },
    {
      icon: <FaFemale className="text-4xl text-pink-500" />,
      label: "Girls Biodata",
      count: 1800,
    },
    {
      icon: <FaMale className="text-4xl text-blue-500" />,
      label: "Boys Biodata",
      count: 1400,
    },
    {
      icon: <FaHeart className="text-4xl text-emerald-500" />,
      label: "Marriages Completed",
      count: 850,
    },
  ];

  const { ref, inView } = useInView();

  return (
    <section className="nuni py-16 px-4 lg:px-20">
      <div data-aos="fade-down" className="text-center mb-12" ref={ref}>
        <h2 className="text-4xl font-bold mb-2">📊 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42] ">Our Success Stories</span></h2>
        <p className="text-xl max-w-xl mx-auto">
          Alhamdulillah! We’ve helped thousands find their halal life partner.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div data-aos="fade-up"
            key={index}
            className="border-2 border-[#8a6c42] rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-3xl font-bold ">
             
              {inView && (
                  <CountUp
                    start={0}
                    end={item.count}
                    duration={3} 
                    delay={0}
                    separator=","
                  ></CountUp>
                )}
                +
            </h3>
            <p className="text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessCounter;
