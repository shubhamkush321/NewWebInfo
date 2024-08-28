import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBell, FaEnvelope, FaUserCircle, FaChevronDown } from 'react-icons/fa';

const TopNav = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);

  // Check if current route is /admin
  const isAdminPage = location.pathname === '/admin';

  // Toggle admin dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Toggle message dropdown
  const toggleMessageDropdown = () => {
    setIsMessageDropdownOpen(!isMessageDropdownOpen);
    setIsNotificationDropdownOpen(false); // Close notification dropdown if open
  };

  // Toggle notification dropdown
  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsMessageDropdownOpen(false); 
  };

  return (
    <div className="w-screen bg-blue-900 p-4">
      <div className="flex justify-between items-center">
        <div className='flex ml-60'>
        <h2 className="text-xl font-bold text-white ">DASHBOARD / PAGES</h2>
        </div>
        {isAdminPage ? (
          <div className="flex items-center space-x-4">
            {/* Message Icon and Dropdown */}
            <div className="relative">
              <button
                onClick={toggleMessageDropdown}
                className="flex items-center bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
              >
                <FaEnvelope className="text-xl mr-2" />
              </button>

              {isMessageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-lg">
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Messages</h3>
                    <div className="space-y-2">
                      <div className="p-2 border-b border-gray-200">Message 1</div>
                      <div className="p-2 border-b border-gray-200">Message 2</div>
                      <div className="p-2 border-b border-gray-200">Message 3</div>
                      {/* Add more messages as needed */}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Notification Icon and Dropdown */}
            <div className="relative">
              <button
                onClick={toggleNotificationDropdown}
                className="flex items-center bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
              >
                <FaBell className="text-xl mr-2" />
              </button>

              {isNotificationDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-lg">
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Notifications</h3>
                    <div className="space-y-2">
                      <div className="p-2 border-b border-gray-200">Notification 1</div>
                      <div className="p-2 border-b border-gray-200">Notification 2</div>
                      <div className="p-2 border-b border-gray-200">Notification 3</div>
                      {/* Add more notifications as needed */}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Admin Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
              >
                <FaUserCircle className="text-xl mr-2" />
                Admin <FaChevronDown className="ml-2" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-lg">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex space-x-4">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
              + Create
            </button>
            <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-200">
              Reload
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
