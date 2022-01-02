import React from "react";
import propTypes from "prop-types";
import { Route, Link, Routes } from "react-router-dom";
import { ProductDetailContent } from "./ProductDetailContent";
import "../assets/css/lastDataContent.css";

export const LastDataContent = (props) => {
  return (
    <div className="lastDataContent">
      <div className="title">
        <h1>Último {props.dato} agregado</h1>
      </div>
      <div className="content">
        <div className="metaHead">
          <p id="categorie">{props.categoria}</p>
          <p>/</p>
          <p id="subcategorie">{props.subcategoria}</p>
        </div>
        <p className="dataBrand">{props.marca}</p>
        <img src={props.imagen} alt=""></img>
        <p className="dataName">{props.nombre}</p>
        {/*   <p className="dataDescription">{props.descripcion}</p> */}
        {/* <Link to='/productDetail'><button className="btnDetail">Detalle del {props.dato}</button> </Link> */}
      </div>
    </div>
  );
};

LastDataContent.propTypes = {
  dato: propTypes.string,
  nombre: propTypes.string,
  imagen: propTypes.string,
  descripcion: propTypes.string,
  categoria: propTypes.string,
  subcategoria: propTypes.string,
  marca: propTypes.string,
};

LastDataContent.defaultProps = {
  dato: "Default",
  nombre: "Default",
  imagen: "Default",
  descripcion: "Default",
  categoria: "Default",
  subcategoria: "Default",
  marca: "Default",
};
