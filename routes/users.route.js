const userRouter = require("express").Router();
const userController = require("../Controllers/User.controller");

userRouter.post("/", userController.register);
userRouter.put("/:id", userController.Update);
userRouter.get("/", userController.Get);
userRouter.get("/:id", userController.GetbyId);
userRouter.put("/forgetpass/:id", userController.UpdatePassword);

module.exports = userRouter;
