import express from 'express';
import { test, updateUser} from '../Controllers/user.controller.js';
import { authorize, protect } from '../Middleware/Auth.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();



router.get('/test', protect, authorize('admin'), test);
router.post('/update/:id',verifyToken, updateUser)


export default router;