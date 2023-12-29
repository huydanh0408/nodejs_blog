const path = require('path')
const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan("combined"));

// Serving static files in Express
app.use(express.static(path.join(__dirname,'public')))
// app.use(express.static('src/public'))

// Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
