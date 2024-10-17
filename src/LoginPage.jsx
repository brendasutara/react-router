import { useState } from "react";
import { useAuth } from "./auth";

function LoginPage() {
  const auth = useAuth();
  const [username, setusername] = useState("");
  const [contraseña, setContraseña] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({ username, contraseña });
  };

  return (
    <>
      <h1>Bienvenido</h1>
      <h2>¡Conoce este maravilloso Hola Mundo!</h2>
      <form
        onSubmit={login}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          gap: "20px",
          paddingBottom: "20px",
        }}
      >
        <label>Escribe tu nombre</label>
        <input
          type="text"
          placeholder="Escribe tu username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />

        <label>Escribe tu contraseña</label>
        <input
          type="text"
          placeholder="Escribe tu contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default LoginPage;
