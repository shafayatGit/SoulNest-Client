import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { useEffect } from "react";
import Aos from "aos";

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  useEffect(() => {
          Aos.init({
            duration: 900, // animation duration
            once: false, // only once per element
            offset: 200, // offset (in px) from the original trigger point
          });
        }, []);

  const onSubmit = (data) => {
    console.log("Contact Data:", data);
    reset();
    toast.success("Thanks for reaching out! We'll get back to you soon.");
  };

  return (
    <section className="mt-24 max-w-6xl mx-auto px-4 py-16">
      <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-bold text-center mb-10 ">📞 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">Contact Us</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Contact Info */}
        <div data-aos="fade-left" className="space-y-6 text-lg ">
          <div className="flex items-start gap-4">
            <FaPhone className="text-[#8a6c42] text-2xl" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+880-1234-567890</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-[#8a6c42] text-2xl" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>support@soulnest.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-[#8a6c42] text-2xl" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form data-aos="fade-right" onSubmit={handleSubmit(onSubmit)} className="space-y-6  shadow-md p-8 rounded-xl">
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">Subject</label>
            <input
              type="text"
              {...register("subject")}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Subject (optional)"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows="5"
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Your message..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
          </div>

          <button
            type="submit"
            className=" text-black px-6 py-2 rounded font-semibold transition"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
