import express from 'express';
// import createDishes from '../controllers/dishes.controller';

console.log('ROUTE')

const router = express.Router();

router.post('/dishes', (req, res) => {
  console.log(req.body);
  res.send('POST dishes');
});

export default router;