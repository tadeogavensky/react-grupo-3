import React, { useState, useEffect} from "react";
import { Product } from "./Product";
import "../assets/css/productList.css";
import propTypes from "prop-types";
import { ProductDetail } from "./ProductDetail";

export default function ProductsList() {
  const [productsList, setProductsList] = useState([]);
  const [nextProducts, setNextProducts] = useState([]);
  const [previousProducts, setPreviousProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [brand, setBrand] = useState("");
  const [categorie, setCategorie] = useState("");
  const [subcategorie, setSubcategorie] = useState("");

  useEffect(() => {
    const page = 0;
    const fetchData = async () => {
      const endpoint = `http://localhost:4000/api/products/list?page=${page}`;
      fetch(endpoint)
        .then((res) => {
          return res.json();
        })
        .then((products) => {
          if (!products.Error) {
            setProductsList(products.data);
            setPreviousProducts(products.meta.previousPage);
            setNextProducts(products.meta.nextPage);
          } else {
            setProductsList([]);
            setPreviousProducts([]);
            setNextProducts([]);
          }
        });
    };

    fetchData();
  }, []);

  const previousPage = async () => {
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
  };

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
  };

  const productDetail = async (id) => {
    let p = document.getElementById("pd");
    let l = document.getElementById('lastDetail')
 
    p.style.display='block'
    l.style.display='none'
    
    console.log(`id`, id)

    fetch(`http://localhost:4000/api/products/detail/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        if (!product.Error) {
          setSelectedProduct(product.data);
          setBrand(product.data.marca);
          setCategorie(product.data.categoria);
          setSubcategorie(product.data.subcategoria);
        } 
      })
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <div className="productDetailHead">
        <ProductDetail 
          id={selectedProduct.id}
          nombre={selectedProduct.nombre}
          descripcion={selectedProduct.descripcion}
          precio={selectedProduct.precio}
          marca={brand.nombre}
          categoria={categorie.nombre}
          subcategoria={subcategorie.nombre}
          imagen={selectedProduct.imagen}
        />
      </div>
      <div className="productsList">
        <div className="title">
          <h1>Productos en la base de datos</h1>
        </div>
        <div className="display">
          <div className="grid">
            {
            
            productsList.map((product, index) => {
              return (
                <a
                  onClick={() => productDetail(productsList[index].id)}
                  key={index}
                >
                  <Product
                    id={productsList[index].id}
                    {...product}
                    key={index}
                    /*  selectedProduct={selectedProduct} */
                  />
                </a>
              );
            })}
          </div>
          <div className="meta">
            <p onClick={() => previousPage()}>Atrás</p>
            <p onClick={() => nextPage()}>Siguiente</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  ProductsList.propTypes = {
    id: propTypes.number,
  };
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
