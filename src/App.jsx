import React from "react";
import "./assets/css/App.css";
import { SideBar } from "./components/SideBar";
import {ProductDetailContent} from "./components/ProductDetailContent";
import { ContentWrapper } from "./components/ContentWrapper";
import { Route,Routes,Router } from "react-router-dom";
import { UserDetailContent } from "./components/UserDetailContent";

function App() {
  return (
    <div className="App">
     
        <SideBar />
        <ContentWrapper />

    </div>

    
  );
}

export default App;
