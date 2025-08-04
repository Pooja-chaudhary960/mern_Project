import express from 'express';
import orderController from '../controllers/orderController.js';
import auth from '../middlewares/auth.js';
import roleBasedAuth from '../middlewares/roleBasedAuth.js';
import { ADMIN } from '../constants/roles.js';

const router = express.Router();

// GET: Retrieve all orders
router.get('/',auth, roleBasedAuth(ADMIN), orderController.getOrders);

router.get('/user',auth,orderController.getOrdersByUser);
router.get('/:id',auth,roleBasedAuth(ADMIN),orderController.getOrdersByUser);

// POST: Create an order, with auth middleware
router.post('/', auth, orderController.createOrder);

router.put("/:id", auth, roleBasedAuth(ADMIN), orderController.updateOrder);

router.delete('/:id', auth, roleBasedAuth (ADMIN), orderController.deleteOrder);

export default router;
