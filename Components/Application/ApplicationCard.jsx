import React from "react";

const ApplicationCard = ({ application }) => {
  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-gray-900">{application.title}</h3>
      <p className="text-gray-600">{application.company}</p>
      <div className="flex gap-2 text-sm text-gray-500 mt-2">
        <span className="px-2 py-1 bg-gray-100 rounded-full">{application.type}</span>
        <span className={`px-2 py-1 rounded-full ${statusColors[application.status]}`}>
          {application.status}
        </span>
      </div>
      <p className="text-gray-500 mt-2 text-sm">Applied on: {application.date}</p>
    </div>
  );
};

export default ApplicationCard;
