import React from "react";
import { Header } from "./Header";
import TopBar from "./TopBar";
import MiddleWrapper from "./MiddleWrapper";
import ProductsList from "./ProductsList";
import TotalByCategoryContent from "./TotalByCategoryContent";
import UserList from "./UserList";
import { Footer } from "./Footer";
import ProductDetailContent from "./ProductDetailContent";
import "../assets/css/contentWrapper.css";

export const ContentWrapper = () => {
  return (
    <div className="contentWrapper">
      <Header />
      <TopBar />
      <MiddleWrapper />
      <ProductDetailContent/>
      <ProductsList />
      <UserList/>
      <Footer/>
    </div>
  );
};
