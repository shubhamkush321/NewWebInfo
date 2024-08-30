import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBell, FaEnvelope, FaUserCircle, FaChevronDown } from 'react-icons/fa';

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);

  const isAdminPage = location.pathname.startsWith('/admin');

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMessageDropdown = () => {
    setIsMessageDropdownOpen(!isMessageDropdownOpen);
    setIsNotificationDropdownOpen(false);
  };
  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsMessageDropdownOpen(false);
  };

  const onLogoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="max-w-6xl ml-60 bg-blue-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">
          {location.pathname === '/admin' ? 'DASHBOARD' : 'DASHBOARD / PAGES'}
        </h2>
        {isAdminPage && (
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleMessageDropdown}
                className="flex items-center text-white hover:text-gray-300"
              >
                <FaEnvelope className="text-2xl" />
              </button>
              {isMessageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Messages</h3>
                    <div className="space-y-2">
                      <div className="p-2 border-b border-gray-200">Message 1</div>
                      <div className="p-2 border-b border-gray-200">Message 2</div>
                      <div className="p-2 border-b border-gray-200">Message 3</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleNotificationDropdown}
                className="flex items-center text-white hover:text-gray-300"
              >
                <FaBell className="text-2xl" />
              </button>
              {isNotificationDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Notifications</h3>
                    <div className="space-y-2">
                      <div className="p-2 border-b border-gray-200">Notification 1</div>
                      <div className="p-2 border-b border-gray-200">Notification 2</div>
                      <div className="p-2 border-b border-gray-200">Notification 3</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white hover:text-gray-300"
              >
                <FaUserCircle className="text-2xl mr-2" />
                Admin <FaChevronDown className="ml-2" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-lg z-50">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button>
                  <button onClick={onLogoutHandler} className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
