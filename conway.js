var express = require("express"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  app = express(),
  port = process.env.PORT || 3002,
  router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/conway", express.static(__dirname + "/views")); // set the static files location for the static html
app.use("/conway", express.static(__dirname + "/public")); // set the static files location /public/img will be /img for users
app.use(morgan("dev")); // log every request to the console

router.get("/", function (req, res, next) {
  console.log("entra");
  res.render("index.html");
});

app.use("/", router);

app.listen(port);
console.log("App running on port", port);
