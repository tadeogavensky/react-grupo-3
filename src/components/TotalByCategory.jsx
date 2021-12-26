import React from "react";
import propTypes from "prop-types";
import "../assets/css/totalByCategory.css";
export const TotalByCategory = (props) => {
  return (
    <div className="table">
      <div className="totalByCategory">
        <p className="category">{props.categoria}</p>
        <p className="quantity">{props.total}</p>
      </div>
    </div>
  );
};

TotalByCategory.propTypes = {
  categoria: propTypes.string,
  total: propTypes.number,
};

TotalByCategory.defaultProps = {
  categoria: "Default",
  total: 0,
};
