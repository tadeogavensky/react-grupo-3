import React, { useState, useEffect } from "react";
import { LastDataContent } from "./LastDataContent";
import { TotalByCategoryContent } from "./TotalByCategoryContent";
import "../assets/css/middleWrapper.css";
import { ProductDetail } from "./ProductDetail";

export const MiddleWrapper = () => {
  const [productData, setProductData] = useState({});
  const [productName, setName] = useState("");
  const [productImg, setImg] = useState("");

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [brand, setBrand] = useState("");
  const [categorie, setCategorie] = useState("");
  const [subcategorie, setSubcategorie] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `http://localhost:4000/api/products/lastProduct`;
      fetch(endpoint)
        .then((res) => {
          return res.json();
        })
        .then((product) => {
          if (!product.Error) {
            setProductData(product.data);
            setName(product.data.nombre);
            setImg(product.data.imagen);
          } else {
            setName("");
            setImg("");
            setProductData({});
          }
        });
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
     <div id="lastDetail">
       
      </div>

      <div className="middleWrapper">
          <LastDataContent
            dato={"producto"}
            imagen={productImg}
            nombre={productName}
          />
        <TotalByCategoryContent />
      </div>
    </React.Fragment>
  );
};
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
