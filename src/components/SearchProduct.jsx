import React, { Component } from "react";
import "../assets/css/searchProduct.css";
import propTypes from "prop-types";
export const SearchProduct = (props) => {
  return (
    <div className="searchBar">
      <form action="" method="get">
        <input type="text" placeholder="Buscar..."></input>
      </form>
    </div>
  );
};

SearchProduct.propTypes = {
  like: propTypes.string,
};

SearchProduct.defaultProps = {
  like: "Default",
};
