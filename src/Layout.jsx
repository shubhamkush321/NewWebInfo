import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default Layout;
