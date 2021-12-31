import React, { useState, useEffect } from "react";
import { TotalByCategory } from "./TotalByCategory";
import "../assets/css/totalByCategoryContent.css";

export const TotalByCategoryContent = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `http://localhost:4000/api/products/totalByCategory`;
      fetch(endpoint)
        .then((res) => {
          return res.json();
        })
        .then((totalByCategory) => {
          if (!totalByCategory.Error) {
            setCategory(totalByCategory.data);
          } else {
            setCategory([]);
          }
        });
    };

    fetchData();
  }, []);

  return (
    <div className="totalByCategoryContent">
      <div className="title">
        <p>Total de productos por categoría</p>
      </div>
      <div className="content">
        {category.map((total, index) => {
          return <TotalByCategory {...total} key={index} />;
        })}
      </div>
    </div>
  );
};

/* class TotalByCategoryContent extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/products/totalByCategory")
      .then((res) => {
        return res.json();
      })
      .then((totalByCategory) => {
        this.setState({ category: totalByCategory.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="totalByCategoryContent">
        <div className="title">
          <p>Total de productos por categoría</p>
        </div>
        <div className="content">
        {this.state.category.map((total, index) => {
          return <TotalByCategory {...total} key={index} />;
        })}
        </div>
      </div>
    );
  }
}

export default TotalByCategoryContent;
 */
