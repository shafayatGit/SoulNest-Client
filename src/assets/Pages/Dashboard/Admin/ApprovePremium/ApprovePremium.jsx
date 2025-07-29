import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "@/hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { CheckCircle } from "react-icons/fi";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();

  const { data: requests = [], refetch } = useQuery({
    queryKey: ["premiumRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allBiodatas/premium-requests");
      return res.data;
    },
  });

  const handleApprove = async (id) => {
    try {
      const { data } = await axiosSecure.patch(`/biodatas/approve-premium/${id}`);
      if (data.success) {
        Swal.fire("Success", data.message, "success");
        refetch();
      } else {
        Swal.fire("Failed", data.message, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">Premium Approval Requests</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Biodata ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.BiodataId}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleApprove(item._id)}
                  >
                    {/* <CheckCircle className="inline mr-1" />  */}
                    Make Premium
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {requests.length === 0 && <p className="mt-4 text-gray-500">No pending requests</p>}
      </div>
    </div>
  );
};

export default ApprovedPremium;
