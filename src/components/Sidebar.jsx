import React from "react";
import { navlinks } from "../constants/data.js";
import { Link, useLocation } from "react-router-dom";
import ProfileImage from "../assets/profile.jpg";

const Sidebar = () => {
  const { pathname } = useLocation();
  
  return (
    <div className="w-64 min-h-screen bg-white text-black flex flex-col border-r border-gray-200 fixed left-0 top-0">
      {/* Logo Section */}
      <div className="flex justify-center items-center p-4">
        <h2 className="text-2xl font-bold text-sky-500">blueBox</h2>
      </div>

      {/* Profile Section */}
      <div className="flex py-4 px-6 items-center">
        <img
          src={ProfileImage}
          alt="Profile"
          className="h-10 w-10 rounded-full mt-1 mr-2"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-lg">Angellina Doe</p>
          <p className="text-sm text-gray-400 -mt-1">Project Manager</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex flex-col space-y-2 px-4 mt-4">
          {navlinks &&
            navlinks.map(({ id, url, title, icons: Icon }) => (
              <Link
                key={id}
                to={url}
                className={`${
                  pathname === url ? "text-sky-500" : "text-black"
                } hover:text-sky-500 p-2 rounded-md cursor-pointer flex justify-between items-center`}
              >
                {title}
                <Icon className="hover:text-sky-500" />
              </Link>
            ))}
        </ul>
      </div>

      {/* Add Project Button */}
      <div className="flex items-center justify-center mt-auto mb-6">
        <button className="px-10 w-52 h-10 bg-sky-300 text-white font-semibold rounded-lg hover:bg-sky-500 transition">
          Add Project
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
