import React, { Component } from "react";
import { UserDetail } from "./UserDetail";
class UserDetailContent extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      rol: "",
    };
  }

  componentDidMount() {
  fetch("http://localhost:4000/api/users/detail/1")
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        this.setState({ user: user.data });
        this.setState({ rol: user.data.rol.rol });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <React.Fragment>
        <UserDetail 
            nombre={this.state.user.nombre}
            apellido={this.state.user.apellido}
            usuario={this.state.user.usuario}
            email={this.state.user.email}
            imagen={this.state.user.imagen}
            domicilio={this.state.user.domicilio}
            rol={this.state.rol}
        />
      </React.Fragment>
    );
  }
}

export default UserDetailContent;
