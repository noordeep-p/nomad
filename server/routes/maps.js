import express from 'express';

import {
  createMaps, readMaps, updateMaps, deleteMaps,
} from '../controllers/maps.js';

const router = express.Router();

router.get('/', readMaps);
router.post('/', createMaps);
router.put('/', updateMaps);
router.delete('/', deleteMaps);

export default router;
