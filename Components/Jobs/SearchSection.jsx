// src/components/jobs/SearchSection.jsx
import React from "react";

const SearchSection = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-2xl mb-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full md:w-1/4 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">All Categories</option>
        <option value="tech">Tech</option>
        <option value="design">Design</option>
        <option value="marketing">Marketing</option>
        <option value="finance">Finance</option>
      </select>
    </div>
  );
};

export default SearchSection;
