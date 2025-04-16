import dotenv from 'dotenv';
dotenv.config();

import express, { Router } from 'express';
const app = express();

const router = Router();
app.use(
  '/api',
  router.get('/user', (rea, res) => {
    res.send('用户接口');
  })
);

const { PORT } = process.env;
app.listen(PORT, () => {});
