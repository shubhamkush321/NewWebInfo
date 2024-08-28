import { useEffect } from "react";
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

      navigate("/login");
    }
  }, [token, navigate]);



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
