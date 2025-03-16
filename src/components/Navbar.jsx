import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaStore,
  FaQuestionCircle,
  FaEnvelope,
  FaUser,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  const [city, setCity] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    // Disable scrolling when sidebar is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">myMART</div>

        {/* Search Section for Desktop */}
        <div className="hidden md:flex items-center bg-white rounded-lg overflow-hidden">
          <select
            className="p-2 border-r text-black"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <input
            type="text"
            placeholder="Search for products..."
            className="p-2 text-black w-64 focus:outline-none"
          />
          <button className="bg-orange-500 font-medium px-4 py-2">
            Search
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-6 text-xl">
          <FaShoppingCart className="cursor-pointer" />
          <FaStore className="cursor-pointer" />
          <FaQuestionCircle className="cursor-pointer" />
          <FaEnvelope className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
        </div>

        {/* Mobile View: Search & Menu Icon */}
        <div className="flex md:hidden space-x-4">
          <FaSearch
            className="text-2xl cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)}
          />
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Search Bar for Mobile */}
      {searchOpen && (
        <div className="bg-white p-2 flex items-center justify-center shadow-md">
          <select
            className="p-2 border-r text-black"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 text-black flex-grow focus:outline-none"
          />
          <button className="bg-orange-500 text-white font-medium px-4 py-2">
            Go
          </button>
        </div>
      )}

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-blue-700 text-white p-5 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden shadow-lg z-50`}
      >
        {/* Close Button on Right */}
        <div className="flex justify-end">
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-6 text-lg mt-4">
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaShoppingCart /> <span>Shopping</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaStore /> <span>Sell</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaQuestionCircle /> <span>Help</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaEnvelope /> <span>Messages</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaUser /> <span>Account</span>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
