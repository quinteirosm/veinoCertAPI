import { Router } from "express";
import {
	getAllDocuments,
	getDocumentById,
} from "../controllers/repository.controller";

const repoRouter = Router();

// swaggerdoc for route to get all documents
repoRouter.get("/", getAllDocuments);

/**
 * @swagger
 * /documents/{userId}/{chipId}:
 *   get:
 *     summary: Get a document by userId & chipId
 *     tags: [devDocuments]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *       - in: path
 *         name: chipId
 *         schema:
 *           type: string
 *         required: true
 *         description: Chip ID
 *     responses:
 *       200:
 *         description: Document details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Document'
 *       404:
 *         description: Document not found
 */
repoRouter.get("/:userId/:chipId", getDocumentById);

export default repoRouter;
