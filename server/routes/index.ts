import express from 'express';
import userRouter from './userRouter';

const router = express.Router();

router.use('/user', userRouter);

router.all('*', (req, res) => {
  res.status(404);
  res.send(`Not found: ${req.originalUrl}`);
});

export default router;
