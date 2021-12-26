import React, { Component } from "react";
import { Product } from "./Product";
import {Link} from 'react-router-dom'
import "../assets/css/productList.css";
let next = 1;
let previous = 1;
class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/products/list?page=0")
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        console.log(`products`, products);
        this.setState({ productsList: products.data });
      })
      .catch((error) => console.log(error));
  }
/* 
  nextPage() {
    fetch("http://localhost:4000/api/products/list?page=" + { next })
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        console.log(`products`, products);
        this.setState({ productsList: products.data });
      })
      .catch((error) => console.log(error));
  }
  previousPage() {
    fetch("http://localhost:4000/api/products/list?page=2" + { previous })
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        console.log(`products`, products);
        this.setState({ productsList: products.data });
      })
      .catch((error) => console.log(error));
  }
 */
  render() {
    return (
      <div className="productsList">
        <div className="title">
          <h1>Productos en la base de datos</h1>
        </div>
        <div className="grid">
          {this.state.productsList.map((product, index) => {
            return <Product {...product} key={index} />;
          })}
        </div>
        <div className="meta">
         <Link to=''>Atrás</Link>
         <Link to=''>Siguiente</Link>
        </div>
      </div>
    );
  }
}

export default ProductsList;
