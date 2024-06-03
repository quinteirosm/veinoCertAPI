import { Router } from "express";
import { getUserById, login } from "../controllers/user.controller";

const userRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for user management
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
userRouter.get("/:id", getUserById);

/**
 * @swagger
 * /users/login:
 *   get:
 *     summary: Identify a user by email and password
 *     tags: [Users]
 *     parameters:
 *       - in: body
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: User email
 *       - in: body
 *         name: password
 *         schema:
 *           type: string
 *         required: true
 *         description: User password
 *     responses:
 *       200:
 *         description: User data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
userRouter.get("/login", login);

export default userRouter;
