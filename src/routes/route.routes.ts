import express from 'express';
import {createDishes, getDishes} from '../controllers/dishes.controller';

const router = express.Router();

router.post('/dish', createDishes);
router.get('/dishes', getDishes);

export default router;