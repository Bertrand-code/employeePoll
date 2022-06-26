import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLogin } from "../Store/authReducer";

function Logincomponent({ login, user, auth }) {
  const [username, setUsername] = React.useState("sarahedo");
  const [password, setPassword] = React.useState("password123");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };
  if (auth) return <Navigate to={"/"} replace />;

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
