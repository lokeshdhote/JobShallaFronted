// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-12 pb-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3 tracking-wide">
            Jobshalla
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Your one-stop platform for jobs, internships, and career growth.  
            Discover opportunities and build your future with Jobshalla.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "Jobs", path: "/jobs" },
              { name: "Internships", path: "/internships" },
              { name: "Applications", path: "/applications" },
              { name: "About", path: "/about" },
              { name: "Blog", path: "/blog" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/support" className="hover:text-white">Support</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-white">Jobshalla</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
