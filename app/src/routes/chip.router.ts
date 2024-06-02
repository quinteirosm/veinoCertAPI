import { Router } from "express";
import { getAllChips, getChipById } from "../controllers/chip.controller";

const chipRouter = Router();

// get all chips registeres in the database
chipRouter.get("/", getAllChips);

// route to get a chip by userId
chipRouter.get("/:userId", getChipById);

export default chipRouter;
