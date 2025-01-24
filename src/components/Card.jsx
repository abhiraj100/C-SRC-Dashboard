import React from "react";

const Card = ({ title, value, change, Icon, bg }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md relative overflow-hidden`}>
      {/* Circles */}
      <div className="absolute top-2 right-[-40px] w-35 h-35 bg-white opacity-20 rounded-full"></div>
      <div className="absolute top-24 right-[-10px] w-35 h-35 bg-white opacity-20 rounded-full"></div>

      {/* Card Content */}
      <div className="flex flex-col ">
        {Icon && <Icon className="text-white p-2 rounded-full w-10 h-10 mb-1" />}
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <p className="text-2xl  font-bold text-white mt-1">{value}</p>
        <span className="text-lg font-semibold text-white mt-4">Increased by {change}</span>
      </div>
    </div>
  );
};

export default Card;
