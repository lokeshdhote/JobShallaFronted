// Job.jsx
import React, { useState } from "react";
import SearchSection from "../Jobs/SearchSection";
import JobList from "../Jobs/JobList";
import Nav from "../Nav/Nav";

const Job = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google", location: "Remote", type: "Full-time", category: "tech" },
    { id: 2, title: "UI/UX Designer", company: "Figma", location: "San Francisco", type: "Internship", category: "design" },
    { id: 3, title: "Marketing Specialist", company: "HubSpot", location: "New York", type: "Part-time", category: "marketing" },
    { id: 4, title: "Financial Analyst", company: "Goldman Sachs", location: "Mumbai", type: "Full-time", category: "finance" },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter ? job.category === filter : true)
  );

  return (
    <>
      <Nav />
      {/* Add padding to avoid content being hidden behind fixed nav */}
      <div className="pt-24 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Explore Jobs</h1>
        <SearchSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
        />
        <JobList jobs={filteredJobs} />
      </div>
    </>
  );
};

export default Job;
