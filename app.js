const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars Middleware
app.engine("hbs", exphbs.engine({ extname: "hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

// MongoDB bağlantısı
mongoose
  .connect("mongodb://localhost/booktracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
const books = require("./routes/books");
app.use("/books", books);

// Ana Sayfa Route
app.get("/", (req, res) => {
  res.redirect("/books");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
