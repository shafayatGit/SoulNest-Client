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
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const AdminDashboard = () => {
    const axiosSecure = useAxiosSecure();
    const COLORS = ["#8a6c42", "#f5c97b", "#d4a15d", "#bf8a40", "#7c6741"];

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/dashboard-stats");
      return res.data;
    },
  });
//   console.log(stats);

  if (isLoading)
    return (
      <div className=" max-w-6xl mx-auto w-full h-dvh flex justify-center items-center">
          <div class="loader"></div>
        </div>
    );

    const pieData = [
    { name: "Total Biodata", value: stats.total },
    { name: "Male Biodata", value: stats.male },
    { name: "Female Biodata", value: stats.female },
    { name: "Premium Biodata", value: stats.premium },
    { name: "Revenue ($)", value: stats.revenue }
  ];

  return (
    <>
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
    <div className="w-full h-[400px] mb-20 mt-10">
      <h2 className="text-4xl font-bold text-center text-[#8a6c42]  mt-10 drop-shadow-md">
        Site Overview
      </h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8a6c42"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={46} />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default AdminDashboard;
