import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [300, 400, 200, 500, 700, 800],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true, // Ensures the chart resizes based on the container
    maintainAspectRatio: false, // Ensures the aspect ratio is not maintained (if you want to make it responsive)
    scales: {
      x: {
        ticks: {
          autoSkip: true, // Automatically skip labels if they are too long
          maxRotation: 0, // Prevent rotation of labels
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 overflow-hidden rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Sales Overview</h3>
      <div style={{ position: "relative", height: "300px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
