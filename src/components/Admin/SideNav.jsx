import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiFileTextLine,
  RiUserLine,
  RiMailLine,
  RiNewspaperLine,
  RiNewspaperFill,
} from 'react-icons/ri';
import './SideNav.css';

const navItems = [
  { to: '/admin/Pages', icon: <RiFileTextLine />, label: 'Pages' },
  { to: '/admin/blog', icon: <RiNewspaperFill />, label: 'Blog' },
  { to: '/admin/DigitalCards', icon: <RiUserLine />, label: 'DigitalCards' },
  { to: '/admin/Testimonials', icon: <RiUserLine />, label: 'Testimonials' },
  { to: '/admin/FAQ', icon: <RiNewspaperLine />, label: 'FAQ' },
  { to: '/admin/Cards', icon: <RiMailLine />, label: 'Cards' },
];

const SideNav = () => {
  const location = useLocation();

  return (
    <div className="w-60 h-screen fixed bg-gray-900 text-white p-6 shadow-lg">
      <Link to="/admin" className="flex items-center mb-6 relative">
      <div class="content">
        <h2>WebInfomotrix</h2>
        <h2>WebInfomotrix</h2> 
    </div>
      </Link>
      <ul className="space-y-4">
        {navItems.map(({ to, icon, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors ${
                location.pathname === to ? 'bg-gray-700' : ''
              }`}
            >
              <span className="text-2xl mr-3">{icon}</span>
              <span className="text-lg font-medium">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
