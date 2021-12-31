import React from 'react'
import propTypes from "prop-types";
import '../assets/css/productDetail.css'

export const ProductDetail = (props) => {
    return (
        <div  id="pd" className="shadow">
        <div className="productDetailHead">
          
            <div className="metaHead">
                
                <p id='categorie'>{props.categoria}</p>
                <p>/</p>
                <p id='subcategorie'>{props.subcategoria}</p>
            </div>
            <p id='brand'>{props.marca}</p>
        <div className='productDetailRow'>
           <img src={props.imagen}></img>
            <div className="metaDetail">
               {/*  <p>{props.id}</p> */}
                <h1>{props.nombre}</h1>
                <p id='price'>{'$'}{props.precio}</p>
                <p id='description'>{props.descripcion}</p>
                
            </div>
            
        </div>
       
    </div>
    </div>
    )
}

ProductDetail.propTypes = {
    id: propTypes.number,
    nombre: propTypes.string,
    descripcion: propTypes.string,
    precio: propTypes.string,
    imagen: propTypes.string,
    stock: propTypes.bool,
    enOferta: propTypes.bool,
    marca: propTypes.string,
    categoria: propTypes.string,
    subcategoria: propTypes.string
  };
  
  ProductDetail.defaultProps = {
    id: 0,
    nombre: "Default",
    descripcion: "Default",
    precio: "0",
    imagen: "Default",
    stock: null,
    enOferta: null,
    marca: "Default",
    categoria: "Default",
    subcategoria: "Default"
  };
  
