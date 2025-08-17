import React, { useContext, useState } from 'react';
// import { 
//   User, 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Calendar,
//   Edit3,
//   Camera,
//   Save,
//   X,
//   Shield,
//   Award,
//   Heart
// } from 'lucide-react';
import { AuthContext } from '../../../../AuthContext/AuthContext';
import { CiCamera, CiHeart, CiMail } from 'react-icons/ci';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';

// interface UserProfile {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   profileImage: string;
//   joinDate: string;
//   bio: string;
//   interests: string[];
//   totalSessions: number;
//   membershipLevel: string;
// }

const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [userProfile, setUserProfile] = useState<UserProfile>({
//     id: '1',
//     name: 'Alex Johnson',
//     email: 'alex.johnson@example.com',
//     phone: '+1 (555) 123-4567',
//     address: '123 Serenity Lane, Peaceful Valley, CA 94102',
//     profileImage: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
//     joinDate: '2023-06-15',
//     bio: 'Finding peace through mindfulness and connecting with like-minded souls on this beautiful journey of self-discovery.',
//     interests: ['Meditation', 'Yoga', 'Reading', 'Nature Walks', 'Journaling'],
//     totalSessions: 47,
//     membershipLevel: 'Premium'
//   });

//   const [editForm, setEditForm] = useState(userProfile);

//   const handleEdit = () => {
//     setIsEditing(true);
//     setEditForm(userProfile);
//   };

//   const handleSave = () => {
//     setUserProfile(editForm);
//     setIsEditing(false);
//     // Here you would typically make an API call to update the profile
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditForm(userProfile);
//   };

//   const handleInputChange = (field: keyof UserProfile, value: string | string[]) => {
//     setEditForm(prev => ({ ...prev, [field]: value }));
//   };

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

  const {user} = useContext(AuthContext)
  console.log(user)

  return (
    <div className="min-h-screen  ">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
          <div className="relative">
            {/* Cover Background */}
            <div className="h-48 bg-gradient-to-r from-[#bda373] to-[#8a6c42] relative overflow-hidden">
              <div className="absolute inset-0 bg-black/30 bg-opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Profile Picture & Basic Info */}
            <div className="relative px-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-end -mt-20 relative">
                {/* Profile Picture */}
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden  transform group-hover:scale-105 transition-all duration-300">
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 left-25 md:right-2 w-8 h-8 bg-amber-600 hover:bg-amber-700 text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-200"
                    style={{ backgroundColor: '#8a6c42' }}>
                    <CiCamera size={14} />
                  </div>
                </div>

                {/* Name & Actions */}
                <div className="">
                  <div className="">
                    <div>
                      <h1 className="text-3xl font-bold text-[#8a6c42] ml-5 mb-2">{user.displayName}</h1>
                      <div className="flex items-center space-x-4 text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          {/* <Shield size={16} /> */}
                          <span className="text-sm font-medium">{user.membershipLevel}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {/* <Award size={16} /> */}
                          {/* <span className="text-sm">{user.totalSessions} sessions</span> */}
                        </div>
                        <div className="flex items-center space-x-1">
                          {/* <Calendar size={16} /> */}
                          {/* <span className="text-sm">Joined {formatDate(user.joinDate)}</span> */}
                        </div>
                      </div>
                    </div>
                    
                    {/* {!isEditing ? (
                      <button
                        onClick={handleEdit}
                        className="flex items-center space-x-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                        style={{ backgroundColor: '#8a6c42' }}
                      >
                        <Edit3 size={18} />
                        <span className="font-medium">Edit Profile</span>
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSave}
                          className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          <Save size={16} />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={handleCancel}
                          className="flex items-center space-x-2 px-4 py-2 0 hover:bg-gray-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          <X size={16} />
                          <span>Cancel</span>
                        </button>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            {/* <div className=" rounded-xl shadow-lg p-6 transform hover:scale-[1.01] transition-all duration-300">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <CiHeart className="mr-2 text-amber-600" size={20} style={{ color: '#8a6c42' }} />
                About
              </h2>
             
                <textarea
                //   value={editForm.bio}
                //   onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none h-24"
                  placeholder="Tell us about yourself..."
                />
            
                <p className="text-gray-600 leading-relaxed">{user.bio}</p>
              
            </div> */}

            {/* Contact Information */}
            <div className=" rounded-xl shadow-lg p-6 transform hover:scale-[1.01] transition-all duration-300">
              <h2 className="text-2xl font-bold  mb-6">Contact Information</h2>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex flex-col gap-3 p-4  rounded-lg transition-colors duration-200">
                  <div className="flex gap-2">
                  <MdOutlineDriveFileRenameOutline className="text-amber-600 mr-4" size={20} style={{ color: '#8a6c42' }} />
                    <label className="text-xl font-medium ">Name: {user.displayName}</label>
                  </div>
                  <div className="flex gap-2">
                  <CiMail className="text-amber-600 mr-4" size={20} style={{ color: '#8a6c42' }} />
                    <label className="text-xl font-medium ">Email: {user.email}</label>
                  </div>
                </div>

                {/* Phone */}
                {/* <div className="flex items-center p-4  rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <Phone className="text-amber-600 mr-4" size={20} style={{ color: '#8a6c42' }} />
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-500">Phone</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="block w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    ) : (
                      <p className=" font-medium">{userProfile.phone}</p>
                    )}
                  </div>
                </div> */}

                {/* Address */}
                {/* <div className="flex items-start p-4  rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <MapPin className="text-amber-600 mr-4 mt-1" size={20} style={{ color: '#8a6c42' }} />
                  <div className="flex-1">
                    <label className="text-sm font-medium text-gray-500">Address</label>
                    {isEditing ? (
                      <textarea
                        value={editForm.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="block w-full mt-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none h-16"
                      />
                    ) : (
                      <p className=" font-medium">{userProfile.address}</p>
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Stats Card */}
            {/* <div className=" rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Your Journey</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                  <span className="text-gray-600">Total Sessions</span>
                  <span className="text-xl font-bold text-amber-600" style={{ color: '#8a6c42' }}>
                    {userProfile.totalSessions}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <span className="text-gray-600">Member Since</span>
                  <span className="text-sm font-semibold text-green-600">
                    {formatDate(userProfile.joinDate)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <span className="text-gray-600">Membership</span>
                  <span className="text-sm font-semibold text-purple-600 px-2 py-1 bg-purple-100 rounded-full">
                    {userProfile.membershipLevel}
                  </span>
                </div>
              </div>
            </div> */}

            {/* Interests */}
            {/* <div className=" rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Interests</h3>
              {isEditing ? (
                <div className="space-y-2">
                  {editForm.interests.map((interest, index) => (
                    <input
                      key={index}
                      type="text"
                      value={interest}
                      onChange={(e) => {
                        const newInterests = [...editForm.interests];
                        newInterests[index] = e.target.value;
                        handleInputChange('interests', newInterests);
                      }}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {userProfile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-200 cursor-default"
                      style={{ backgroundColor: 'rgba(138, 108, 66, 0.1)', color: '#8a6c42' }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              )}
            </div> */}

            {/* Quick Actions */}
            {/* <div className=" rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full p-3 text-left bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-lg transition-all duration-200 flex items-center space-x-3">
                  <User size={18} className="text-amber-600" style={{ color: '#8a6c42' }} />
                  <span className="text-gray-700 font-medium">Account Settings</span>
                </button>
                <button className="w-full p-3 text-left bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-lg transition-all duration-200 flex items-center space-x-3">
                  <Shield size={18} className="text-green-600" />
                  <span className="text-gray-700 font-medium">Privacy Settings</span>
                </button>
                <button className="w-full p-3 text-left bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-lg transition-all duration-200 flex items-center space-x-3">
                  <Award size={18} className="text-purple-600" />
                  <span className="text-gray-700 font-medium">Achievements</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;