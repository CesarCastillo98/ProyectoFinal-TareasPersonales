import { Button, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, errors:signupErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    const user = await signup(data);
    if (user) {
      navigate("/profile");
    }
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        {signupErrors &&
          signupErrors.map((err) => (
            <p className="bg-red-500 text-white p-2 text-center">{err}</p>
          ))}
        <h3 className="text-2xl font-bold">Registrarme</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Nombre</Label>
          <Input
            placeholder="Ingresa tu Nombre"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <p className="text-red-500">Nombre Requerido</p>}
          <Label htmlFor="email">Correo</Label>
          <Input
            type="email"
            placeholder="Ingresa tu Correo"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <p className="text-red-500">Nombre Requerido</p>}
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Ingresa tu Contraseña"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && <p className="text-red-500">Nombre Requerido</p>}

          <Button>Registrar</Button>
          <div className="flex justify-between my-4">
            <p>Ya Tienes Una Cuenta?</p>
            <Link to="/login" className="font-bold">
              Iniciar Sesión
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
