import express from 'express';

import {
  createMaps, readMaps, updateMaps, deleteMaps,
} from '../controllers/maps.js';

const router = express.Router();

router.get('/', readMaps);
router.post('/', createMaps);
router.patch('/:id', updateMaps);
router.delete('/:id', deleteMaps);

export default router;
