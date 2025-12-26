import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "./Context";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className="rounded-full text-base-content 
                 transition-all duration-500 ease-in-out 
                 hover:scale-110 hover:rotate-6 shadow-md"
    >
      <div className="relative w-6 h-6">
        <div
          className={`absolute transition-all duration-500 ease-in-out transform  ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-45 scale-0"
          }`}
        >
          <MdDarkMode className="text-[#8a6c42] w-6 h-6"  />
        </div>
        <div
          className={`absolute transition-all duration-500 ease-in-out transform ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-45 scale-0"
          }`}
        >
           <CiLight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
