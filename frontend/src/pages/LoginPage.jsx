import { Card, Input, Button, Label, Container } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { register, handleSubmit, formState:{
    errors
  } } = useForm();
  const { signin, errors: loginErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) {
      navigate("/tasks")
    }
  });
  return (
    <Container className="h-[calc(100vh-10rem)] flex justify-center items-center">
      <Card>
        {loginErrors &&
          loginErrors.map((err) => (
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
          {errors.email && (<p className="text-red-500">Email Requerido</p>)}
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && (<p className="text-red-500">Contraseña Requerida</p>)}
          <Button>Iniciar Sesion</Button>
          <div className="flex justify-between my-4">
            <p className="mr-4">Aun No Tienes Una Cuenta?</p>
            <Link to="/register" className="font-bold">
              Registrarme
            </Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export default LoginPage;
