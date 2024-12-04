const cartModel = require('../models/cartModel');

// Get cart by CartID
const getCartById = (req, res) => {
    const { cartId } = req.params;
    cartModel.GetCartById(cartId, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Cart not found');
            return;
        }
        res.json(results[0]);
    });
};

// Get cart by member
const getCartByMember = (req, res) => {
    const { memUsername } = req.params;
    cartModel.getCartByMember(memUsername, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Cart not found');
            return;
        }
        res.json(results[0]);
    });
};

// Create a new cart
const createCart = (req, res) => {
    const { memUsername } = req.body;
    if (!memUsername) {
        res.status(400).send('Member username is required');
        return;
    }
    cartModel.createCart(memUsername, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.status(201).json({ message: 'Cart created successfully', cartId: results.insertId });
    });
};

// Update cart status by CartID
const updateCartStatus = (req, res) => {
    const { cartId } = req.params;
    const { cartStatus } = req.body;
    if (!cartStatus) {
        res.status(400).send('Cart status is required');
        return;
    }
    cartModel.updateCartStatus(cartId, cartStatus, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Cart status updated successfully' });
    });
};

// Delete cart by CartID
const deleteCart = (req, res) => {
    const { cartId } = req.params;
    cartModel.deleteCart(cartId, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Cart deleted successfully' });
    });
};

module.exports = {
    getCartById,
    getCartByMember,
    createCart,
    updateCartStatus,
    deleteCart,
};
