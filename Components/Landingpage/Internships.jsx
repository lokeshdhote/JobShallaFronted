// src/components/Internship.jsx
import React, { useState } from "react";
import Nav from "../Nav/Nav";
import SearchSection from "../Internships/SearchSection";
import InternshipList from "../Internships/InternshipList";

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const internships = [
    { id: 1, title: "Frontend Intern", company: "Google", location: "Remote", type: "Internship", category: "tech" },
    { id: 2, title: "UI/UX Intern", company: "Figma", location: "San Francisco", type: "Internship", category: "design" },
    { id: 3, title: "Marketing Intern", company: "HubSpot", location: "New York", type: "Internship", category: "marketing" },
    { id: 4, title: "Finance Intern", company: "Goldman Sachs", location: "Mumbai", type: "Internship", category: "finance" },
  ];

  const filteredInternships = internships.filter(
    (internship) =>
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter ? internship.category === filter : true)
  );

  return (
    <>
      <Nav />
      <div className="pt-24 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Explore Internships</h1>
        <SearchSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
        />
        <InternshipList internships={filteredInternships} />
      </div>
    </>
  );
};

export default Internships;
