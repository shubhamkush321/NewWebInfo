// src/components/Admin/SideBarComponents/Dashboard.jsx
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
        label: ({ dataset, raw }) => `${dataset.label}: $${raw.toLocaleString()}`,
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
        label: ({ dataset, raw }) => `${dataset.label}: $${raw.toLocaleString()}`,
      },
    },
  },
};

const Dashboard = () => {
  return (
    <div className="relative flex flex-col flex-1 p-6 bg-gray-100 min-h-screen">
      

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 relative z-10">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Pages</h3>
          <p className="text-3xl font-bold text-gray-600">45</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Users</h3>
          <p className="text-3xl font-bold text-gray-600">1</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Blogs & Posts</h3>
          <p className="text-3xl font-bold text-gray-600">60</p>
        </div>
      </div>
      {/* Charts */}
      <div className="flex flex-col lg:flex-row gap-6 relative z-10">
        <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h3>
          <div className="h-64">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Expenses Overview</h3>
          <div className="h-64">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
