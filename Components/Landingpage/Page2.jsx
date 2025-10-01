// src/pages/Page2.jsx
import React from "react";

const Page2 = () => {
  // Updated company data with working logo links
  const companies = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "Explore exciting internships and job opportunities at Google.",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      description: "Work on innovative technologies and grow your career at Microsoft.",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      description: "Build scalable solutions and gain hands-on experience at Amazon.",
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Infosys_logo.svg",
      description: "Kickstart your IT career with global opportunities at Infosys.",
    },
    {
      name: "TCS",
      logo: "https://companieslogo.com/img/orig/TCS.NS_BIG.D-4a7e53c2.png",
      description: "Work on impactful projects and internships at Tata Consultancy Services.",
    },
    {
      name: "Wipro",
      logo: "https://companieslogo.com/img/orig/WIPRO.NS_BIG.D-20f1a61c.png",
      description: "Join Wipro to innovate in IT and consulting services worldwide.",
    },
    {
      name: "Accenture",
      logo: "https://companieslogo.com/img/orig/ACN_BIG-016f1c41.png",
      description: "Shape the future of business and technology at Accenture.",
    },
    {
      name: "IBM",
      logo: "https://companieslogo.com/img/orig/IBM_BIG-1a5f8e3f.png",
      description: "Gain hands-on experience in AI, cloud, and enterprise solutions at IBM.",
    },
    {
      name: "Capgemini",
      logo: "https://companieslogo.com/img/orig/CAP.PA_BIG-75e7c57b.png",
      description: "Work on global projects in consulting, digital, and technology services.",
    },
  ];

  return (
    <div className="w-full py-16 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        🌟 Top Companies for Internships & Jobs
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow rounded-lg flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {company.name}
            </h3>
            <p className="text-gray-600">{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
