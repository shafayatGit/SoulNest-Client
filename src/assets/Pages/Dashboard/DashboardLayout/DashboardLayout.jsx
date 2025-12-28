import { useContext, useState } from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import {
  FaAddressBook,
  FaBars,
  FaCrown,
  FaEye,
  FaHeart,
  FaSignOutAlt,
  FaTimes,
  FaUserEdit,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../../../AuthContext/AuthContext";
import useUserRole from "../../../hooks/useUserRole";

const DashboardLayout = () => {
  const { role, roleLoading } = useUserRole();
  // console.log(role);

  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const adminLinks = [
    {
      icon: <FaUserEdit />,
      title: "Profile Page",
      href: "profile",
    },
    {
      icon: <FaUserEdit />,
      title: "Admin Dashboard",
      href: "adminDashboard",
    },
    {
      icon: <FaUserEdit />,
      title: "Make Admin",
      href: "makeAdmin",
    },
    {
      icon: <FaCrown />,
      title: "Approved Premium Request",
      href: "approvedPremium",
    },
    {
      icon: <HiOutlineUserAdd />,
      title: "Approved Contact Requests",
      href: "approvedContactRequest",
    },
  ];

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div
        className={`fixed lg:relative z-50 pt-10 lg:z-0 top-0 left-0 h-full w-64 bg-gradient-to-b from-[#8a6c42] to-[#453315] shadow-md transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <Link to="/" className="md:flex hidden ml-3 items-center space-x-2">
          <img
            src="https://i.ibb.co/bMHW9r5z/Logo.png"
            alt="Logo"
            className="h-12 w-12"
          />
          <span className="tracking-wider libre text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#9f8662]">
            SoulNest
          </span>
        </Link>
        <nav className="flex pl-5 pt-5 flex-col gap-4">
          {!roleLoading && role === "user" && (
            <>
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:underline"
                }
              >
                <FaUserEdit className="inline mr-2" /> Profile Page
              </NavLink>
              <NavLink
                to="editBiodata"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:underline"
                }
              >
                <FaUserEdit className="inline mr-2" /> Edit Biodata
              </NavLink>
              <NavLink
                to="viewBiodata"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:underline"
                }
              >
                <FaEye className="inline mr-2" /> View Biodata
              </NavLink>
              <NavLink
                to="myContactRequest"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:underline"
                }
              >
                <FaAddressBook className="inline mr-2" /> My Contact Request
              </NavLink>
              <NavLink
                to="favourites"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:underline"
                }
              >
                <FaHeart className="inline mr-2" /> Favourites
              </NavLink>
            </>
          )}

          {/* Admin Links */}

          {!roleLoading &&
            role === "admin" &&
            adminLinks.map((nav) => (
              <>
                <NavLink
                  to="profile"
                  className={({ isActive }) =>
                    isActive ? "underline flex gap-2 items-center" : "hover:underline flex gap-2 items-center"
                  }
                >
                  {nav.icon} {nav.title}
                </NavLink>
              </>
            ))}
        </nav>
        <button
          onClick={handleLogOut}
          className="mt-4 text-red-300 hover:text-white flex items-center"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>

      {/* Overlay (Mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-40 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white p-4 shadow-md flex justify-between lg:hidden">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://i.ibb.co/bMHW9r5z/Logo.png"
              alt="Logo"
              className="md:h-12 md:w-12 w-8 h-8"
            />
            <span className="tracking-wider libre text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
              SoulNest
            </span>
          </Link>
          <button onClick={toggleSidebar} className="text-2xl">
            {isSidebarOpen ? (
              <FaTimes className="h-4 w-4" />
            ) : (
              <FaBars className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Main Content */}
        <div className="p-4 overflow-y-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
