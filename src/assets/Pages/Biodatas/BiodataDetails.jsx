import { useQuery } from "@tanstack/react-query";
// import axiosSecure from "../hooks/useAxiosSecure"; // your secure axios instance
// import useAuth from "../hooks/useAuth"; // provides user & role
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
// import useAxios from "../../hooks/useAxios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import useAxios from "../../hooks/useAxios";

const BiodataDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, role } = useContext(AuthContext); // role: "normal" or "premium"
  const axios = useAxios();
  const axiosSecure = useAxiosSecure();

  // Fetch current biodata
  const { data: biodata = {}, isLoading } = useQuery({
    queryKey: ["biodataDetails", id],
    queryFn: async () => {
      const res = await axios.get(`/biodatas/${id}`);
      return res.data;
    },
  });
  console.log(biodata);

  // Fetch similar biodatas (max 3)
  const { data: similarBiodatas = [] } = useQuery({
    queryKey: ["similarBiodatas", biodata.biodataType],
    enabled: !!biodata.biodataType,
    queryFn: async () => {
      const res = await axios.get(`/biodatas?type=${biodata.biodataType}`);
      return res.data.filter((b) => b._id !== biodata._id).slice(0, 3);
    },
  });

  const { displayName, permanentDivision, occupation } = biodata;

  const handleAddToFavourites = async (id) => {
    try {
      const payload = {
        displayName: displayName,
        BiodataId: id,
        permanentDivision: permanentDivision,
        occupation: occupation,
        email: user.email,
        added_at: new Date(),
      };
      await axiosSecure.post("/favourites", payload);
      Swal.fire("Success", "Added to Favourites", "success");
    } catch (err) {
      Swal.fire("Error", "Something went wrong", "error", err);
    }
  };

  const handleRequestContact = (id) => {
    navigate(`/checkout/${id}`);
  };

  if (isLoading)
    return (
      <div className="w-full min-h-dvh flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );

  return (
    <div className="nuni max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
        Biodata Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <img
          src={biodata.profileImage}
          alt={biodata.name}
          className="w-full max-w-sm rounded-lg shadow"
        />
        <div>
          <p>
            <strong>Name:</strong> {biodata.displayName}
          </p>
          <p>
            <strong>Biodata Type:</strong> {biodata.biodataType}
          </p>
          <p>
            <strong>Date of Birth:</strong> {biodata.dob}
          </p>
          <p>
            <strong>Age:</strong> {biodata.age}
          </p>
          <p>
            <strong>Height:</strong> {biodata.height}
          </p>
          <p>
            <strong>Weight:</strong> {biodata.weight}
          </p>
          <p>
            <strong>Occupation:</strong> {biodata.occupation}
          </p>
          <p>
            <strong>Race:</strong> {biodata.race}
          </p>
          <p>
            <strong>Father’s Name:</strong> {biodata.fatherName}
          </p>
          <p>
            <strong>Mother’s Name:</strong> {biodata.motherName}
          </p>
          <p>
            <strong>Permanent Division:</strong> {biodata.permanentDivision}
          </p>
          <p>
            <strong>Present Division:</strong> {biodata.presentDivision}
          </p>
          <p>
            <strong>Expected Partner Age:</strong> {biodata.expectedPartnerAge}
          </p>
          <p>
            <strong>Expected Partner Height:</strong>{" "}
            {biodata.expectedPartnerHeight}
          </p>
          <p>
            <strong>Expected Partner Weight:</strong>{" "}
            {biodata.expectedPartnerWeight}
          </p>

          {role === "premium" ? (
            <>
              <p>
                <strong>Email:</strong> {biodata.email}
              </p>
              <p>
                <strong>Mobile Number:</strong> {biodata.mobileNumber}
              </p>
            </>
          ) : (
            <p className="text-red-600 mt-2">
              Contact info is only available for premium users
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-4 mb-10">
        <button
          onClick={() => handleAddToFavourites(biodata.BiodataId)}
          className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded text-black"
        >
          Add to Favourites
        </button>

        {biodata.status !== "approved" && (
          <button
            onClick={() => handleRequestContact(biodata._id)}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-black"
          >
            Request Contact Info
          </button>
        )}
      </div>

      <h2 className="text-2xl text-center font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
        Similar Biodatas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarBiodatas.map((similar) => (
          <div
            key={similar._id}
            className="border border-[#8a6c42] shadow-lg shadow-[#8a6c42] p-4 rounded-lg "
          >
            <img
              src={similar.profileImage}
              alt={similar.name}
              className="w-full object-cover rounded"
            />
            <p>
              <strong>Name:</strong> {similar.name}
            </p>
            <p>
              <strong>Age:</strong> {similar.age}
            </p>
            <p>
              <strong>Division:</strong> {similar.permanentDivision}
            </p>
            <button
              onClick={() => navigate(`/biodata/${similar._id}`)}
              className="mt-2 text-black px-3 py-1 rounded"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiodataDetails;
