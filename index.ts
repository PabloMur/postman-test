import * as express from "express";
const port = process.env.PORT || 3002;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hola");
});

app.get("/users", (req, res) => {
  res.json(["todos los users"]);
});

app.post("/users", (req, res) => {
  res.json({
    message: "usuario creado correctamente",
    id: 1234,
  });
});

app.listen(port, () => {
  console.log("iniciado en el puerto" + port);
});