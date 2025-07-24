import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthContext/AuthContext";
// import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAxiosSecure from "../../hooks/useAxiosSecure"; // adjust path as needed

const divisions = [
  "Dhaka",
  "Chattagram",
  "Rangpur",
  "Barisal",
  "Khulna",
  "Mymensingh",
  "Sylhet",
];
const heights = [
  "4'5\"",
  "4'8\"",
  "5'0\"",
  "5'3\"",
  "5'6\"",
  "5'9\"",
  "6'0\"",
  "6'2\"",
];
const weights = ["45kg", "50kg", "55kg", "60kg", "65kg", "70kg", "75kg"];
const occupations = [
  "Student",
  "Engineer",
  "Doctor",
  "Teacher",
  "Business",
  "Other",
];
const races = ["Fair", "Medium", "Dark"];

const EditBiodata = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const [biodataId, setBiodataId] = useState(null);
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const confirm = await Swal.fire({
      title: "Confirm to Publish?",
      html: `
        <strong>${data.name}</strong><br/>
        Partner Age: ${data.expectedPartnerAge}<br/>
        Mobile: ${data.mobile}
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Publish",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.post("/biodatas", {
          ...data,
          email: user.email,
          displayName: user.displayName,
          status: "non-premium",
          creation_date: new Date().toISOString(),
        });

        if (res.data.success) {
          Swal.fire(
            "Success!",
            `Biodata created with ID: ${res.data.newId}`,
            "success"
          );
          //   reset();
        }
      } catch (err) {
        Swal.fire("Error", "Failed to save biodata.", "error");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 shadow-lg rounded-xl my-10">
      <h2 className="text-4xl text-center font-bold mb-6 ">
        📝{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
          Edit Biodata
        </span>
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <select
          {...register("biodataType")}
          className="select select-bordered"
          required
        >
          <option value="">Select Biodata Type</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          {...register("name")}
          type="text"
          placeholder="Full Name"
          className="input input-bordered"
          required
        />
        <input
          {...register("profileImage")}
          type="text"
          placeholder="Profile Image URL"
          className="input input-bordered"
        />
        <input
          {...register("dob")}
          type="date"
          className="input input-bordered"
          required
        />

        <select
          {...register("height")}
          className="select select-bordered"
          required
        >
          <option value="">Select Height</option>
          {heights.map((h) => (
            <option key={h}>{h}</option>
          ))}
        </select>

        <select
          {...register("weight")}
          className="select select-bordered"
          required
        >
          <option value="">Select Weight</option>
          {weights.map((w) => (
            <option key={w}>{w}</option>
          ))}
        </select>

        <input
          {...register("age")}
          type="number"
          placeholder="Age"
          className="input input-bordered"
          required
        />

        <select
          {...register("occupation")}
          className="select select-bordered"
          required
        >
          <option value="">Select Occupation</option>
          {occupations.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>

        <select
          {...register("race")}
          className="select select-bordered"
          required
        >
          <option value="">Select Race</option>
          {races.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>

        <input
          {...register("fatherName")}
          type="text"
          placeholder="Father's Name"
          className="input input-bordered"
        />
        <input
          {...register("motherName")}
          type="text"
          placeholder="Mother's Name"
          className="input input-bordered"
        />

        <select
          {...register("permanentDivision")}
          className="select select-bordered"
          required
        >
          <option value="">Select Permanent Division</option>
          {divisions.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <select
          {...register("presentDivision")}
          className="select select-bordered"
          required
        >
          <option value="">Select Present Division</option>
          {divisions.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <input
          {...register("expectedPartnerAge")}
          type="number"
          placeholder="Expected Partner Age"
          className="input input-bordered"
        />
        <select
          {...register("expectedPartnerHeight")}
          className="select select-bordered"
          required
        >
          <option value="">Expected Partner Height</option>
          {heights.map((h) => (
            <option key={h}>{h}</option>
          ))}
        </select>

        <select
          {...register("expectedPartnerWeight")}
          className="select select-bordered"
          required
        >
          <option value="">Expected Partner Weight</option>
          {weights.map((w) => (
            <option key={w}>{w}</option>
          ))}
        </select>

        <input
          type="email"
          value={user?.email}
          className="input input-bordered"
          readOnly
        />
        <input
          {...register("mobileNumber")}
          type="text"
          placeholder="Mobile Number"
          className="input input-bordered"
          required
        />

        <div className="col-span-2">
          <button
            type="submit"
            className="btn btn-primary text-black w-full mt-4"
          >
            💾 Save and Publish Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBiodata;
