import React from "react";
import Layout from "../components/Layout";
import Chart from "../components/Chart";

const SamplePage = () => {
  return (
    <Layout>
      <div >
        <Chart className="overflow-x-hidden"/>
      </div>
    </Layout>
  );
};

export default SamplePage;
