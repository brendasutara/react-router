import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ["Irisval", "RetaxMaster", "freddier"];

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({ username }) => {
    const isAdmin = adminList.find((admin) => admin === username);
    setUser({ username, isAdmin });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

AuthRoute.propTypes = {
  children: PropTypes.node,
};

export { AuthProvider, AuthRoute, useAuth };
