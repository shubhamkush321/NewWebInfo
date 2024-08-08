import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import asset1 from "../../assets/asset 0.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChevronDown } from 'react-icons/fa';
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleDropdownHover = (index) => {
    if (mobileMenuOpen) return;
    setOpenDropdown(index);
  };

  return (
    <div>
      <header className="fixed z-50 top-0 bg-blue-950 w-screen">
        <nav className="p-6 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img src={asset1} className="h-11" alt="Logo" />
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-1 text-white"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </button>

            {/* Desktop Navigation menu */}
            <div className="hidden lg:flex lg:justify-between">
              <ul className="flex flex-col mt-4 lg font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 ${
                        isActive ? "text-white" : "text-white"
                      } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 `
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                <li
                  className="relative group"
                  onMouseEnter={() => handleDropdownHover(1)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 text-gray-700  ${
                        isActive ? "text-white" : "text-white-700"
                      } lg:p-0`
                    }
                    onClick={() => handleDropdownToggle(1)}
                  >
                    SERVICES
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </NavLink>
                  {openDropdown === 1 && (
                    <ul className="absolute left-0 mt-2 bg-white text-black w-80 shadow-lg border border-gray-200">
                      <li>
                        <Link
                          to="/Digital-Marketing"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Digital Marketing Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Search-Engine"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Search Engine Optimization(SEO)
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Social-Media"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Social Media Marketing(SMM)
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Pay-Per"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Pay Per Click (PPC) MArketing
                        </Link>
                      </li>
                      <li className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center p-2 hover:bg-gray-100 w-full text-left"
      >
        <Link to="/Online-Reputation-Orm" className="flex-1">
          Online Reputation Management (ORM)
        </Link>
        <FaChevronDown className="h-4 w-4 text-gray-600" />
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 shadow-lg z-10">
          <li>
            <Link
              to="/Brand-Reputation"
              className="block p-2 hover:bg-gray-100"
            >
              Brand Reputation Management
            </Link>
          </li>
          <li>
            <Link
              to="/Celebrity-Reputation"
              className="block p-2 hover:bg-gray-100"
            >
              Celebrity Reputation Management
            </Link>
          </li>
          <li>
            <Link
              to="/Corporate-Reputation"
              className="block p-2 hover:bg-gray-100"
            >
              Corporate Reputation Management
            </Link>
          </li>
          <li>
            <Link
              to="/Online-Reputation"
              className="block p-2 hover:bg-gray-100"
            >
              Online Reputation Management
            </Link>
          </li>
        </ul>
      )}
    </li>
                      <li>
                        <Link
                          to="/Web-Designing"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Web Designing Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Website-Development"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Website Development Services
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Repeat similar pattern for other dropdown items */}
                {/* SEO */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleDropdownHover(2)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 text-gray-700  ${
                        isActive ? "text-white" : "text-gray-700"
                      } lg:p-0`
                    }
                    onClick={() => handleDropdownToggle(2)}
                  >
                    SEO
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </NavLink>
                  {openDropdown === 2 && (
                    <ul className="absolute left-0 mt-2 bg-white text-black w-60 shadow-lg border border-gray-200">
                      <li>
                        <Link
                          to="/Enterprise"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Enterprise SEO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Local"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Local SEO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/White-Label"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          White Label SEO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Google-Recovery"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Google Recovery Services SEO
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/Reseller-seo"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Reseller SEO Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Technical"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Technical SEO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Seo-audit"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          SEO Audit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Small-Business"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          SEO for Small Business
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Video"
                          className="block p-2 py-2 hover:bg-gray-100"
                        >
                          Video SEO
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* DESIGNING & DEVELOPMENT */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleDropdownHover(3)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 text-gray-700  ${
                        isActive ? "text-white" : "text-gray-700"
                      } lg:p-0`
                    }
                    onClick={() => handleDropdownToggle(3)}
                  >
                    DESIGNING & DEVELOPMENT
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </NavLink>
                  {openDropdown === 3 && (
                    <ul className="absolute left-0 mt-2 bg-white text-black w-64 shadow-lg border border-gray-200">
                      <li>
                        <Link
                          to="/Responsive-Web-Design"
                          className="block p-2 py-2 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Responsive Web Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/web-development"
                          className="block p-2 py-2 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Ecommerce-Website-Design"
                          className="block p-2 py-2 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Ecommerce Website Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/SEO-Friendly-Design"
                          className="block p-2 py-2 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          SEO Friendly Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Multimedia-Designing"
                          className="block p-2 py-2 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Multimedia Designing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Flash-Animation-Design"
                          className="block p-2 py-2 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Flash Animation Design
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* INDUSTRIES */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleDropdownHover(4)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 text-gray-700  ${
                        isActive ? "text-white" : "text-gray-700"
                      } lg:p-0`
                    }
                    onClick={() => handleDropdownToggle(4)}
                  >
                    INDUSTRIES
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </NavLink>
                  {openDropdown === 4 && (
                    <ul className="absolute left-0 mt-2 bg-white text-black w-64 shadow-lg border border-gray-200">
                      <li>
                        <Link
                          to="/healthcare"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Healthcare
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Ecommerce-Solution"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Ecommerce Solution
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Real-Estate-Solution"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Real Estate Solution
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Manufacturing"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Manufacturing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Law-Firms"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Law Firms
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Accounting-Firms"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Accounting Firms
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Electronics-Companies"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Electronics Companies
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Media-Entertainment"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Media Entertainment
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/education"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Education Institutes
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Online-Courses"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Online Courses
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* ECOMMERCE MARKETING */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleDropdownHover(5)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 text-gray-700 ${
                        isActive ? "text-white" : "text-gray-700"
                      } lg:p-0`
                    }
                    onClick={() => handleDropdownToggle(5)}
                  >
                    ECOMMERCE MARKETING
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </NavLink>
                  {openDropdown === 5 && (
                    <ul className="absolute left-0 mt-2 bg-white text-black w-72 shadow-lg border border-gray-200">
                      <li>
                        <Link
                          to="/ecommerce-optimization"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Ecommerce Optimization
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/ecommerce-seo"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Ecommerce SEO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/ecommerce-ppc"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Ecommerce PPC
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shopify-seo"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Shopify SEO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/amazon-marketing"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Amazon Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/amazon-seo"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Amazon SEO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/amazon-advertising"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Amazon Advertising/PPC
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/amazon-storefront"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Amazon Storefront & Branding
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/amazon-sellar-consulting"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Amazon Sellar Consulting
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/amazon-posts-management"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Amazon Posts Managment
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* CONTACT */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleDropdownHover(6)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 text-gray-700  ${
                        isActive ? "text-white" : "text-gray-700"
                      } lg:p-0`
                    }
                    onClick={() => handleDropdownToggle(6)}
                  >
                    CONTACT
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </NavLink>
                  {openDropdown === 6 && (
                    <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-lg border border-gray-200">
                      <li>
                        <Link
                          to="/contact-us"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/support"
                          className="block p-6 py-2 hover:bg-gray-100"
                        >
                          Support
                        </Link>
                      </li>
                      {/* Add more contact items as needed */}
                    </ul>
                  )}
                </li>
              </ul>
            </div>

            {/* Mobile Navigation menu */}
            <div
              className={`lg:hidden fixed top-0 left-0 w-full h-full bg-blue-950 z-50 transform ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out`}
            >
              <div className="flex flex-col mt-8 p-6">
                <button
                  className="self-end p-2 text-white"
                  onClick={handleMobileMenuToggle}
                  aria-label="Close navigation"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <ul className="flex flex-col mt-4 font-medium space-y-4">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 p-6 duration-200 ${
                          isActive ? "text-white" : "text-gray-700"
                        } border-b border-gray-100 `
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li className="relative group">
                    <button
                      className="block py-2 p-6 duration-200 text-gray-700 w-full text-left"
                      onClick={() => handleDropdownToggle(1)}
                    >
                      SERVICES
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                    </button>
                    {openDropdown === 1 && (
                      <ul className="bg-white text-black w-full mt-2 border border-gray-200">
                        <li>
                          <Link
                            to="/Digital-Marketing"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Digital Marketing Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Search-Engine"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Search Engine Optimization(SEO)
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Social-Media"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Social Media Marketing(SMM)
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/Pay-Per-Click"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Pay Per Click (PPC) MArketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Online-Reputation-Orm"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Online Reputation Management(ORM)
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Web-Designing"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Web Designing Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Website-Development"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Website Development Services
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  {/* Repeat similar pattern for other dropdown items */}
                  {/* SEO */}
                  <li className="relative group">
                    <button
                      className="block py-2 p-6 duration-200 text-gray-700  w-full text-left"
                      onClick={() => handleDropdownToggle(2)}
                    >
                      SEO
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                    </button>
                    {openDropdown === 2 && (
                      <ul className="bg-white text-black w-full mt-2 border border-gray-200">
                        <li>
                          <Link
                            to="/Enterprise"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Enterprise SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Local"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Local SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/White-Label"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            White Label SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Google-Recovery"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Google Recovery Services SEO
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/Reseller-seo"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Reseller SEO Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Technical"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Technical SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/seo-audit"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            SEO Audit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Small-Business"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            SEO for Small Business
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Video"
                            className="block p-2 py-2 hover:bg-gray-100"
                          >
                            Video SEO
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  {/* DESIGNING & DEVELOPMENT */}
                  <li className="relative group">
                    <button
                      className="block py-2 p-6 duration-200 text-gray-700  w-full text-left"
                      onClick={() => handleDropdownToggle(3)}
                    >
                      DESIGNING & DEVELOPMENT
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                    </button>
                    {openDropdown === 3 && (
                      <ul className="bg-white text-black w-full mt-2 border border-gray-200">
                        <li>
                          <Link
                            to="/Responsive-Web-Design"
                            className="block p-2 py-2 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Responsive Web Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/web-development"
                            className="block p-2 py-2 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Web Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Ecommerce-Website-Design"
                            className="block p-2 py-2 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Ecommerce Website Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/SEO-Friendly-Design"
                            className="block p-2 py-2 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            SEO Friendly Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Multimedia-Designing"
                            className="block p-2 py-2 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Multimedia Designing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Flash-Animation-Design"
                            className="block p-2 py-2 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Flash Animation Design
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  {/* INDUSTRIES */}
                  <li className="relative group">
                    <button
                      className="block py-2 p-6 duration-200 text-gray-700  w-full text-left"
                      onClick={() => handleDropdownToggle(4)}
                    >
                      INDUSTRIES
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                    </button>
                    {openDropdown === 4 && (
                      <ul className="bg-white text-black w-full mt-2 border border-gray-200">
                        <li>
                          <Link
                            to="/healthcare"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Healthcare
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Ecommerce-Solution"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Ecommerce Solution
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Real-Estate-Solution"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Real Estate Solution
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Manufacturing"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Manufacturing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Law-Firms"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Law Firms
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Accounting-Firms"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Accounting Firms
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Electronics-Companies"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Electronics Companies
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Media-Entertainment"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Media Entertainment
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/education"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Education Institutes
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Online-Courses"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Online Courses
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  {/* ECOMMERCE MARKETING */}
                  <li className="relative group">
                    <button
                      className="block py-2 p-6 duration-200 text-gray-700 w-full text-left"
                      onClick={() => handleDropdownToggle(5)}
                    >
                      ECOMMERCE MARKETING
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                    </button>
                    {openDropdown === 5 && (
                      <ul className="bg-white text-black w-full mt-2 border border-gray-200">
                        <li>
                          <Link
                            to="/ecommerce-optimization"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Ecommerce Optimization
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ecommerce-seo"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Ecommerce SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ecommerce-ppc"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Ecommerce PPC
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/shopify-seo"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Shopify SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/amazon-marketing"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Amazon Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/amazon-seo"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Amazon SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/amazon-advertising"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Amazon Advertising/PPC
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/amazon-storefront"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Amazon Storefront & Branding
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/amazon-sellar-consulting"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Amazon Sellar Consulting
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/amazon-posts-management"
                            className="block p-6 py-2 hover:bg-gray-100"
                          >
                            Amazon Posts Managment
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  {/* CONTACT */}
                  <li className="relative group">
                    <button
                      className="block py-2 p-6 duration-200 text-gray-700  w-full text-left"
                      onClick={() => handleDropdownToggle(6)}
                    >
                      CONTACT
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                    </button>
                    {openDropdown === 6 && (
                      <ul className="bg-white text-black w-full mt-2 border border-gray-200">
                        <li>
                          <Link
                            to="/contact-us"
                            className="block p-6 py-2 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/support"
                            className="block p-6 py-2 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Support
                          </Link>
                        </li>
                        {/* Add more contact items as needed */}
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
