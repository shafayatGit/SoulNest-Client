import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ApproveContactRequests = () => {
  const axiosSecure = useAxiosSecure();

  // ✅ Get all requests
  const {
    data: requests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["adminContactRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  // ✅ Approve handler
  const handleApprove = (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to approve this contact request?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Approve",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/payments/${id}`, { status: "approved" })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire(
                "Approved!",
                "The request has been approved.",
                "success"
              );

              refetch();
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Error", "Something went wrong!", "error");
          });
      }
    });
  };

  if (isLoading)
    return (
      <div className="w-full min-h-dvh flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 mt-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
        All Contact Requests
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-2 border-[#8a6c42] text-sm md:text-base">
          <thead className="bg-[#bda373]">
            <tr>
              <th className="p-2 border border-[#8a6c42]">Name</th>
              <th className="p-2 border border-[#8a6c42]">Biodata ID</th>
              <th className="p-2 border border-[#8a6c42]">Requested By</th>
              <th className="p-2 border border-[#8a6c42]">Status</th>
              <th className="p-2 border border-[#8a6c42]">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id} className="text-center">
                <td className="p-2 border border-[#8a6c42]">{req.displayName}</td>
                <td className="p-2 border border-[#8a6c42]">{req.biodataId}</td>
                <td className="p-2 border border-[#8a6c42]">{req.email}</td>
                <td className="p-2 border border-[#8a6c42] capitalize">{req.status}</td>
                <td className="p-2 border border-[#8a6c42] space-x-2">
                  {req.status === "pending" && (
                    <button
                      onClick={() => handleApprove(req._id)}
                      className="bg-green-600 hover:bg-green-700 text-black px-3 py-1 rounded"
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
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

export default ApproveContactRequests;
