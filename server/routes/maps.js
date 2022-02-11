/* eslint-disable max-len */
import express from 'express';

import {
  readMaps, readSingleMap, readMapSinglePoint, readMapAllPoint, createMaps, createMapPoint, updateMaps, deleteMaps, updateMapSinglePoint, deleteMapSinglePoint, deleteMapAllPoint,
} from '../controllers/maps.js';

const router = express.Router();

router.get('/', readMaps);
router.get('/:id', readSingleMap);
router.get('/:id/:pointId', readMapSinglePoint);
router.get('/:id/points', readMapAllPoint);
router.post('/', createMaps); // should have user profile
router.post('/:id/points', createMapPoint); // should have user profile
router.patch('/:id', updateMaps); // should have user profile
router.patch('/:id/:pointId', updateMapSinglePoint); // should have user profile
router.delete('/:id', deleteMaps); // should have user profile
router.delete('/:id/:pointId', deleteMapSinglePoint); // should have user profile
router.delete('/:id/points', deleteMapAllPoint); // should have user profile

export default router;
