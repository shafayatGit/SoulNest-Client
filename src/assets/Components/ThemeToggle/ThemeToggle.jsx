import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "./Context";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-base-200 text-base-content 
                 transition-all duration-500 ease-in-out 
                 hover:scale-110 hover:rotate-6 shadow-md"
    >
      <div className="relative w-6 h-6">
        <div
          className={`absolute transition-all duration-500 ease-in-out transform h-4 w-4 md:h-6 md:w-6 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-45 scale-0"
          }`}
        >
          <MdDarkMode  size={30} />
        </div>
        <div
          className={`absolute transition-all duration-500 ease-in-out transform h-5 w-5 md:h-7 md:w-7 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-45 scale-0"
          }`}
        >
           <CiLight size={30} />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
