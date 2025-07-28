import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    type: "",
    division: "",
    minAge: "",
    maxAge: "",
  });

  const limit = 9;
  const [maxAge, setMaxAge] = useState(60);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["biodatas", page, filters],
    queryFn: async () => {
      const query = new URLSearchParams({
        page,
        limit,
        ...(filters.type && { type: filters.type }),
        ...(filters.division && { division: filters.division }),
        ...(filters.minAge && { minAge: filters.minAge }),
        ...(filters.maxAge && { maxAge: filters.maxAge }),
      }).toString();

      const res = await axios.get(`/biodatas-pagination?${query}`);
      return res.data;
    },
  });

  const totalPages = data ? Math.ceil(data.total / limit) : 1;

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApplyFilters = () => {
    setPage(1);
    refetch();
  };

  const handleView = (id) => {
    navigate(`/biodata/${id}`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4 py-6">
      {/* Sidebar Filters */}
      <aside className="lg:w-1/4 border-2 border-[#8a6c42] p-4 rounded shadow bg-white">
        <h2 className="text-2xl text-center font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
          Filter
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Biodata Type</label>
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full border border-[#8a6c42] px-3 py-2 rounded"
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Division</label>
          <select
            name="division"
            value={filters.division}
            onChange={handleFilterChange}
            className="w-full border border-[#8a6c42] px-3 py-2 rounded"
          >
            <option value="">All</option>
            {divisions.map((division) => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <div>
            <label>Max Age: {maxAge}</label>
            <input
              type="range"
              min="18"
              max="60"
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* <button
          onClick={handleApplyFilters}
          className="bg-blue-600 text-black w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Apply Filter
        </button> */}
      </aside>

      {/* Biodatas Grid */}
      <section className="lg:w-3/4">
        <h2 className="text-4xl text-center font-semibold mb-10 mt-10 text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
          All Biodata
        </h2>

        {isLoading ? (
          <div className="w-full min-h-dvh flex justify-center items-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.biodatas.map((biodata) => (
                <div
                  key={biodata._id}
                  className="border border-[#8a6c42] shadow-lg shadow-[#8a6c42] p-4 rounded bg-white flex flex-col items-center"
                >
                  <img
                    src={biodata.profileImage}
                    alt={biodata.name}
                    className="h-40 w-40 rounded-full object-cover mb-2"
                  />
                  <h3 className="font-bold text-lg">{biodata.displayName}</h3>
                  <p>Biodata ID: {biodata.BiodataId}</p>
                  <p>Type: {biodata.biodataType}</p>
                  <p>Division: {biodata.permanentDivision}</p>
                  <p>Age: {biodata.age}</p>
                  <p>Occupation: {biodata.occupation}</p>
                  <button
                    onClick={() => handleView(biodata._id)}
                    className="mt-2 bg-blue-500 text-black px-3 py-1 rounded"
                  >
                    View Profile
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 gap-2">
              {[...Array(totalPages).keys()].map((num) => (
                <button
                  key={num}
                  onClick={() => setPage(num + 1)}
                  className={`px-3 py-1 border rounded ${
                    page === num + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {num + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default BiodatasPage;
