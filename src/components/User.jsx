import React from "react";
import propTypes from "prop-types";
import "../assets/css/user.css";
export const User = (props) => {
  return (
    <div className="userContent">
      <table className="userTable">
        <thead>
          <tr id="head">
            <th id="id">Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="id">{props.id}</td>
            <td>{props.nombre}</td>
            <td>{props.apellido}</td>
            <td>{props.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

User.propTypes={ 
    id: propTypes.number,
    nombre: propTypes.string,
    apellido: propTypes.string,
    email: propTypes.string,
}

User.defaultProps={
    id: 0,
    nombre: 'Default',
    apellido: 'Default',
    email: 'Default',
}
