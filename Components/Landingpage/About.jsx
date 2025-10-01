import React from "react";
import Nav from "../Nav/Nav";

const About = () => {
  return (
    <>
      <Nav />

      <div className="pt-24 max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Jobshalla
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Your one-stop platform to explore jobs, internships, and build your career.
          </p>
        </section>

        {/* Features / How to Use Section */}
        <section className="grid md:grid-cols-3 gap-8 py-10">
          <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Search Jobs</h3>
            <p className="text-gray-500">
              Browse thousands of job listings across industries. Use our search and filter tools to find your perfect role.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Apply Easily</h3>
            <p className="text-gray-500">
              Apply directly to jobs or internships with a few clicks. Track your applications in your dashboard.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Career Growth</h3>
            <p className="text-gray-500">
              Get personalized recommendations, insights, and resources to grow your career and skillset.
            </p>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use Jobshalla</h2>
          <ul className="text-gray-600 text-lg space-y-4 max-w-2xl mx-auto">
            <li>1. Browse or search for jobs and internships using filters.</li>
            <li>2. Click on a job/internship to see details and apply.</li>
            <li>3. Track your applications from your dashboard.</li>
            <li>4. Update your profile to get personalized job recommendations.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to start your career?</h2>
          <p className="text-gray-600 mb-6">Sign up now and explore thousands of opportunities!</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition">
            Get Started
          </button>
        </section>
      </div>
    </>
  );
};

export default About;
