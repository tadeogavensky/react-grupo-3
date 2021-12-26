import React from "react";
import propTypes from "prop-types";
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
                <button className="btnDetail">Detalle del {props.dato}</button>
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
