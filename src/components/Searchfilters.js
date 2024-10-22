// src/components/SearchFilters.js
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineUnorderedList,
  AiOutlineAppstore,
} from "react-icons/ai";

const SearchFilters = ({
  showAsList,
  setShowAsList,
  searchTerm,
  setSearchTerm,
  selectedClass,
  setSelectedClass,
  selectedStatus,
  setSelectedStatus,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="p-4 bg-white shadow">
      <div className="flex justify-between gap-4">
        <div className="flex gap-4">
          {/* Class Filter */}
          <div className="flex flex-col">
            <label className="text-md font-lg mb-1 font-bold">Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Classes</option>
              <option value="Algebra I, Block A">Algebra I, Block A</option>
              <option value="Algebra I, Block B">Algebra I, Block B</option>
              <option value="Algebra I, Block C">Algebra I, Block C</option>
              <option value="Algebra I, Block D">Algebra I, Block D</option>
              <option value="Algebra I, Block E">Algebra I, Block E</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex flex-col">
            <label className="text-md font-lg mb-1 font-bold">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All statuses</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {/* Search Lessons */}
          <div className="flex flex-col">
            <label className="text-md font-lg mb-1 font-bold">
              Search Lessons
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                className="border rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute right-3 text-gray-500">
                <AiOutlineSearch className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>

        {/* Sort by Date and Show as List */}
        <div className="flex gap-4 items-end">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#7B7EDA] font-bold"
          >
            <option value="closest">Sort by Date: Closest</option>
            <option value="furthest">Sort by Date: Furthest</option>
            <option value="a-z">Sort by Lesson: A-Z</option>
            <option value="z-a">Sort by Lesson: Z-A</option>
          </select>

          {/* Toggle View (Show as List or Grid) */}
          <button
            className={`flex items-center p-2 rounded ${
              showAsList
                ? "bg-white text-[#5457C9] font-bold border"
                : "bg-white text-[#5457C9] font-bold border"
            }`}
            onClick={() => setShowAsList(!showAsList)}
          >
            {showAsList ? (
              <>
                <AiOutlineAppstore className="h-5 w-5 mr-2" />
                Show as Cards
              </>
            ) : (
              <>
                <AiOutlineUnorderedList className="h-5 w-5 mr-2" />
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
