import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { _getUsers } from "../db/_DATA";

const Auth = ({auth,id}) => {
  if (!auth) return <Navigate to="/login" replace />;
  return <Outlet />;
};
const mapStateToProps = (state) => ({
  auth: state.authStore.auth,
  id: state.authStore.id,
});

export default connect(mapStateToProps)(Auth,id);
