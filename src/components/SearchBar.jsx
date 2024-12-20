import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TbAdjustmentsSearch } from "react-icons/tb";
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div class="flex items-center max-w-sm mx-auto">
      <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
          <TbAdjustmentsSearch />
        </div>
        <input
          type="text"
          id="simple-search"
          class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
          placeholder="Rechercher"
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>
      <button
        onClick={handleSearch}
        class="p-2.5 ms-2 text-sm font-medium text-white bg-gray-400 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <IoSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
