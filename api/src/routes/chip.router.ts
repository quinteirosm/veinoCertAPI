import { Router } from "express";
import { getAllChips, getChipByUserId } from "../controllers/chip.controller";

const chipRouter = Router();

/**
 * @swagger
 * /chips:
 *   get:
 *     summary: Get all chips registered in the database.
 *     responses:
 *       200:
 *         description: Returns an array of all chips.
 */
chipRouter.get("/", getAllChips);

/**
 * @swagger
 * /chips/{userId}:
 *   get:
 *     summary: Get a chip by userId.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The ID of the user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the chip associated with the userId.
 *       404:
 *         description: Chip not found.
 */
chipRouter.get("/:userId", getChipByUserId);

export default chipRouter;
