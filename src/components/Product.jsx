import React from 'react'
import propTypes from 'prop-types'
import '../assets/css/product.css'
export const Product = (props) => {
    return (
        <div className="product">
            <p>{props.nombre}</p>
        </div>
    )
}

Product.propTypes={ 
    nombre: propTypes.string
}

Product.defaultProps={
    nombre: 'Default'
}