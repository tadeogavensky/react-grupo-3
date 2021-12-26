import React, { Component } from "react";
import { TotalByCategory } from "./TotalByCategory";
import "../assets/css/totalByCategoryContent.css";
class TotalByCategoryContent extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
      /* category: "",
      length: 0, */
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/products/totalByCategory")
      .then((res) => {
        return res.json();
      })
      .then((totalByCategory) => {
        this.setState({ category: totalByCategory.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="totalByCategoryContent">
        <div className="title">
          <p>Total de productos por categoría</p>
        </div>
        <div className="content">
        {this.state.category.map((total, index) => {
          return <TotalByCategory {...total} key={index} />;
        })}
        </div>
      </div>
    );
  }
}

export default TotalByCategoryContent;
