import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLogin } from "../Store/authReducer";
import { useEffect } from "react";
import { _getUsers } from "../db/_DATA";


function Logincomponent({ login, user, auth }) {
  const [username, setUsername] = React.useState("sarahedo");
  const [password, setPassword] = React.useState("password123");
  const [users, setUsers] = React.useState([]);
  console.log(users)
  const handleSubmit = (e) => {
    e.preventDefault();
    <select name="user">
    
            {users?.map((option) => (
              <option value={option.value}>{option.id}</option>
            ))}
          </select>
    login({ username, password });
    
  
  };
  useEffect(() => {
    _getUsers().then((users) => {
      setUsers(users);
      
    })
  },[users.length]);
  

  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        className="loginForm"
        onSubmit={handleSubmit}
        data-testid="loginForm"
      >
        <label>
          Username:
          <input
            type="text"
            className="inputElement"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
        </label>
        <br />
        <label>
          Password:
          <input
            className="inputElement"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="btn"> Login </button>
      </form>
      {JSON.stringify(user)}
    </div>
  );
}
  
const mapDispatchToProps = {
  login: userLogin,
};
const mapStateToProps = (state) => ({
  auth: state.authStore.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Logincomponent);
