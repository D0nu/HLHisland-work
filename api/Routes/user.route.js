import express from 'express';
import { test} from '../Controllers/user.controller.js';
import { authorize, protect } from '../Middleware/Auth.js';

const router = express.Router();



router.get('/test', protect, authorize('admin'), test);


export default router;