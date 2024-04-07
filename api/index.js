import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './Routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDb');
}).catch(err => {
  console.log(err);
})

const app = express();

app.listen(4000, () => {
  console.log('server is running on port 4000')
});

app.use("/api/user", userRouter);