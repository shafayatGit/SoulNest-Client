import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// import { useAuth } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthContext/AuthContext';

const FavouritesBiodata = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // Get favourites by logged-in user
  const { data: favourites = [], refetch, isLoading } = useQuery({
    queryKey: ['favourites', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/favourites?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  // Load full biodata details for each favourite
//   const { data: allBiodatas = [] } = useQuery({
//     queryKey: ['allBiodatas'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/biodatas'); // assuming this returns all biodatas
//       return res.data;
//     }
//   });

//   // Match favourites with actual biodatas
//   const matchedBiodatas = favourites.map(fav => {
//     return allBiodatas.find(bio => bio.BiodataId === fav.biodataId);
//   }).filter(Boolean);

  const handleDelete = async (favouriteId) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to remove this from favourites?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      await axiosSecure.delete(`/favourites/${favouriteId}`);
      refetch();
      Swal.fire('Deleted!', 'Removed from favourites.', 'success');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">My Favourites Biodata</h2>

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="min-w-[600px] w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3 border text-left">Name</th>
                <th className="p-3 border text-left">Biodata ID</th>
                <th className="p-3 border text-left">Permanent Address</th>
                <th className="p-3 border text-left">Occupation</th>
                <th className="p-3 border text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {favourites.map((biodata, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 border whitespace-nowrap">{biodata.displayName}</td>
                  <td className="p-3 border whitespace-nowrap">{biodata.BiodataId}</td>
                  <td className="p-3 border">{biodata.permanentDivision}</td>
                  <td className="p-3 border">{biodata.occupation}</td>
                  <td className="p-3 border text-center">
                    <button
                      onClick={() => handleDelete(biodata._id)}
                      className="bg-red-500 hover:bg-red-600 text-black px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {favourites.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No favourites found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FavouritesBiodata;
