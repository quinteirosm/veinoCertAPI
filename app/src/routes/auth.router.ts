import { Router } from "express";
import { authUser } from "../controllers/auth.controller";

const repoRouter = Router();

// route to get all documents
repoRouter.get("/", authUser);

export default repoRouter;
