/* eslint-disable max-len */
import express from 'express';

import {
  readAllMaps, readSingleMap, createMaps, updateMaps, deleteMaps,
} from '../controllers/maps.js';

const router = express.Router();

router.get('/', readAllMaps);
router.post('/', createMaps);
// should have user profile
router.get('/:id', readSingleMap);
router.patch('/:id', updateMaps);
router.delete('/:id', deleteMaps);

export default router;
