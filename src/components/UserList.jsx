import React, { Component } from "react";
import { User } from "./User";
import "../assets/css/userList.css";
class UserList extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        console.log(`users`, users);
        this.setState({ userList: users.data.usuarios });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="usersList">
        <div className="title">
          <h1>Usuarios en la base de datos</h1>
        </div>
        {this.state.userList.map((users, index) => {
          return <User {...users} key={index} />;
        })}
      </div>
    );
  }
}

export default UserList;
