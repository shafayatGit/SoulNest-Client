import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// import { useAuth } from '../../contexts/AuthContext';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext/AuthContext";

const FavouritesBiodata = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // Get favourites by logged-in user
  const {
    data: favourites = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["favourites", user?.email],
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
      title: "Are you sure?",
      text: "You want to remove this from favourites?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      await axiosSecure.delete(`/favourites/${favouriteId}`);
      refetch();
      Swal.fire("Deleted!", "Removed from favourites.", "success");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
        My Favourites Biodata
      </h2>

      {isLoading ? (
        <div className=" max-w-6xl mx-auto w-full h-dvh flex justify-center items-center">
          <div class="loader"></div>
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="min-w-[600px] w-full border border-[#8a6c42] text-sm md:text-base">
            <thead className="bg-[#bda373] text-center">
              <tr>
                <th className="p-3 border ">Name</th>
                <th className="p-3 border ">Biodata ID</th>
                <th className="p-3 border ">Permanent Address</th>
                <th className="p-3 border ">Occupation</th>
                <th className="p-3 border text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {favourites.map((biodata, index) => (
                <tr key={index} className="border-2 text-center border-[#8a6c42]">
                  <td className="p-3 border-2 border-[#8a6c42]  whitespace-nowrap">
                    {biodata.displayName}
                  </td>
                  <td className="p-3 border-2 border-[#8a6c42] whitespace-nowrap">
                    {biodata.BiodataId}
                  </td>
                  <td className="p-3 border-2 border-[#8a6c42]">{biodata.permanentDivision}</td>
                  <td className="p-3 border-2 border-[#8a6c42]">{biodata.occupation}</td>
                  <td className="p-3 border-2 border-[#8a6c42] text-center">
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
