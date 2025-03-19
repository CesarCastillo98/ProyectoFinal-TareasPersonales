import { useAuth } from "../context/AuthContext";
import {Card} from "../components/ui"


function HomePage() {
  const data = useAuth();
  console.log(data);
  return <div>
    <Card>
      <h1 className="text-3xl font-bold my-4">CesarCastle</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit maiores sapiente quae quibusdam quaerat facilis, laboriosam vitae accusamus dolores ex temporibus nihil excepturi placeat tenetur. Dolor facilis nemo quaerat?</p>
    </Card>


  </div>;
}

export default HomePage;
