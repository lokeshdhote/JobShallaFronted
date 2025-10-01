// src/pages/Page3.jsx
import React from "react";

const Page3 = () => {
  // Sample blog posts – you can fetch these from backend later
  const blogs = [
    {
      title: "How to Prepare for Your First Internship",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80",
      description:
        "Internships are the first step in your career. Learn how to prepare, what to expect, and how to make the most of your experience.",
      link: "/blog/internship-prep",
    },
    {
      title: "Top 10 Interview Tips for Freshers",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description:
        "Cracking your first interview can be tough. Here are 10 tips to help you stand out and impress recruiters.",
      link: "/blog/interview-tips",
    },
    {
      title: "Balancing College and Job Hunting",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      description:
        "Looking for a job while studying? Discover strategies to balance academics and career building effectively.",
      link: "/blog/college-job-hunt",
    },
  ];

  return (
    <div className="w-full py-16 px-6 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        📝 Our Latest Blogs
      </h2>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition flex flex-col"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />

            {/* Blog Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 flex-grow">{blog.description}</p>
              <a
                href={blog.link}
                className="mt-4 inline-block text-blue-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
