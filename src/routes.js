const routes = require("express").Router();

const UserController = require("./app/controllers/UserController");

routes.get("/", (req, res) => {
  res.send("Hello World " + process.env.DB_USER);
});

routes.post("/users", UserController.store);

module.exports = routes;
