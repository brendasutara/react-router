import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth";
import Menu from "./Menu";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import BlogPage from "./BlogPage";
import BlogPost from "./BlogPost";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
