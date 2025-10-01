import React, { useState } from "react";
import Nav from "../Nav/Nav";
import SearchSection from "../Application/SearchSection";
import ApplicationList from "../Application/ApplicationList";

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [status, setStatus] = useState("");

  const applications = [
    { id: 1, title: "Frontend Developer", company: "Google", type: "Job", status: "Pending", date: "2025-10-01" },
    { id: 2, title: "UI/UX Designer", company: "Figma", type: "Internship", status: "Approved", date: "2025-09-25" },
    { id: 3, title: "Marketing Specialist", company: "HubSpot", type: "Job", status: "Rejected", date: "2025-09-20" },
    { id: 4, title: "Financial Analyst", company: "Goldman Sachs", type: "Job", status: "Pending", date: "2025-09-30" },
  ];

  // Filter & search logic
  const filteredApplications = applications.filter(
    (app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType ? app.type === filterType : true) &&
      (status ? app.status === status : true)
  );

  return (
    <>
      <Nav />
      <div className="pt-24 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Your Applications</h1>
        <SearchSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
          status={status}
          setStatus={setStatus}
        />
        <ApplicationList applications={filteredApplications} />
      </div>
    </>
  );
};

export default Applications;
