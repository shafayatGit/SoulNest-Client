import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log("Contact Data:", data);
    reset();
    toast.success("Thanks for reaching out! We'll get back to you soon.");
  };

  return (
    <section className="mt-24 max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 ">
        📞{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
          Contact Me
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-6 text-lg ">
          <div className="flex items-start gap-4">
            <FaPhone className="text-[#8a6c42] text-2xl" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+880-1635873987</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-[#8a6c42] text-2xl" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>shafayathossain.drmc@gmail.com</p>
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6  shadow-md p-8 rounded-xl"
        >
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
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
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">Message is required</p>
            )}
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
