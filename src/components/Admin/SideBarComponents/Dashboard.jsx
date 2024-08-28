import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// Data for Line Chart
const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [{
    label: 'Sales',
    data: [30, 20, 50, 40, 60, 70, 90],
    borderColor: '#4A90E2',
    backgroundColor: 'rgba(74, 144, 226, 0.2)',
    borderWidth: 2,
    tension: 0.1,
  }],
};

// Options for Line Chart
const lineOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    tooltip: {
      callbacks: {
        label: ({ dataset, raw }) => `${dataset.label}: ${raw}`,
      },
    },
  },
};

// Data for Bar Chart
const barData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Expenses',
    data: [5000, 4000, 6000, 7000],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: '#FF6384',
    borderWidth: 2,
  }],
};

// Options for Bar Chart
const barOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    tooltip: {
      callbacks: {
        label: ({ dataset, raw }) => `${dataset.label}: ${raw}`,
      },
    },
  },
};

const Dashboard = () => (
  <div className="flex flex-col mr-4 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 ml-20">
      {/* Dashboard Cards */}
      <div className="bg-white shadow-md shadow-blue-600 rounded-lg p-5 flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
        <p className="text-2xl font-bold text-gray-700">$45,000</p>
      </div>
      <div className="bg-white shadow-md shadow-blue-600 rounded-lg p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">New Orders</h3>
        <p className="text-2xl font-bold text-gray-700">120</p>
      </div>
      <div className="bg-white shadow-md shadow-blue-600 rounded-lg p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">Revenue</h3>
        <p className="text-2xl font-bold text-gray-700">$12,000</p>
      </div>
    </div>
    {/* Charts */}
    <div className="flex gap-4 p-12  ml-8 -mt-16">
      <div className="bg-white shadow-md rounded-lg p-4 flex-1">
        <h3 className="text-lg font-semibold mb-2">Sales Overview</h3>
        <div className="h-64">
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 flex-1">
        <h3 className="text-lg font-semibold mb-2">Expenses Overview</h3>
        <div className="h-64">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
