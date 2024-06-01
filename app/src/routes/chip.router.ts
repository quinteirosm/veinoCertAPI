import { Router } from "express";
import { getAllChips, getChipById } from "../controllers/chip.controller";

const chipRouter = Router();

// route to get all chips
chipRouter.get("/", getAllChips);

// route to get a chip by userId
chipRouter.get("/:userId", getChipById);

export default chipRouter;
