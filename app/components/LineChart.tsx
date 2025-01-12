'use client'
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Chart data
  const data = {
    labels: [
      "16 Dec",
      "17 Dec",
      "18 Dec",
      "19 Dec",
      "20 Dec",
      "21 Dec",
      "22 Dec",
    ],
    datasets: [
      {
        label: "Bitcoin Price",
        data: [42000, 44000, 47000, 45000, 43000, 46000, 44000], // Example data
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        tension: 0.4, // Smooth curve
        pointBorderColor: "#007bff",
        pointBackgroundColor: "#ffffff",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend if needed
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical gridlines
        },
      },
      y: {
        beginAtZero: false, // Set `true` to always start at zero
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // Light gridlines
        },
      },
    },
  };

  return (
    <div className="lg:w-[600px] w-[300px] mx-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
