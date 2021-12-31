import React from "react";
import propTypes from "prop-types";
import {Route,Link, Routes} from 'react-router-dom'
import {ProductDetailContent} from "./ProductDetailContent";
import "../assets/css/lastDataContent.css";


export const LastDataContent = (props) => {
  return (
        <div className="lastDataContent">
            <div className="title">
                <h1>Último {props.dato} agregado</h1>
            </div>
            <div className="content">
                <img src={props.imagen} alt=""></img>
                <p className="dataName">{props.nombre}</p>
               <Link to='/productDetail'><button className="btnDetail">Detalle del {props.dato}</button> </Link>
               <Routes>
                  <Route path='/productDetail' component={ProductDetailContent}></Route>
               </Routes>
            </div>
        </div>
  );
};

LastDataContent.propTypes = {
  dato: propTypes.string,
  nombre: propTypes.string,
  imagen: propTypes.string,
};

LastDataContent.defaultProps = {
  dato: "Default",
  nombre: "Default",
  imagen: "Default",
};
