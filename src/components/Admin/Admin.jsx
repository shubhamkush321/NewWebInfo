import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import Dashboard from "./SideBarComponents/Dashboard";

const Admin = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/admin';
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div className="flex w-full">
      <SideNav />
      <div className="flex flex-col flex-1">
        <TopNav />
        <div className="ml-60">
          {isDashboard ? <Dashboard /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
