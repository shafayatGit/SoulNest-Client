import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../../../AuthContext/AuthContext";
// import axiosSecure from '../../../hooks/useAxiosSecure';
import useAxios from "../../../hooks/useAxios";
// import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ViewBiodata = () => {
  const axios = useAxios();
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate()

  const { data: myBiodatas = [], isPending } = useQuery({
    queryKey: ["myBiodatas", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`/myBiodatas?email=${user.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="w-full min-h-dvh flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  

  const handleMakePremium = (biodataId) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to request to make your biodata premium?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, request it!',
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.patch(`/biodatas/request-premium/${biodataId}`)
        .then(res => {
          if (res.data.success) {
            Swal.fire('Requested!', 'Your request has been sent to admin.', 'success');
          } else {
            Swal.fire('Oops!',"Something is wrong or you have requested once!");
          }
        });
    }
  });
};

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl text-center mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">View Biodata</h1>
      {myBiodatas.map((biodata) => (
        <div className="border border-[#8a6c42] mb-5 rounded p-4 shadow">
          <img
            src={biodata.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-2xl text-center font-bold my-2">
            {biodata.displayName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <p>
              <b>Biodata Type:</b> {biodata.biodataType}
            </p>
            <p>
              <b>Date of Birth:</b> {biodata.dob}
            </p>
            <p>
              <b>Height:</b> {biodata.height}
            </p>
            <p>
              <b>Weight:</b> {biodata.weight}
            </p>
            <p>
              <b>Age:</b> {biodata.age}
            </p>
            <p>
              <b>Occupation:</b> {biodata.occupation}
            </p>
            <p>
              <b>Race:</b> {biodata.race}
            </p>
            <p>
              <b>Father's Name:</b> {biodata.fatherName}
            </p>
            <p>
              <b>Mother's Name:</b> {biodata.motherName}
            </p>
            <p>
              <b>Permanent Division:</b> {biodata.permanentDivision}
            </p>
            <p>
              <b>Present Division:</b> {biodata.presentDivision}
            </p>
            <p>
              <b>Expected Partner Age:</b> {biodata.expectedPartnerAge}
            </p>
            <p>
              <b>Expected Partner Height:</b> {biodata.expectedPartnerHeight}
            </p>
            <p>
              <b>Expected Partner Weight:</b> {biodata.expectedPartnerWeight}
            </p>
            <p>
              <b>Contact Email:</b> {biodata.email}
            </p>
            <p>
              <b>Mobile Number:</b> {biodata.mobileNumber}
            </p>
          </div>

            <div className="text-center mt-6">
              <button
                  onClick={()=>handleMakePremium(biodata._id)}
                className="bg-purple-600 hover:bg-purple-700 text-black py-2 px-6 rounded"
              >
                Make Biodata to Premium
              </button>
            </div>
          {/* {!myBiodatas.premiumApproved && (
          )} */}

          {/* {myBiodatas.premiumRequest && !myBiodatas.premiumApproved && (
            <p className="text-center text-yellow-600 mt-2">
              Awaiting Admin Approval
            </p>
          )}
          {myBiodatas.premiumApproved && (
            <p className="text-center text-green-600 mt-2 font-semibold">
              You are a Premium Member!
            </p>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default ViewBiodata;
