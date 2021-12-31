import React, { useState, useEffect } from "react";
import { DataCard } from "./DataCard";
import "../assets/css/topBar.css";
import guitarIcon from "../assets/img/guitarIcon.png";
import chartIcon from "../assets/img/chartIcon.png";
import brandIcon from "../assets/img/brandIcon.png";
import userIcon from "../assets/img/userIcon.png";

export const TopBar = () => {
  const [productLength, setProductLength] = useState([0]);
  const [categorieLength, setCategorieLength] = useState([0]);
  const [brandLength, setBrandLength] = useState([0]);
  /*   const [userLength, setUserLength] = useState(0); */

  useEffect(() => {
    const fetchData = async => {    
      Promise.all([
        fetch("http://localhost:4000/api/products/totalProducts").then(
          (res) => {
            return res.json();
          }
        ),
        fetch("http://localhost:4000/api/products/totalCategories").then(
          (res) => {
            return res.json();
          }
        ),
        fetch("http://localhost:4000/api/products/totalBrands").then((res) => {
          return res.json();
        }),
        fetch("http://localhost:4000/api/users/userTotal").then((res) => {
          return res.json();
        }),
      ]).then(([resProduct, resCategorie, resBrand, resUser]) => {
        console.log(`resProduct`, resProduct.data);
        console.log(`resCategorie`, resCategorie.data);
        console.log(`resBrand`, resBrand.data);

        setProductLength(resProduct.data);
        setCategorieLength(resCategorie.data);
        setBrandLength(resBrand.data);


      });
    }

    fetchData();
  }, []);

  return (
    <div className="topBar">
      <DataCard
        nombre={"Productos en la base de datos"}
        cantidad={productLength}
        icono={guitarIcon}
      />
      <DataCard
        nombre={"Categorías en la base de datos"}
        cantidad={categorieLength}
        icono={chartIcon}
      />
      <DataCard
        nombre={"Marcas en la base de datos"}
        cantidad={brandLength}
        icono={brandIcon}
      />
      {/*  <DataCard nombre={"Usuarios en la base de datos"} cantidad={this.state.userLength} icono={userIcon}/> */}
    </div>
  );
};

/* class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      productLength: 0,
      categorieLength: 0,
      brandLength: 0,
      userLength: 0,
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:4000/api/products/totalProducts").then((res) => {
        return res.json();
      }),
      fetch("http://localhost:4000/api/products/totalCategories").then(
        (res) => {
          return res.json();
        }
      ),
      fetch("http://localhost:4000/api/products/totalBrands").then((res) => {
        return res.json();
      }),
      fetch("http://localhost:4000/api/users/userTotal").then((res) => {
        return res.json();
      }),
    ]).then(([resProduct, resCategorie, resBrand, resUser]) => {
      this.setState({ productLength: resProduct.data });
      this.setState({ categorieLength: resCategorie.data });
      this.setState({ brandLength: resBrand.data });
      this.setState({ userLength: resUser.data });
    });
  }
  render() {
   
  }
}

export default TopBar;
 */
