import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import Dashboard from "./SideBarComponents/Dashboard";

const Admin = () => {
  const location = useLocation();
  const isDashboard = ["/admin", "/admin/"].includes(location.pathname);
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
      <div className="flex-1 flex flex-col">
        <TopNav />
        <div className="ml-80">
          {isDashboard && <Dashboard />}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
