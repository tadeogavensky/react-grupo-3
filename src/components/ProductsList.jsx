import React, { Component } from "react";
import { Product } from "./Product";
import {Route,Link, Routes} from 'react-router-dom';
import ProductDetailContent from './ProductDetailContent';
import "../assets/css/productList.css";
let next = 1;
let previous = 1;
class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      nextProducts: [],
      nextNextProcucts: [],
      previousProducts: [],
      previousPreviousPage: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/products/list?page=0")
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        this.setState({ productsList: products.data });
        this.setState({ previousPage: products.meta.previousPage });
        this.setState({ nextProducts: products.meta.nextPage });
      })
      .catch((error) => console.log(error));
  }

  previousPage() {
    fetch(this.state.previousPage)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        this.setState({ productsList: products.data });
        this.setState({ previousPage: products.meta.previousPage });
        this.setState({ nextProducts: products.meta.nextPage });
      })
      .catch((error) => console.log(error));
  }
  nextPage() {
    fetch(this.state.nextProducts)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        this.setState({ productsList: products.data });
        this.setState({ previousPage: products.meta.previousPage });
        this.setState({ nextProducts: products.meta.nextPage });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="productsList">
        <div className="title">
          <h1>Productos en la base de datos</h1>
        </div>
        <div className="display">
          <div className="grid">
            {this.state.productsList.map((product, index) => {
              return (
                <Link to={`productDetail/${this.state.productsList[index].id}`} key={index}>
                  <Product {...product} key={index} />
                </Link>
              );
            })}
          </div>
          <div className="meta">
            <p onClick={() => this.previousPage()}>Atrás</p>
            <p onClick={() => this.nextPage()}>Siguiente</p>
          </div>
        </div>
        <Routes>
            <Route path={`productDetail/${this.state.productsList.id}`} component={ProductDetailContent}/>
        </Routes>
      </div>
    );
  }
}

export default ProductsList;
