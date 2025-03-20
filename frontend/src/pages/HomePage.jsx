import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth();
  console.log(data);
  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4">CesarCastle</h1>
        <p>
          Código, errores y aprendizaje: así empieza mi viaje como
          desarrollador.
        </p>
      </Card>
    </div>
  );
}

export default HomePage;
