/* eslint-disable max-len */
import express from 'express';

import {
  createMaps, readMaps, updateMaps, deleteMaps, readMapAllPoint, createMapPoint, readMapSinglePoint, updateMapSinglePoint, deleteMapSinglePoint, readSingleMap,
} from '../controllers/maps.js';

const router = express.Router();

router.get('/', readMaps);
router.get('/:id', readSingleMap);
router.get('/:id/:pointId', readMapSinglePoint);
router.get('/:id/points', readMapAllPoint);
router.post('/', createMaps);
router.post('/:id/points', createMapPoint);
router.patch('/:id', updateMaps);
router.patch('/:id/:pointId', updateMapSinglePoint);
router.delete('/:id', deleteMaps);
router.delete('/:id/:pointId', deleteMapSinglePoint);
// router.delete('/:id/points', deleteMapAllPoint);

export default router;
