import React from "react";

import { standardTableData } from "../constants/data.js";

const Table = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">
        Standard Table Design
      </h3>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border border-gray-200">Name</th>
            <th className="p-3 border border-gray-200">Email</th>
            <th className="p-3 border border-gray-200">User Type</th>
            <th className="p-3 border border-gray-200">Joined</th>
            <th className="p-3 border border-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>
          {standardTableData.map((item, index) => (
            <tr key={index}>
              <td className="p-3 border border-gray-200">{item.name}</td>
              <td className="p-3 border border-gray-200">{item.email}</td>
              <td className="p-3 border border-gray-200">{item.userType}</td>
              <td className="p-3 border border-gray-200">{item.joined}</td>
              <td className="p-3 border border-gray-200">
                <div className={ `${item.status === "PENDING" && "bg-purple-500"} ${item.status === "SELECT" && "bg-orange-500"} ${item.status === "APPROVED" && "bg-blue-800"} w-24 flex items-center justify-center  text-center px-8 py-1 text-white font-semibold`}>{item.status}</div>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default Table;
