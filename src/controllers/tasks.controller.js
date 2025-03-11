import errorMap from "zod/locales/en.js";
import { pool } from "../db.js";


export const getAllTasks = async (req, res, next) => {
  console.log(req.userId);
  const result = await pool.query("SELECT * FROM task WHERE user_id = $1", [
    req.userId,
  ]);
  return res.json(result.rows);
};

export const getTask = async (req, res) => {
  const result = await pool.query("SELECT * FROM task WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount == 0) {
    return res.status(404).json({
      message: "No Existe una Tarea con ese ID.",
    });
  }
  return res.json(result.rows[0]);
};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;
  console.log(title, description);

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, description, req.userId]
    );

    console.log(result);

    res.json(result.rows[0]);
  } catch (error) {
    if (error.code == "23505") {
      return res.status(409).json({
        message: "Ya existe una Tarea con ese Titulo.",
      });
    }
    next(error);
  }
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );
  if (result.rowCount == 0) {
    return res.status(404).json({
      message: "No existe una Tarea Asociada a ese ID",
    });
  }

  return res.json(result.rows[0]);
};

export const deleteTask = async (req, res) => {
  const result = await pool.query("DELETE FROM task WHERE id = $1", [
    req.params.id,
  ]);
  console.log(result);

  if (result.rowCount == 0) {
    return res.status(404).json({
      message: "No Existe una Tarea con ese ID",
    });
  }
  return res.sendStatus(204);
};
