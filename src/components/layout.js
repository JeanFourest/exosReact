import React from "react";
import NavBar from "./navBar";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="navbar" >
        <NavBar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
