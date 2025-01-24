import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [
      {
        label: 'Sales Over Time',
        data: [12, 19, 3, 5, 2, 3], // Y-axis data
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
        borderColor: 'rgba(54, 162, 235, 1)', // Border color for bars
        borderWidth: 1, // Border width
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start Y-axis from 0
      },
    },
  };

  return (
    <div style={{ width: '70%', margin: '50px auto' }}>
      <h2 className='flex items-center justify-center text-lg'>Bar-Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
