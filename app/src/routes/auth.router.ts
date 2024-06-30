import { Router } from "express";
import { authUser } from "../controllers/auth.controller";

const repoRouter = Router();

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Authenticate a user
 *     tags: [auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chipId:
 *                 type: string
 *               otk:
 *                 type: string
 *               timestamp:
 *                 type: string
 *               pseudo:
 *                 type: string
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Invalid otk
 */
repoRouter.get("/", authUser);

export default repoRouter;
