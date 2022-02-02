import express from 'express';

import {
  createPoints, readPoints, updatePoints, deletePoints,
} from '../controllers/points.js';

const router = express.Router();

router.get('/', readPoints);
router.post('/', createPoints);
router.patch('/:id', updatePoints);
router.delete('/:id', deletePoints);

export default router;
