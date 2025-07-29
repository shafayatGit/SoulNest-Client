import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import {
  FaUsers,
  FaMale,
  FaFemale,
  FaCrown,
  FaDollarSign,
} from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/dashboard-stats");
      return res.data;
    },
  });
  console.log(stats);

  if (isLoading)
    return (
      <div className="w-full min-h-dvh flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );

  return (
    <div className="p-5 grid gap-5 md:grid-cols-2">
      <div className="bg-white border border-[#8a6c42]  rounded-lg shadow p-10 flex items-center gap-4">
        <FaUsers className="text-3xl text-blue-600" />
        <div>
          <h2 className="text-xl font-bold">Total Biodata</h2>
          <p>{stats.total}</p>
        </div>
      </div>

      <div className="bg-white border border-[#8a6c42] rounded-lg shadow p-10 flex items-center gap-4">
        <FaMale className="text-3xl text-green-600" />
        <div>
          <h2 className="text-xl font-bold">Male</h2>
          <p>{stats.male}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-[#8a6c42] p-10 flex items-center gap-4">
        <FaFemale className="text-3xl text-pink-500" />
        <div>
          <h2 className="text-xl font-bold">Female</h2>
          <p>{stats.female}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-[#8a6c42] p-10 flex items-center gap-4">
        <FaCrown className="text-3xl text-yellow-500" />
        <div>
          <h2 className="text-xl font-bold">Premium</h2>
          <p>{stats.premium}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-[#8a6c42] p-10 flex items-center gap-4">
        <FaDollarSign className="text-3xl text-purple-600" />
        <div>
          <h2 className="text-xl font-bold">Revenue</h2>
          <p>${stats.revenue}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
