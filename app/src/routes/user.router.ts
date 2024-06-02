import { Router } from "express";
import {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
