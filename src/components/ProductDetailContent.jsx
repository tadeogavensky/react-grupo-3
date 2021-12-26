import React, { Component } from "react";
import { ProductDetail } from "./ProductDetail";
import '../assets/css/productDetailContent.css'
class ProductDetailContent extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
      brand:'',
      categorie:'',
      subcategorie:'',
      id: 1
    };
  }
  

  componentDidMount() {
    fetch(`http://localhost:4000/api/products/detail/${this.state.id}`)
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        this.setState({ product: product.data });
        this.setState({ brand: product.data.marca.nombre });
        this.setState({ categorie: product.data.categoria.nombre });
        this.setState({ subcategorie: product.data.subcategoria.nombre });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="productDetailContent">
        <ProductDetail
          nombre={this.state.product.nombre}
          descripcion={this.state.product.descripcion}
          precio={this.state.product.precio}
          marca={this.state.brand}
          categoria={this.state.categorie}
          subcategoria={this.state.subcategorie}
          imagen={this.state.product.imagen}
        />
      </div>
    );
  }
}

export default ProductDetailContent;
