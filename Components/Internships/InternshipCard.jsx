// src/components/Internships/InternshipCard.jsx
import React from "react";

const InternshipCard = ({ internship }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer">
      <h3 className="text-xl font-semibold text-gray-900">{internship.title}</h3>
      <p className="text-gray-600">{internship.company}</p>

      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
        <span className="px-2 py-1 bg-gray-100 rounded-full">{internship.location}</span>
        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">{internship.type}</span>
      </div>

      <span className="inline-block mt-3 px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
        {internship.category}
      </span>

      <button className="mt-4 w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
        Apply Now
      </button>
    </div>
  );
};

export default InternshipCard;
