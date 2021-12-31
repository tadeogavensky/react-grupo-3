import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { UserDetail } from "./UserDetail";

export const UserDetailContent = (props) => {
  const [userData, setUser] = useState({});
  const [role, setRole] = useState({});

useEffect(() => {
  const fetchData = async () => {
    const endpoint = `http://localhost:4000/api/users/detail/props`;
    fetch(endpoint)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        setUser(user.data);
        setRole(user.data.rol.rol);
      });
  };

  fetchData();
}, []);

UserDetailContent.propTypes = {
  id: propTypes.number,
};

return (
  <React.Fragment>
    <UserDetail
      nombre={userData.nombre}
      apellido={userData.apellido}
      usuario={userData.usuario}
      email={userData.email}
      imagen={userData.imagen}
      domicilio={userData.domicilio}
      rol={role.rol}
    />
  </React.Fragment>
);

};


/* class UserDetailContent extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      rol: "",
    };
  }

  componentDidMount(props) {
    fetch(`http://localhost:4000/api/users/detail/1`)
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
 */