import React from "react";
import ApplicationCard from "./ApplicationCard";

const ApplicationList = ({ applications }) => {
  if (applications.length === 0) {
    return <p className="text-gray-500 text-center mt-10">No applications found.</p>;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {applications.map((app) => (
        <ApplicationCard key={app.id} application={app} />
      ))}
    </div>
  );
};

export default ApplicationList;
