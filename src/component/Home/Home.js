import React from "react";
import "./Home.css";
import Popup from "../Layout/Popup";
import Sidebar from "../Layout/Sidebar";
import SidebarHeader from "../Layout/SidebarHeader";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="container-popup">
          <Popup />
        </div>

        <div className="sidebar-group">
          <div className="container-sidebar">
            <Sidebar />
          </div>

          <div className="container-header">
            <SidebarHeader />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
