import React from "react";
import { SearchProductContent } from "./SearchProductContent";
import logo from "../assets/img/logo.svg";
import { Link, Routes, Route } from "react-router-dom";
import App from '../App'
import "../assets/css/sideBar.css";
export const SideBar = () => {
  return (
    <div className="sideBar">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <Routes>
        <Route path={"/"} component={App} />
      </Routes>

      <SearchProductContent />
    </div>
  );
};
