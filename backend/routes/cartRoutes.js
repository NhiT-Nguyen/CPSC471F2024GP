const express = require('express');
const cartController = require('../controllers/cartController');
const router = express.Router();

// Get cart by CartID
router.get('/cart/:cartId', cartController.getCartById);

// Get cart by member username
router.get('/cart/member/:memUsername', cartController.getCartByMember);

// Create a new cart
router.post('/cart', cartController.createCart);

// Update cart status by CartID
router.put('/cart/status/:cartId', cartController.updateCartStatus);

// Delete cart by CartID
router.delete('/cart/:cartId', cartController.deleteCart);

// Add item to cart
router.post('/cart/item', cartController.addItemToCart);

// Remove item from cart
router.delete('/cart/item', cartController.deleteItemFromCart);

// Update item quantity in cart
router.put('/cart/item', cartController.updateItemQuantityInCart);

// Get items in cart
router.get('/cart/items/:cartId', cartController.getItemsInCart);

// Get total of cart
router.get('/cart/total/:cartId', cartController.getCartTotal);

module.exports = router;
