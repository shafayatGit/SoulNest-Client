import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import Aos from "aos";
import useAxios from "../../hooks/useAxios";

const Login = () => {
  const { signIn, signInWithGoogle, user } = useContext(AuthContext);
  const axios = useAxios()
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    Aos.init({
      duration: 900, // animation duration
      once: false, // only once per element
      offset: 200, // offset (in px) from the original trigger point
    });
  }, []);

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(async (result) => {
        toast.success(`Welcome back, ${data.email.split("@")[0]}!`);
        navigate(from);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(async (result) => {
        const user = result.user;
                toast.success(`Welcome, ${user.displayName}! 🎉`);
                const userInfo = {
                    email: user.email,
                    name: user.name,
                    role: 'user', // default role
                    created_at: new Date().toISOString(),
                    last_log_in: new Date().toISOString()
                }

                const userRes = await axios.post('/users', userInfo);
        navigate(from);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="libre flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2
          data-aos="fade-down"
          className="libre text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42] text-center mb-6"
        >
          Login to Your Account
        </h2>

        <form
          data-aos="fade-up"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
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
              {...register("password", { required: "Password is required" })}
              placeholder="********"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button type="submit" className="w-full mt-2">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-4">OR</div>

        {/* Google Sign-In */}
        <button
          data-aos="fade-down"
          onClick={handleGoogleSignIn}
          className=" w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={20} /> Continue with Google
        </button>

        {/* Link to Registration */}
        <p className="text-center mt-6 text-sm">
          Don't have an account?{" "}
          <Link
            data-aos="fade-down"
            to="/register"
            className="text-[#8a6c42] font-medium hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
