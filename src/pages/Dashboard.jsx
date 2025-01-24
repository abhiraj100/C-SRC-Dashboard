import React from "react";
import Table from "../components/Table";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { IoIosSpeedometer } from "react-icons/io";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { IoFlag } from "react-icons/io5";

const Dashboard = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="p-2 flex flex-row items-center space-x-2 pb-4">
        <div className="bg-sky-500 rounded-sm p-1">
          <IoIosSpeedometer className="text-white w-6 h-6" />
        </div>
        <p className="text-black font-semibold text-lg">Dashboard</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card bg="bg-gradient-to-r from-purple-400 to-purple-600" title="Stock Total" value="$150000" change="60%" Icon={FaMoneyBillTrendUp} />
        <Card bg="bg-gradient-to-r from-blue-400 to-blue-600" title="Total Profit" value="$25000" change="30%" Icon={FaDatabase} />
        <Card bg="bg-gradient-to-r from-orange-400 to-orange-600" title="Unique Visitors" value="250000" change="80%" Icon={IoFlag} />
      </div>

      {/* Table */}
      <Table />
    </Layout>
  );
};

export default Dashboard;
