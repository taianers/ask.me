const express = require("express");
const app = express();

//use o EJS como view engine para renderizar meu HTML
app.set('view engine', 'ejs');

app.get("/",(req, res) => {
    //res.send("Rota para testes!");
    res.render("index", {
        nome: "MATE 20 Ulyana",
        SO: "Linux Mint"
    }); // render busca automaticamente no diretorio views
});

app.listen(3000,() => {
    console.log("Servidor aberto na porta 3000!");
});