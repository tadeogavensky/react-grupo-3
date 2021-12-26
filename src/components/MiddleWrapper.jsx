import React, { Component } from "react";
import { LastDataContent } from "./LastDataContent";
import TotalByCategoryContent from "./TotalByCategoryContent";
import '../assets/css/middleWrapper.css'
class MiddleWrapper extends Component {
  constructor() {
    super();
    this.state = {
      productImg: "",
      productName: "",
      userImg: "",
      userName: "",
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:4000/api/products/lastProduct").then((res) => {return res.json();}),
      fetch("http://localhost:4000/api/users/lastUser").then((res) => {return res.json();}),
    ]).then(([resProduct, resUser]) => {
      this.setState({ productImg: resProduct.data.imagen });
      this.setState({ productName: resProduct.data.nombre });
      this.setState({ userImg: resUser.data.imagen });
      this.setState({ userName: resUser.data.nombre });
    });
  }

  render() {
    return (
      <div className="middleWrapper">
        <LastDataContent
          dato={"producto"}
          imagen={this.state.productImg}
          nombre={this.state.productName}
        />
        <TotalByCategoryContent/>
      </div>
    );
  }
}

export default MiddleWrapper;
