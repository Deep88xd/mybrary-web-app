require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const expressLayout = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const bookRouter = require("./routes/books");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(express.static("public"));
app.use(expressLayout);
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/books", bookRouter);

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.listen(port, () => {
  console.log(`Connected with the port ${port}`);
});
   