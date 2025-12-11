import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAxios from "../../hooks/useAxios";

const Registration = () => {
  const axios = useAxios();
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Registered User:", data);
    createUser(data.email, data.password)
      .then(async () => {
        toast.success(`Welcome, ${data.name}! 🎉`);
        const userInfo = {
          email: data.email,
          name: data.name,
          role: "user", // default role
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };

        const userRes = await axios.post("/users", userInfo);
        console.log(userRes.data);
        navigate(from);
        // update userinfo in the database
      })
      .catch((error) => {
        console.error(error);
      });

    reset(); // clear form after submission
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(async (result) => {
        const user = result.user;
        toast.success(`Welcome, ${user.displayName}! 🎉`);
        const userInfo = {
          email: user.email,
          name: user.name,
          role: "user", // default role
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };

        const userRes = await axios.post("/users", userInfo);
        console.log(userRes.data);
        navigate(from);

        navigate(from);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-[#e4e1da] libre flex justify-center items-center min-h-screen ">
      <div className=" bg-[#dfd9cd] w-full max-w-md p-8  rounded-2xl shadow-xl">
        <h2 className="text-center mb-6 libre text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              placeholder="you@example.com"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="********"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="url"
              {...register("photo", { required: "Photo URL is required" })}
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className=" w-full mt-4">
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-4">OR</div>
        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          className=" w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={20} /> Continue with Google
        </button>

        {/* Link to Registration */}
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#8a6c42] font-bold text-lg hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
