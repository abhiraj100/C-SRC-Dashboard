import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div className="flex  min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-2">
        <Header />
        <div className="p-8 ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
