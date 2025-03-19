import jwt, { decode } from "jsonwebtoken";
export const isAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No Estas Autorizado",
    });
  }

  jwt.verify(token, "xyz123", (err, decoded) => {
    if (err)
      return res.status(401).json({
        message: "No Estas Autorizado",
      });
    req.userId = decoded.id;
    next();
  });
};
