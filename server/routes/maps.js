import express from 'express';

import {
  createMaps, readMaps, updateMaps, deleteMaps, readMapAllPoint, createMapPoint, readMapSinglePoint,
} from '../controllers/maps.js';

const router = express.Router();

router.get('/', readMaps);
router.get('/:id/points', readMapAllPoint);
router.get('/:id/:pointId', readMapSinglePoint);
router.post('/', createMaps);
router.post('/:id/points', createMapPoint);
router.patch('/:id', updateMaps);
router.delete('/:id', deleteMaps);

export default router;
