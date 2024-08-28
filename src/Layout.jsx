import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  const location = useLocation();
  const path = location.pathname;
  const hideHeaderFooter =
    path.startsWith("/dashboard") ||
    path.startsWith("/admin") ||
    path.startsWith("/login");

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default Layout;
