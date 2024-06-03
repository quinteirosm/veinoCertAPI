import { Router } from "express";
import { getAllChips, getChipByUserId } from "../controllers/chip.controller";

const chipRouter = Router();

// get all chips registeres in the database
chipRouter.get("/", getAllChips);

// route to get a chip by userId
chipRouter.get("/:userId", getChipByUserId);

export default chipRouter;
