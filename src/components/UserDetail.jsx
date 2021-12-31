import React from "react";
import propTypes from "prop-types";
import "../assets/css/userDetail.css";
export const UserDetail = (props) => {
  return (
    <div id="ud" className="userDetail">
      <img src={props.imagen} alt=""></img>
      <div className="userInfo">
        <div className="accountData">
            <label id="title">Datos de cuenta</label>
          <label>Usuario</label>
            <p>{props.usuario}</p>
          <label>Correo electrónico</label>
             <p>{props.email}</p>
          <label>Rol</label>
            <p>{props.rol}</p>
        </div>
        <div className="personalData">
            <label id="title">Datos personales</label>
          <label>Nombre</label>
            <p>{props.nombre}</p>
          <label>Apellido</label>
            <p>{props.apellido}</p>
          <label>Domicilio</label>
            <p>{props.domicilio}</p>
        </div>
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  nombre: propTypes.string,
  apellido: propTypes.string,
  usuario: propTypes.string,
  email: propTypes.string,
  imagen: propTypes.string,
  domicilio: propTypes.string,
  rol: propTypes.string
};

UserDetail.defaultProps = {
  nombre: "Default",
  apellido:"Default",
  usuario:"Default",
  email:"Default",
  imagen:"Default",
  domicilio:"Default",
  rol:"Default"
};
