import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiFileTextLine,
  RiUserLine,
  RiMailLine,
  RiNewspaperLine,
  RiNewspaperFill,
} from 'react-icons/ri';
import './SideNav.css';

const navItems = [
  { to: 'Pages', icon: <RiFileTextLine />, label: 'Pages' },
  { to: 'blog', icon: <RiNewspaperFill />, label: 'Blog' },
  { to: 'DigitalCards', icon: <RiUserLine />, label: 'DigitalCards' },
  { to: 'Testimonials', icon: <RiUserLine />, label: 'Testimonials' },
  { to: 'FAQs', icon: <RiNewspaperLine />, label: 'FAQs' },
  { to: 'Cards', icon: <RiMailLine />, label: 'Cards' },
];

const SideNav = () => {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-6 shadow-lg">
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
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <span className="text-xl mr-3">{icon}</span>
              <span className="text-lg font-medium">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
