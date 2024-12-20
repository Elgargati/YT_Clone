import React from "react";
import { FaYoutube } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import SearchBar from "./SearchBar";
const Header = ({ onSearch }) => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <FaYoutube className="text-red-500" size={40} />
        <a href="/">
          <h1 className="text-xl font-bold text-gray-800">Youtube clone</h1>
        </a>
      </div>

      <div className="flex-grow max-w-2xl mx-4">
        <SearchBar onSearch={onSearch} />
      </div>

      <div className="flex items-center space-x-6">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <IoMdNotificationsOutline size={32} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <CgProfile size={30} />
        </button>
      </div>
    </header>
  );
};

export default Header;
