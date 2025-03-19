import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import { ORIGIN } from "./config.js";
import { pool } from "./db.js";

const app = express();

//middlewares
app.use(
  cors({
    origin: ORIGIN,
    credentials:true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.get("/", (req, res) => res.json({ message: "Bienvenido a mi API" }));
app.get("/api/ping",async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json(result.rows[0])
});
app.use("/api", taskRoutes);
app.use("/api", authRoutes);

//errores
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "Error",
    message: err.message,
  });
});

export default app;
