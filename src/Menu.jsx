import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const routes = [];

routes.push({
  id: 1,
  to: "/",
  text: "Home",
  private: false,
});
routes.push({
  id: 2,
  to: "/blog",
  text: "Blog",
  private: true,
});
routes.push({
  id: 3,
  to: "/profile",
  text: "Profile",
  private: true,
});
routes.push({
  id: 4,
  to: "/login",
  text: "Login",
  private: false,
  publicOnly: true,
});
routes.push({
  id: 5,
  to: "/logout",
  text: "Logout",
  private: true,
});

function Menu() {
  const auth = useAuth();

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: 10,
        }}
      >
        {routes.map((route) => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;
          return (
            <li key={route.id}>
              <NavLink
                to={route.to}
                end
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
