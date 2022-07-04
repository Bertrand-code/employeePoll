import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLogin } from "../Store/authReducer";
import { useEffect } from "react";


function Logincomponent({ login, users, auth }) {
  const [username, setUsername] = React.useState("sarahedo");
  const [password, setPassword] = React.useState("password123");
  console.log(users)
  const handleSubmit = (e) => {
    e.preventDefault();
    <select name="users">
      console.log(users)
            {users.map((option) => (
              <option value={option.value}>{option.name}</option>
            ))}
          </select>
    login({ username, password });
    Selection(username, password)
  
  };
  useEffect(() => {
    _getUsers().then((users)=>{
      setUsername(users)
      return ()=>{
        setUsername(username);
    if (users) {
      Navigate('/');
    }
  }, [users, Navigate]);
  

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
      {JSON.stringify(users)}
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
