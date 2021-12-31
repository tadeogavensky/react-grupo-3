import React, { useState, useEffect } from "react";
import { LastDataContent } from "./LastDataContent";
import {TotalByCategoryContent} from "./TotalByCategoryContent";
import '../assets/css/middleWrapper.css'

export const MiddleWrapper = () => {
  const [productName, setName] = useState("");
  const [productImg, setImg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `http://localhost:4000/api/products/lastProduct`;
      fetch(endpoint)
        .then((res) => {
          return res.json();
        })
        .then((product) => {
          setName(product.data.nombre)
          setImg(product.data.imagen)
        });
    };

    fetchData();
  }, []);

  return (
    <div className="middleWrapper">
      <LastDataContent
        dato={"producto"}
        imagen={productImg}
        nombre={productName}
      />
      <TotalByCategoryContent/>
    </div>
  );


}
/* 
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
    ]).then(([resProduct, resUser]) => {
      this.setState({ productImg: resProduct.data.imagen });
      this.setState({ productName: resProduct.data.nombre });
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
 */