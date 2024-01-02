const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan("combined"));

// Serving static files in Express
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static('src/public'))

// Middleware cho phương thức post
app.use(express.urlencoded( // express có tích hợp sẵn body-parser đối với version mới
  {
    extended: true // sử dụng urlencoded cần có options extended của thư viện urlencoded
  }
))
app.use(express.json())

// Template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/search", (req, res) => {
  // console.log(req.query); // có sẵn middleware của express khu dùng query parameters
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req.body); 
  /**
   *  vì body chưa có middleware như query 
   *  -> cần lấy ra và sử dụng để có thể định nghĩa req.body
   *  -> sau khi "use urlencoded" đã có thư viện body-parser -> thì có thể sử dụng req.body
   *      .body-parser sử dụng "qs" (query string) 
   *          - qs parse obj sang chuỗi (form data truyền dưới dạng obj -> parse sang chuỗi -> submit)
   */

  res.send(""); // send ra trang blank
});

app.get("/news", (req, res) => {
  console.log('query',req.query);
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
