import React from "react";
import { Header } from "./Header";
import TopBar from "./TopBar";
import MiddleWrapper from "./MiddleWrapper";
import ProductsList from "./ProductsList";
import UserList from "./UserList";
import { Footer } from "./Footer";
import {ProductDetailContent} from "./ProductDetailContent";
import {UserDetailContent} from "./UserDetailContent";
import "../assets/css/contentWrapper.css";

export const ContentWrapper = () => {
  return (
    <div className="contentWrapper">
      <Header />
      <TopBar />
      <MiddleWrapper />
      <ProductsList />
      <ProductDetailContent/>
      <UserDetailContent/>
      <UserList/>
      <Footer/>
    </div>
  );
};
