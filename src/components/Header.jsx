import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header bg-transparent border-t-2 border-white border-b-2 p-4 ">
      <div className="flex justify-center items-center">
        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-black">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`flex-col lg:flex-row lg:space-x-10 lg:flex absolute lg:static bg-white lg:bg-transparent lg:text-white text-black w-full lg:w-auto left-0 top-16 lg:top-auto p-4 lg:p-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li
            onClick={() => {
              setActiveSection("about");
              setIsOpen(false);
            }}
            className="hover:text-purple-600 cursor-pointer text-lg font-semibold hover:border-b-2 border-purple-700 hover:translate-y-0.5 duration-300 text-center py-2 lg:py-0"
          >
            About
          </li>
          <li
            onClick={() => {
              setActiveSection("skills");
              setIsOpen(false);
            }}
            className="hover:text-purple-600 cursor-pointer text-lg font-semibold hover:border-b-2 border-purple-700 hover:translate-y-0.5 duration-300 text-center py-2 lg:py-0"
          >
            Skills
          </li>
          <li
            onClick={() => {
              setActiveSection("projects");
              setIsOpen(false);
            }}
            className="hover:text-purple-600 cursor-pointer text-lg font-semibold hover:border-b-2 border-purple-700 hover:translate-y-0.5 duration-300 text-center py-2 lg:py-0"
          >
            Projects
          </li>
          <li
            onClick={() => {
              setActiveSection("contact");
              setIsOpen(false);
            }}
            className="hover:text-purple-600 cursor-pointer text-lg font-semibold hover:border-b-2 border-purple-700 hover:translate-y-0.5 duration-300 text-center py-2 lg:py-0"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
