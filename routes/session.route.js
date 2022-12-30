const sessionRouter = require("express").Router();
const sessionController = require("../controllers/session.controller");
const passport = require("passport");

sessionRouter.post("/login",sessionController.login);
sessionRouter.get("/loginFailed", sessionController.loginFailed);

module.exports = sessionRouter;