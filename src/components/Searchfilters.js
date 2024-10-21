// src/components/SearchFilters.js
import React from 'react';
import { AiOutlineSearch, AiOutlineUnorderedList, AiOutlineAppstore } from 'react-icons/ai';

const SearchFilters = ({ showAsList, setShowAsList, searchTerm, setSearchTerm }) => {
  return (
    <div className="p-4 bg-white shadow">
      <div className="flex justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label className="text-md font-lg mb-1 font-bold">Class</label>
            <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Classes</option>
              <option>Algebra, Block A</option>
              <option>Algebra, Block B</option>
              <option>Algebra, Block C</option>
              <option>Algebra, Block D</option>
              <option>Algebra, Block E</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-md font-lg mb-1 font-bold">Status</label>
            <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All statuses</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-md font-lg mb-1 font-bold">Search Lessons</label>
            <div className="relative flex items-center">
              <input
                type="text"
                className="border rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
              />
              <span className="absolute right-3 text-gray-500">
                <AiOutlineSearch className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>

        {/* Sort by Date and Show as List */}
        <div className="flex gap-4 items-end">
          <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#7B7EDA] font-bold">
            <option value="">Sort by Date: Closest</option>
            <option value="">Sort by Date: Furthest</option>
            <option value="">Sort by Lesson: A-Z</option>
            <option value="">Sort by Lesson: Z-A</option>
          </select>
          <button
            className="border rounded-lg px-4 py-2 bg-gray-100 hover:bg-gray-200 flex items-center gap-2 text-[#7B7EDA] font-bold"
            onClick={() => setShowAsList(!showAsList)}
          >
            {showAsList ? (
              <>
                <AiOutlineAppstore className="h-5 w-5" />
                Show as Cards
              </>
            ) : (
              <>
                <AiOutlineUnorderedList className="h-5 w-5" />
                Show as List
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
