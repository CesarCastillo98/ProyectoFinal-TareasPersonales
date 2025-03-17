import { Card, Input, Button, Label } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { signin, errors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) {
      navigate("/profile")
    }
  });
  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <Card>
        {errors &&
          errors.map((err) => (
            <p className="bg-red-500 text-white p-2 text-center">{err}</p>
          ))}
        <h1 className="text-4xl font-bold my-2 text-center">Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Correo"
            {...register("email", { required: true })}
          />
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          <Button>Iniciar Sesion</Button>
          <div className="flex justify-between my-4">
            <p>Aun Tienes Una Cuenta?</p>
            <Link to="/register" className="font-bold">
              Registrarme
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
