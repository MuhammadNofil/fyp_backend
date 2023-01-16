const sessionRouter = require("express").Router();
const sessionController = require("../controllers/session.controller");
const passport = require("passport");
const {googleverification}=require('../middleware/middleware')

sessionRouter.post("/login",sessionController.login);
sessionRouter.get("/loginFailed", sessionController.loginFailed);
sessionRouter.get('/google',googleverification,sessionController.loginwithgoogle)

module.exports = sessionRouter;