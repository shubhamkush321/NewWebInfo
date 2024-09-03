import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiFileTextLine,         
  RiNewspaperLine,        
  RiQuestionLine,         
  RiWalletLine,           
  RiArrowDownSLine,       
} from 'react-icons/ri';
import './SideNav.css';

const navItems = [
  { to: '/admin/Pages', icon: <RiFileTextLine />, label: 'Pages' },
  { to: '/admin/blog', icon: <RiNewspaperLine />, label: 'Blog' },
  { to: '/admin/FAQ', icon: <RiQuestionLine />, label: 'FAQ' },
  { to: '/admin/Cards', icon: <RiWalletLine />, label: 'Cards' }, 
];

const SideNav = () => {
  const location = useLocation();
  const [isCardsDropdownOpen, setIsCardsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsCardsDropdownOpen(!isCardsDropdownOpen);
  };

  return (
    <div className="w-60 h-screen fixed bg-gray-900 text-white p-6 shadow-lg">
      <Link to="/admin" className="flex items-center mb-6">
        <div className="content">
          <h2>WebInfomotrix</h2>
          <h2>WebInfomotrix</h2> 
        </div>
      </Link>
      <ul className="space-y-2">
        {navItems.map(({ to, icon, label }) => (
          label === 'Cards' ? (
            <li key={to}>
              <button
                onClick={handleDropdownToggle}
                className={`flex items-center p-2 rounded-lg w-full text-left hover:bg-gray-700 transition-colors ${
                  location.pathname.startsWith('/admin/Cards') ? 'bg-gray-700' : ''
                }`}
              >
                <span className="text-2xl mr-3">{icon}</span>
                <span className="text-lg font-medium flex-1">{label}</span>
                <RiArrowDownSLine className={`text-lg ml-2 transition-transform ${isCardsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCardsDropdownOpen && (
                <ul className="ml-8 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/admin/Cards/Categories"
                      className={`flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors ${
                        location.pathname === '/admin/Cards/Categories' ? 'bg-gray-700' : ''
                      }`}
                    >
                      Categories
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li key={to}>
              <Link
                to={to}
                className={`flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors ${
                  location.pathname === to ? 'bg-gray-700' : ''
                }`}
              >
                <span className="text-2xl mr-3">{icon}</span>
                <span className="text-lg font-medium">{label}</span>
              </Link>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
