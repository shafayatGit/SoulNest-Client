import { useContext } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="nuni bg-gradient-to-r from-[#8a6c42] via-[#8a7457] to-[#8f816d] text-white mt-16">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Name */}
        <div>
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://i.ibb.co/bMHW9r5z/Logo.png"
              alt="Logo"
              className="h-12 w-12"
            />
            <span className="tracking-wider libre text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#b9a589]">
              SoulNest
            </span>
          </Link>
          <p className="mt-2 text-lg">
            A safe and halal way to find your life partner. Built with faith,
            love, and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div className="nuni flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#b9a589]">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-[#bda373]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/biodatas" className="hover:text-[#bda373]">
                Biodatas
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/about" className="hover:text-[#bda373]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#bda373]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="hover:text-[#bda373]">
                    DashBoard
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#b9a589]">
            Contact Us
          </h3>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
          <p className="text-sm">📞 +880-1234-567890</p>
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope /> support@soulnest.com
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#b9a589]">
            Follow Us
          </h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-[#bda373]">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#bda373]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#bda373]">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t border-[#845d25] py-4 text-sm">
        © {new Date().getFullYear()} SoulNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
