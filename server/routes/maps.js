import express from "express";

import { getMaps } from "../controllers/maps.js";

const router = express.Router();

router.get("/", getMaps);

export default router;
