import React, {Component} from 'react'
import '../assets/css/searchProduct.css'
import propTypes from 'prop-types'
class SearchProduct extends Component {

    constructor() {
        super();
        this.state = {
          productsSearched: [],
        };
      }
    
      componentDidMount(props){
          fetch(`http://localhost:4000/api/products/search?like=`+props.like)
          .then((res) => {
            return res.json();
          })
          .then((products) => {
            console.log(`products`, products)
            this.setState({ productsSearched: products.data.productos });
          })
      }

    return(props){
    return (
        <div className='searchBar'>
            <input type="text" placeholder='Buscar...'>{props.like}</input>
        </div>
    )
    }
}

SearchProduct.propTypes={
    like: propTypes.string
}

SearchProduct.defaultProps={
    like: 'Default',
}


export default SearchProduct