import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLogin } from "../Store/authReducer";
import { useEffect } from "react";
import { _getUsers } from "../db/_DATA";


function Logincomponent({ login, newUsers, auth }) {
  const [username, setUsername] = React.useState("sarahedo");
  const [password, setPassword] = React.useState("password123");
  const [users, setUsers] = React.useState([]);
  console.log(users)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    login({ username, password });
    setUsername(username, password)
    setPassword(password)
  
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
          <select name="username" onChange={(e) => e.target.value}>
            {Object.values(users).map((option) => (
              <option value={option.value}>{option.name}</option>
            ))}
          </select>
          <br />
        </label>
        <br />
        <button className="btn"> Login </button>
      </form>
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