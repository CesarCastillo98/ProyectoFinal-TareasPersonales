import { Router } from "express";

const router = Router();

router.get('/tasks', (req,res)=> res.send("Obteniendo Tareas"));

router.get('/tasks/:id', (req,res)=> res.send("Obteniendo Tarea Unica"));

router.post('/tasks', (req,res)=> res.send("Creando Tareas"));

router.put('/tasks/:id', (req,res)=> res.send("Actualizando Tarea Unica"));

router.delete('/tasks/:id', (req,res)=> res.send("Eliminando Tarea"));

export default router;