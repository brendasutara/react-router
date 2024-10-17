import { useAuth } from "./auth";

function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h1>Perfil</h1>
      <h2>Parece que no registraste tus datos {auth.user.username}</h2>
      <p>
        La próxima una contraseña más díficil, &apos;{auth.user.contraseña}
        &apos; nos la sabemos todos
      </p>
      <img
        style={{
          height: "400px",
          width: "auto",
          borderRadius: "150px",
          objectFit: "cover",
          paddingBottom: "50px",
        }}
        src="https://i.pinimg.com/736x/e6/90/44/e690445fd2555e8fd45d222f16f3042f.jpg"
        alt="esperando"
      />
      <div>
        <button>Volver a registrarme</button>
      </div>
    </>
  );
}

export default ProfilePage;
