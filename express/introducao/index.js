const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.type("text/html");
  res.send("<h1>Hello Express</h1>");
});

app.get("/about", (req, res) => {
  res.type("text/html");
  res.send(`<h1>Olá, ${req.query.name}</h1>`);
});

app.use((req, res) => {
  res.type("text/html");
  res.status(404);
  res.send("<h1>Página não encontrada.</h1>");
});

app.listen(port, () => {
  console.log(`➡️ Local: http://localhost:${port}`);
});
