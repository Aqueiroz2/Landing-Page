const express = require("express");
const app = express();
const port = 3000; 
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/teste", (req, res) => {
    res.send("Aqui estará seu texto!")
});

app.get("/index", (req, res) => {
    res.render("index"); // Nome do arquivo, o EJS já busca dentro da pasta views.
  });
  
// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));







