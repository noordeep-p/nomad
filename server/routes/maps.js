import express from 'express';

import {
  createMaps, readMaps, updateMaps, deleteMaps, readMapAllPoint, createMapPoint,
} from '../controllers/maps.js';

const router = express.Router();

router.get('/', readMaps);
router.get('/:id/points', readMapAllPoint);
// router.get('/:id/:point', readMapSinglePoint);
router.post('/', createMaps);
router.post('/:id/points', createMapPoint);
router.patch('/:id', updateMaps);
router.delete('/:id', deleteMaps);

export default router;
