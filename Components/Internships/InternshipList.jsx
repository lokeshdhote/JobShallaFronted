// src/components/Internships/InternshipList.jsx
import React from "react";
import InternshipCard from "./InternshipCard";

const InternshipList = ({ internships }) => {
  if (internships.length === 0) {
    return <p className="text-gray-500 text-center mt-10">No internships found.</p>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {internships.map((internship) => (
        <InternshipCard key={internship.id} internship={internship} />
      ))}
    </div>
  );
};

export default InternshipList;
