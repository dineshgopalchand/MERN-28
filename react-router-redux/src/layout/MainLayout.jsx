import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from '../pages/Home';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="topContainer">
      <Header />
      <div className="main-container">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
