import express from 'express';

import {
  createPoints, readPoints, updatePoints, deletePoints,
} from '../controllers/points.js';

const router = express.Router();

router.get('/', readPoints);
router.post('/', createPoints);
router.put('/', updatePoints);
router.delete('/', deletePoints);

export default router;
