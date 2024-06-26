import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './Routes/user.route.js';
import authRouter from './Routes/auth.routes.js';
import emailRouter from './Routes/email.route.js';
import listingRouter from './Routes/listing.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDb');
}).catch(err => {
  console.log(err);
})

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/email', emailRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(4000, () => {
  console.log('server is running on port 4000')
});

