import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ auth }) => {
  if (!auth) return <Navigate to="/login" replace />;
  return <Outlet />;
};
const mapStateToProps = (state) => ({
  auth: state.authStore.auth.id,
});

export default connect(mapStateToProps)(Auth);
