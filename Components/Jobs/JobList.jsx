// src/components/Jobs/JobList.jsx
import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  if (jobs.length === 0) {
    return <p className="text-gray-500 text-center mt-10">No jobs found.</p>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
