// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-22 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Welcome to <span className="text-blue-600">Jobshalla</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Your one-stop platform for Jobs, Internships, and Applications.
          Discover opportunities and build your career with Jobshalla.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/jobs"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
          >
            Explore Jobs
          </Link>
          <Link
            to="/internships"
            className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-50"
          >
            Find Internships
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">💼 Jobs</h3>
          <p className="text-gray-600">
            Explore full-time and part-time jobs from top companies tailored to your skills.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">🎓 Internships</h3>
          <p className="text-gray-600">
            Kickstart your career with internships that help you learn and grow.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2">📝 Applications</h3>
          <p className="text-gray-600">
            Track and manage your job and internship applications easily in one place.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to boost your career?
        </h2>
        <p className="text-lg mb-6">
          Join Jobshalla today and start applying to thousands of opportunities.
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
