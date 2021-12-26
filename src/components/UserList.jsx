import React, { Component } from "react";
import { User } from "./User";
import "../assets/css/userList.css";
import {Link} from 'react-router-dom'
class UserList extends Component {
  constructor() {
    super();
    this.state = {
      usersList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        this.setState({ usersList: users.data.usuarios });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="usersList">
        <div className="title">
          <h1>Usuarios en la base de datos</h1>
        </div>
        <table className="userTable">
          <thead className="tableHead">
            <tr id="head">
              <th id="id">Id</th>
              <th id="name">Nombre</th>
              <th id="surname">Apellido</th>
              <th id="email">Email</th>
              <th id="email">Detalle</th>
            </tr>
          </thead>
          {this.state.usersList.map((user, index) => {
            return <User {...user} key={index} />;
          })}
        </table>
      </div>
    );
  }
}

export default UserList;
