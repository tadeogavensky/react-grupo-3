import React, { useState, useEffect, createContext, useContext } from "react";
import { User } from "./User";
import "../assets/css/userList.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import { UserDetail } from "./UserDetail";

export const UserList = () => {
  const [usersList, setUserList] = useState([]);
  const [userData, setUser] = useState({});
  const [role, setRole] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `http://localhost:4000/api/users`;
      fetch(endpoint)
        .then((res) => {
          return res.json();
        })
        .then((users) => {
          setUserList(users.data.usuarios);
        });
    };
    fetchData();
  }, []);

  const userDetail = async (id) => {
    let p = document.getElementById("ud");

    p.style.display = "block";

    fetch(`http://localhost:4000/api/users/detail/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        if (!user.Error) {
          setUser(user.data);
          setRole(user.data.rol);
        } else {
          setUser({});
          setRole({});
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
    {/*   <UserDetail
        nombre={userData.nombre}
        apellido={userData.apellido}
        usuario={userData.usuario}
        email={userData.email}
        imagen={userData.imagen}
        domicilio={userData.domicilio}
        rol={role.rol}
      /> */}
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
              {/* <th id="email">Detalle</th> */}
            </tr>
          </thead>
          {usersList.map((user, index) => {
            return(

              <User  {...user} key={index} />
             
            )
          })}
        </table>
      </div>
    </React.Fragment>
  );
};

/* class UserList extends Component {
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
 */
