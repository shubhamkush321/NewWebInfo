import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import Dashboard from "./SideBarComponents/Dashboard";

const Admin = () => {
  const location = useLocation();
  const isDashboard =
    location.pathname === "/admin" || location.pathname === "/admin/";
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.log("No token found, navigating to login");
      navigate("/login");
    }
  }, [token, navigate]); // Run this effect when `token` or `navigate` changes

  if (!token) {
    return null;
  }

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <div className="flex-1 p-6 overflow-y-auto">
          {isDashboard && <Dashboard />}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
