import express from 'express';
import { test, updateUser, deleteUser} from '../Controllers/user.controller.js';
import { authorize, protect } from '../Middleware/Auth.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();



router.get('/test', protect, authorize('admin'), test);
router.post('/update/:id',verifyToken, updateUser);
router.delete('/delete/:id',verifyToken, deleteUser);



export default router;