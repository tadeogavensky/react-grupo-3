import React, { useState, useEffect } from "react";
import { Product } from "./Product";
import { Route, Link, Routes } from "react-router-dom";
import { ProductDetailContent } from "./ProductDetailContent";
import "../assets/css/productList.css";

export const ProductsList = () => {
  let next = 1;
  let previous = 1;
  const page = 0;

  const [productsList, setProductsList] = useState([]);
  const [nextProducts, setNextProducts] = useState([]);
  const [previousProducts, setPreviousProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("hola");

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `http://localhost:4000/api/products/list?page=${page}`;
      fetch(endpoint)
        .then((res) => {
          return res.json();
        })
        .then((products) => {
          setProductsList(products.data);
          setPreviousProducts(products.meta.previousPage);
          setNextProducts(products.meta.nextPage);
        });
      }


    fetchData();
  }, []);

  const previousPage = async () =>{
    fetch(previousProducts)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        setProductsList(products.data);
        setPreviousProducts(products.meta.previousPage);
        setNextProducts(products.meta.nextPage);
      })
      .catch((error) => console.log(error));
  }

 const nextPage = async () => {
    fetch(nextProducts)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        setProductsList(products.data);
        setPreviousProducts(products.meta.previousPage);
        setNextProducts(products.meta.nextPage);
      })
      .catch((error) => console.log(error));
  }


  return (
    <div className="productsList">
      <div className="title">
        <h1>Productos en la base de datos</h1>
      </div>
      <div className="display">
        <div className="grid">
          {productsList.map((product, index) => {
            return (
              <Link
                to={`productDetail/${productsList[index].id}`}
                key={index}
              >
                <Product
                  {...product}
                  key={index}
                 /*  selectedProduct={selectedProduct} */
                />
              </Link>
            );
          })}
        </div>
        <div className="meta">
          <p onClick={() => previousPage()}>Atrás</p>
          <p onClick={() => nextPage()}>Siguiente</p>
        </div>
      </div>
      <Routes>
        <Route
          path={`productDetail/${ProductsList.id}`}
          render={() => (
            <ProductDetailContent {...selectedProduct} />
          )}
        />
      </Routes>
    </div>
  );
}

/* class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      nextProducts: [],
      previousProducts: [],
      selectedProduct: "hola",
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

  render(props) {
    return (
      <div className="productsList">
        <div className="title">
          <h1>Productos en la base de datos</h1>
        </div>
        <div className="display">
          <div className="grid">
            {this.state.productsList.map((product, index) => {
              return (
                <Link
                  to={`productDetail/${this.state.productsList[index].id}`}
                  key={index}
                >
                  <Product
                    {...product}
                    key={index}
                    selectedProduct={this.state.selectedProduct}
                  />
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
          <Route
            path={`productDetail/${this.state.productsList.id}`}
            render={() => (
              <ProductDetailContent {...this.state.selectedProduct} />
            )}
          />
        </Routes>
      </div>
    );
  }
}

export default ProductsList;
 */
