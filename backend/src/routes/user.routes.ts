import { Router } from "express";
import userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/check-auth", userController.checkAuth);
userRouter.post("/register", userController.addUser);
userRouter.post("/update", userController.updateUser);
userRouter.get("/logout", userController.logout);
userRouter.post("/login", userController.loginUser);
userRouter.get("/:email", userController.getUserByEmail);

export default userRouter;
