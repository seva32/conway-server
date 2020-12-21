var express = require("express"),
  morgan = require("morgan"),
  app = express(),
  port = process.env.PORT || 3001,
  router = express.Router();

app.use(express.static(__dirname + "/views")); // set the static files location for the static html
app.use(express.static(__dirname + "/public")); // set the static files location /public/img will be /img for users
app.use(morgan("dev")); // log every request to the console

router.get("/", function (req, res, next) {
  res.render("index.html");
});

router.get("/projects", function (req, res, next) {
  res.render("projects.html");
});

router.get("/home", function (req, res, next) {
  res.render("home.html");
});

app.use("/", router);

app.listen(port);
console.log("App running on port", port);
