import { useQuery } from '@tanstack/react-query';
// import axiosSecure from '../../api/axiosSecure';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

// const axiosSecure = useAxiosSecure()

const getPremiumRequests = async () => {
  const res = await useAxiosSecure.get('/biodatas/premium-requests');
  return res.data;
};

const ApprovedPremium = () => {
  const { data: requests = [], refetch, isLoading } = useQuery({
    queryKey: ['premiumRequests'],
    queryFn: getPremiumRequests,
  });

  const handleMakePremium = async (biodataId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Make this user premium?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, approve',
    });

    if (result.isConfirmed) {
      try {
        const res = await useAxiosSecure.patch(`/biodatas/approve-premium/${biodataId}`);
        if (res.data?.success) {
          Swal.fire('Success!', 'User is now premium.', 'success');
          refetch(); // Refetch the table
        }
      } catch (err) {
        Swal.fire('Error', 'Something went wrong.', 'error',err);
      }
    }
  };

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-4xl font-bold mb-6 mt-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">Premium Approval Requests</h2>

      {isLoading ? (
        <div className="w-full min-h-dvh flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Biodata ID</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No premium requests found.</td>
              </tr>
            ) : (
              requests.map((bio) => (
                <tr key={bio._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{bio.name}</td>
                  <td className="border px-4 py-2">{bio.email}</td>
                  <td className="border px-4 py-2">{bio.biodataId}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => handleMakePremium(bio._id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                    >
                      Make Premium
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApprovedPremium;
