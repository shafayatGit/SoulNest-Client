// Navbar.jsx
import { useContext, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import Aos from "aos";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    Aos.init({
      duration: 900, // animation duration
      once: false, // only once per element
      offset: 200, // offset (in px) from the original trigger point
    });
  }, []);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" shadow-md w-full z-[1000]">
      <div className=" px-4 py-3 flex justify-between items-center">
        {/* Logo and Website Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/bMHW9r5z/Logo.png"
            alt="Logo"
            className="h-12 w-12"
          />
          <span className="tracking-wider libre text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
            SoulNest
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="nuni hidden font-medium tracking-wider md:flex text-lg space-x-6">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                : " hover:border-b-2 hover:border-b-[#8a6c42] hover:text-[#8a6c42]"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                : " hover:border-b-2 hover:border-b-[#8a6c42] hover:text-[#8a6c42]"
            }
            to="/allBiodata"
          >
            Biodata
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                : "hover:border-b-2 hover:border-b-[#8a6c42] hover:text-[#8a6c42]"
            }
            to="/aboutUs"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                : "hover:border-b-2 hover:border-b-[#8a6c42] hover:text-[#8a6c42]"
            }
            to="/contactUs"
          >
            Contact Us
          </NavLink>
          {user && (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                    : " hover:border-b-2 hover:border-b-[#8a6c42] hover:text-[#8a6c42]"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </>
          )}
        </div>

        <div className="hidden nuni md:block">
          {user ? (
            <>
              <NavLink onClick={handleLogOut} className="">
                <button>LogOut</button>
              </NavLink>
            </>
          ) : (
            <div className="flex gap-5">
              <NavLink
                className={({ isActive }) => (isActive ? "" : "")}
                to="/login"
              >
                <button>Login</button>
              </NavLink>
              <NavLink className="" to="/register">
                <button>Register</button>
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          data-aos="fade-down"
          className="md:hidden bg-black/30 bg-opacity-40  shadow-md px-6 py-4 space-y-8 absolute flex flex-col text-center w-full z-[1000]"
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                : " hover:border-b-2 hover:border-b-[#8a6c42] hover:text-[#8a6c42] text-white"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                : " hover:border-b-2 hover:border-b-[#8a6c42] hover:text-[#8a6c42] text-white"
            }
            to="/allBiodata"
          >
            Biodata
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                : "hover:border-b-2 hover:border-b-[#8a6c42] hover:text-[#8a6c42] text-white"
            }
            to="/aboutUs"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                : "hover:border-b-2 hover:border-b-[#8a6c42] hover:text-[#8a6c42] text-white"
            }
            to="/contactUs"
          >
            Contact Us
          </NavLink>
          {user && (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                    : " hover:border-b-2 hover:border-b-[#8a6c42] hover:text-[#8a6c42] text-white"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </>
          )}

          <div>
            {user ? (
              <>
                <NavLink onClick={handleLogOut} className="">
                  <button>LogOut</button>
                </NavLink>
              </>
            ) : (
              <div className="flex flex-col gap-5">
                <NavLink
                  className={({ isActive }) => (isActive ? "" : "")}
                  to="/login"
                >
                  <button>Login</button>
                </NavLink>
                <NavLink className="" to="/register">
                  <button>Register</button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
