import { Router } from "express";
import {
	getAllDocuments,
	getDocumentById,
} from "../controllers/repository.controller";

const repoRouter = Router();

// route to get all documents
repoRouter.get("/", getAllDocuments);

// route to get a document by userId & chipId
repoRouter.get("/:userId/:chipId", getDocumentById);

export default repoRouter;
