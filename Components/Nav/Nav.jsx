import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Internships", path: "/internships" },
    { name: "Applications", path: "/applications" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="font-bold text-xl text-blue-600 cursor-pointer hover:scale-105 transition-transform">
  Jobshalla
</NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative group px-2 py-1 rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {link.name}
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <button className="px-4 py-1.5 text-sm rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition transform duration-200">
                Register
              </button>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="px-4 py-1.5 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition transform duration-200"
              >
                Login
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-1.5 text-sm rounded-full bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition transform duration-200"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:scale-110 transition-transform duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 h-16 border-b">
          <span className="font-bold text-lg text-blue-600">Jobshalla</span>
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col px-6 mt-6 space-y-4 font-medium text-gray-700">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 rounded-md transition-all duration-300 ${
                  isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600 hover:scale-105"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Auth in mobile */}
        <div className="px-6 mt-8 flex flex-col gap-3">
          {!isLoggedIn ? (
            <>
              <button className="w-full py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition transform duration-200">
                Register
              </button>
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  setMenuOpen(false);
                }}
                className="w-full py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition transform duration-200"
              >
                Login
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="w-full py-2 rounded-full bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition transform duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
