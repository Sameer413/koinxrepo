"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Data for the chart
  const data = {
    labels: ["Crowdsale investors: 80%", "Foundation: 20%"],
    datasets: [
      {
        data: [80, 20], // Percentages
        backgroundColor: ["#007bff", "#ffa500"], // Blue and Orange
        borderWidth: 0, // Removes borders
      },
    ],
  };

  // Options for the chart
  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: true,
        position: "right", // 'right' is a valid position value
        labels: {
          boxWidth: 12,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    cutout: "70%", // Creates the doughnut effect
  };
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
