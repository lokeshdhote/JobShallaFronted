import React from "react";

const SearchSection = ({ searchTerm, setSearchTerm, filterType, setFilterType, status, setStatus }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-2xl mb-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <input
        type="text"
        placeholder="Search by job/internship title or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="w-full md:w-1/4 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">All Types</option>
        <option value="Job">Job</option>
        <option value="Internship">Internship</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full md:w-1/4 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default SearchSection;
