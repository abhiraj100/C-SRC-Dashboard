import React from "react";
import { navlinks } from "../constants/data.js";
import { Link, useLocation } from "react-router-dom";
import ProfileImage from "../assets/profile.jpg";

const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="w-64 min-h-screen bg-white text-black flex flex-col ">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl font-bold text-sky-500 p-4">blueBox</h2>
      </div>
      <div className="flex py-4 px-6">
        <img
          src={ProfileImage}
          alt=""
          className="h-10 w-10 rounded-full mt-1 mr-2 "
        />
        <div className="flex flex-col">
          <p className="font-semibold text-lg">Angellina Doe</p>
          <p className=" text-sm text-gray-400 -mt-1">Project Manager</p>
        </div>
      </div>
      <div>
        <ul className="flex flex-col space-y-1 px-4 mt-4">
          {navlinks &&
            navlinks.map(({ id, url, title, icons: Icon }) => (
              <Link
                key={id}
                to={url}
                className={` ${
                  pathname === url ? "text-sky-500" : "text-black"
                } hover:text-sky-500 p-2 rounded-md cursor-pointer flex justify-between items-center`}
              >
                {title}
                <Icon className="hover:text-sky-500" />
              </Link>
            ))}
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <button className="px-10 w-52  flex items-center justify-center h-10 hover:bg-sky-500 bg-sky-300 text-white font-semibold">
          Add Project
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
