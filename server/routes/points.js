import express from "express";

import { createPoints, readPoints, updatePoints, deletePoints } from "../controllers/points.js";

const router = express.Router();

router.get("/", readPoints);

export default router;
