import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";

const divisions = [
  "Dhaka",
  "Chattagram",
  "Rangpur",
  "Barisal",
  "Khulna",
  "Mymensingh",
  "Sylhet",
];

const BiodatasPage = () => {
  const axios = useAxios();

  const [filters, setFilters] = useState({
    age: 60,
    type: "",
    division: "",
  });

  const { data: biodatas = [], isLoading } = useQuery({
    queryKey: ["allBiodatas"],
    queryFn: async () => {
      const res = await axios.get("/biodatas"); // Replace with your secure axios instance if needed
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-full min-h-dvh flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  const filtered = biodatas
    .filter((b) => (filters.type ? b.biodataType === filters.type : true))
    .filter((b) =>
      filters.division ? b.permanentDivision === filters.division : true
    )
    .filter((b) => parseInt(b.age) <= parseInt(filters.age))
    .slice(0, 40); // Limit to 20 items

  return (
    <div className="nuni grid grid-cols-12 gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Filter Sidebar */}
      <div className="col-span-12 md:col-span-3 bg-white p-4 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
          Filters
        </h2>

        <div>
          <label className="block font-medium text-xl mb-1">
            Age: Up to {filters.age}
          </label>
          <input
            type="range"
            min="18"
            max="60"
            value={filters.age}
            onChange={(e) => setFilters({ ...filters, age: e.target.value })}
            className="w-full "
          />
        </div>

        <div>
          <label className="block font-medium text-xl mb-1 ">
            Biodata Type
          </label>
          <select
            className="w-full border border-[#8a6c42] rounded px-3 py-2"
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-xl font-medium mb-1">Division</label>
          <select
            className="w-full border border-[#8a6c42] rounded px-3 py-2"
            onChange={(e) =>
              setFilters({ ...filters, division: e.target.value })
            }
          >
            <option value="">All</option>
            {divisions.map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Biodata Cards */}
      <div className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p className="col-span-full text-center text-gray-500">Loading...</p>
        ) : filtered.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No biodata found.
          </p>
        ) : (
          filtered.map((data) => (
            <div
              key={data._id}
              className="bg-white border border-[#8a6c42] shadow-lg shadow-[#8a6c42] rounded-lg p-4 space-y-2"
            >
              <img
                src={data.profileImage}
                alt=""
                className="w-full h-40 object-cover rounded"
              />
              <p>
                <strong>ID:</strong> {data.BiodataId}
              </p>
              <p>
                <strong>Type:</strong> {data.biodataType}
              </p>
              <p>
                <strong>Division:</strong> {data.permanentDivision}
              </p>
              <p>
                <strong>Age:</strong> {data.age}
              </p>
              <p>
                <strong>Occupation:</strong> {data.occupation}
              </p>

              <Link to={`/biodata/${data._id}`} className="">
                <button>View Profile</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BiodatasPage;
