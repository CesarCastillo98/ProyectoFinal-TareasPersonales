import  {GrTask, GrTasks,} from 'react-icons/gr'
import  {GiPlagueDoctorProfile} from 'react-icons/gi'

export const publicRoutes=[
  {
    name: "Sobre Mi",
    path: "/about",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Registrarme",
    path: "/register",
  },
]

export const privateRoutes = [

  {
    name: "Tareas",
    path: "/tasks",
    icon: <GrTask className='w-5 h-5'/>,
  },
  {
    name: "Añadir",
    path: "/tasks/new",
    icon: <GrTasks className='w-5 h-5'/>,
  },
  {
    name: "Perfil",
    path: "/profile ",
    icon: <GiPlagueDoctorProfile className='w-5 h-5'/>,
  },
];
