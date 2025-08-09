import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
// import { AuthContext } from '../context/AuthProvider';
// import useAxiosSecure from '../hooks/useAxiosSecure'; // your secure axios instance
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthContext/AuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyContactRequests = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  //   const queryClient = useQueryClient();

  // ✅ Fetch user's contact requests
  const {
    data: requests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myContactRequests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  // ✅ Delete mutation
  //   const deleteMutation = useMutation({
  //     mutationFn: async (id) => {
  //       const res = await axiosSecure.delete(`/payments/${id}`);
  //       return res.data;
  //     },
  //     onSuccess: () => {
  //       Swal.fire('Deleted!', 'Contact request has been deleted.', 'success');
  //       queryClient.invalidateQueries(['myContactRequests']);
  //     },
  //   });

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this from contact request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      await axiosSecure.delete(`/payments/${id}`);
      refetch();
      Swal.fire("Deleted!", "Removed from payments.", "success");
    }
  };

  if (isLoading)
    return (
      <div className=" max-w-6xl mx-auto w-full h-dvh flex justify-center items-center">
        <div class="loader"></div>
      </div>
    );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
        My Contact Requests
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-[#8a6c42]text-sm md:text-base">
          <thead className="bg-[#bda373]">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">BiodataId</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Mobile No</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id} className="text-center">
                <td className="p-2 border">{req.displayName}</td>
                <td className="p-2 border">{req.biodataId}</td>
                <td className="p-2 border capitalize">{req.status}</td>
                <td className="p-2 border">
                  {req.status === "approved"
                    ? req.mobileNumber || "N/A"
                    : "Hidden"}
                </td>
                <td className="p-2 border">
                  {req.status === "approved" ? req.email || "N/A" : "Hidden"}
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(req._id)}
                    className="bg-red-500 hover:bg-red-600 text-black px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No contact requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContactRequests;
