import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({ username, contraseña }) => {
    setUser({ username, contraseña });
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

export { AuthProvider, useAuth };
