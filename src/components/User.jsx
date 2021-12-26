import React from "react";
import propTypes from "prop-types";
import "../assets/css/user.css";
import {Link} from 'react-router-dom'
export const User = (props) => {
  return (
    <React.Fragment>
      <tbody>
        <tr>
          <td id="id">{props.id}</td>
          <td id="name">{props.nombre}</td>
          <td id="surname">{props.apellido}</td>
          <td id="email">{props.email}</td>
          <td id="detail"><Link to=''>Ver</Link></td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

User.propTypes = {
  id: propTypes.number,
  nombre: propTypes.string,
  apellido: propTypes.string,
  email: propTypes.string,
};

User.defaultProps = {
  id: 0,
  nombre: "Default",
  apellido: "Default",
  email: "Default",
};
