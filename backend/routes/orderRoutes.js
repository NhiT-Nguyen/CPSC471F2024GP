const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

// Create a new order
router.post('/order', orderController.createOrder);

// Get order by OrderID
router.get('/order/:orderId', orderController.getOrderById);

// Get order details by OrderID
router.get('/order/details/:orderId', orderController.getOrderDetails);

// Update order status by OrderID
router.put('/order/status/:orderId', orderController.updateOrderStatus);

// Delete order by OrderID
router.delete('/order/:orderId', orderController.deleteOrder);

module.exports = router;