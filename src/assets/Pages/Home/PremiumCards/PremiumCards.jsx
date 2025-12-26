import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaStar } from 'react-icons/fa';
// import useAxiosSecure from '../../hooks/useAxiosSecure'; // Update path as per your structure

const PremiumCards = () => {
  const axiosSecure = useAxiosSecure();


  const { data: premiumUsers = [], isLoading } = useQuery({
    queryKey: ['premium-members'],
    queryFn: async () => {
      const res = await axiosSecure.get('/allBiodatas/premium');
      return res.data.slice(0, 6); // Show top 6 only
    }
  });

  if (isLoading)
    return (
      <div className=" max-w-6xl mx-auto w-full h-dvh flex justify-center items-center">
          <div class="loader"></div>
        </div>
    );

  return (
    <section className="py-10 mt-20 max-w-8xl mx-auto px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl text-center mt-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42] mb-8 flex justify-center items-center gap-1 md:gap-3 drop-shadow-lg shadow-[#8a6c42]">
        <FaStar className="text-[#8a6c42] text-center font-bold bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42] md:text-4xl" />
        <span className="text-shadow md:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">Premium Members</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {premiumUsers.map(user => (
          <div data-aos="fade-down"
            key={user._id}
            className="bg-[#e9e5e1] rounded-2xl shadow-[#8a6c42] shadow-md hover:shadow-xl active:shadow-xl border border-transparent hover:border-[#8a6c42] active:border-[#8a6c42] transition-all duration-3000 hover:scale-105 p-5"
          >
            <div className="flex justify-center">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-[#8a6c42] shadow"
              />
            </div>
            <div className="text-center mt-4 space-y-1">
              <p className="text-sm text-gray-500">Biodata ID: <span className="font-medium text-gray-700">{user.BiodataId}</span></p>
              <h3 className="text-xl font-semibold text-[#8a6c42]">{user.displayName}</h3>
              <p className="text-sm text-gray-600">{user.biodataType}</p>
              <p className="text-sm text-gray-600">Age: {user.age}</p>
              <p className="text-sm text-gray-600">Division: {user.permanentDivision}</p>
              <p className="text-sm text-gray-600">Occupation: {user.occupation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumCards;
