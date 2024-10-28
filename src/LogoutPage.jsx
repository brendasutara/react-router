import { useAuth } from "./auth";

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
    <>
      <h1>Hasta Pronto</h1>
      <h2>¿Seguro qué quieres salir?</h2>
      <form
        onSubmit={logout}
        style={{
          paddingBottom: "20px",
        }}
      >
        <button type="submit">Salir</button>
      </form>
    </>
  );
}

export default LogoutPage;
