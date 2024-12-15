import React from "react";
import Navbar from "./MyNavbar";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import styles from "./style.js";
import Footer from "./Footer.jsx";

const AppLayout = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      <div className="container  ">
        <Outlet />
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
