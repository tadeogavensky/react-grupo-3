import React, { useState, useEffect } from "react";
import { ProductDetail } from "./ProductDetail";
import propTypes from "prop-types";
import "../assets/css/productDetailContent.css";

export const ProductDetailContent = (props) => {
  const [productData, setProduct] = useState({});
  const [brand, setBrand] = useState("");
  const [categorie, setCategorie] = useState("");
  const [subcategorie, setSubcategorie] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `http://localhost:4000/api/products/detail/1`;
      fetch(endpoint)
        .then((res) => {
          return res.json();
        })
        .then((product) => {
          setProduct(product.data);
          setBrand(product.data.marca);
          setCategorie(product.data.categoria);
          setSubcategorie(product.data.subcategoria);
          console.log(`brand`, brand.nombre);
          console.log(`categorie`, categorie.nombre);
          console.log(`subcategorie`, subcategorie.nombre);
        });
    };

    fetchData();
  }, []);

  ProductDetailContent.propTypes = {
    id: propTypes.number,
  };

  return (
    <div className="productDetailContent">
      <ProductDetail
        nombre={productData.nombre}
        descripcion={productData.descripcion}
        precio={productData.precio}
        marca={brand.nombre}
        categoria={categorie.nombre}
        subcategoria={subcategorie.nombre}
        imagen={productData.imagen}
      />
    </div>
  );
};

/* 
class ProductDetailContent extends Component {
  constructor(props) {
    super(props);
    props = {
      productsList: [],
      product: "",
      brand: "",
      categorie: "",
      subcategorie: "",
      _ismounted: false
    };
  }

  componentDidMount(props) {
    if(this._ismounted === false){
      console.log(`params`, props.match.params.id)
      fetch(`http://localhost:4000/api/products/detail/1`)
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        this.setState({_ismounted:  true})
        this.setState({ product: product.data });
        this.setState({ brand: product.data.marca.nombre });
        this.setState({ categorie: product.data.categoria.nombre });
        this.setState({ subcategorie: product.data.subcategoria.nombre });
      })
      .catch((error) => console.log(error));
    }
  }

  render(props) {
    if(this._ismounted === true){
      return (
       <div className="productDetailContent">
          <h1>{this.props.selectedProduct}</h1>
          <ProductDetail
            nombre={props.product.nombre}
            descripcion={props.product.descripcion}
            precio={props.product.precio}
            marca={props.brand}
            categoria={props.categorie}
            subcategoria={props.subcategorie}
            imagen={props.product.imagen}
        </div>
      );
      }else{
          this.setState({_ismounted: false})

      }
  
  }
}

ProductDetailContent.propTypes = {
  selectedProduct: propTypes.string,
};

export default ProductDetailContent;
 */
