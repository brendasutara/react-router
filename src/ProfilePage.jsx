import { useAuth } from "./auth";

function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h1>Perfil {auth.user.username}</h1>
      <h2>Bienvenido, ahora puedes leer tu blog</h2>
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
    </>
  );
}

export default ProfilePage;
