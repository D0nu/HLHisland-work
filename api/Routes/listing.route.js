import express from 'express';
import { createListing } from '../Controllers/listing.controller.js';
import { protect, authorize } from '../Middleware/Auth.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post("/create", verifyToken, protect,authorize('admin'), createListing);

export default router;