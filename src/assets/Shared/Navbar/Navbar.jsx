// Navbar.jsx
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import Aos from "aos";
import ThemeToggle from "../../Components/ThemeToggle/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  //NavLinks
  const navLinks = [
  { id: "1", title: "Home", links: "/" },
  { id: "2", title: "BioData", links: "/allBiodata" },
  { id: "3", title: "About", links: "/about" },
  { id: "4", title: "Contact", links: "/contactMe" },
  user && { id: "5", title: "Dashboard", links: "/dashboard" },
].filter(Boolean);

  //Logout Button
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  //toggle nav for mobile device
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 shadow-md backdrop-blur-md transition-all duration-300 transform w-full z-[1000]">
      <div className=" px-4 py-3 flex justify-between items-center">
        {/* Logo and Website Name */}
        <div className="flex gap-4 items-center">
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
          <ThemeToggle></ThemeToggle>
        </div>

        {/* Desktop Menu */}
        <div className="nuni text-[#8a6c42] hidden font-medium tracking-wider md:flex md:text-sm lg:text-lg space-x-6">
          {navLinks.map((nav, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-[#8a6c42] text-[#8a6c42]"
                  : " hover:border-b-2 "
              }
              to={nav.links}
              onClick={() => window.scrollTo(0, 0)}
            >
              {nav.title}
            </NavLink>
          ))}
        </div>

        <div className="hidden text-[#8a6c42] nuni md:block">
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
            {isOpen ? (
              <FaTimes className="h-4 w-4 " />
            ) : (
              <FaBars className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#8a6c42] to-[#453315] shadow-md px-6 py-4 space-y-6 absolute flex flex-col text-right text-sm w-64 items-end h-dvh right-0 z-[1000]">
          {navLinks.map((nav) => (
            <NavLink
              key={nav.id}
              className={({ isActive }) =>
                isActive ? "border-r-4 border-black pr-4 " : "text-white"
              }
              to={nav.links}
            >
              {nav.title}
            </NavLink>
          ))}

          <div>
            {user ? (
              <>
                <NavLink onClick={handleLogOut} className="">
                  <button>LogOut</button>
                </NavLink>
              </>
            ) : (
              <div className="flex text-[#8a6c42] flex-col gap-5">
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
