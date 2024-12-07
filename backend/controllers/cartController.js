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

const addItemToCart = (req, res) => {
    const { cartId, itemId, quantity } = req.body;
    if (!cartId || !itemId || !quantity) {
        res.status(400).send('CartID, ItemID, and Quantity are required');
        return;
    }
    cartModel.addItemToCart(cartId, itemId, quantity, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.status(201).json({ message: 'Item added to cart successfully' });
    });
}

const updateItemQuantityInCart = (req, res) => {
    const { cartId, itemId, quantity } = req.body;
    if (!cartId || !itemId || !quantity) {
        res.status(400).send('CartID, ItemID, and Quantity are required');
        return;
    }
    cartModel.updateItemQuantityInCart(cartId, itemId, quantity, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Item quantity updated successfully' });
    });
}

const deleteItemFromCart = (req, res) => {
    const { cartId, itemId } = req.params;
    cartModel.deleteItemFromCart(cartId, itemId, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Item deleted from cart successfully' });
    });
}

const getItemsInCart = (req, res) => {
    const { cartId } = req.params;
    cartModel.getItemsInCart(cartId, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
}

const getCartTotal = (req, res) => {
    const { cartId } = req.params;
    cartModel.getCartTotal(cartId, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results[0]);
    });}




module.exports = {
    getCartById,
    getCartByMember,
    createCart,
    updateCartStatus,
    deleteCart,
    addItemToCart,
    updateItemQuantityInCart,
    deleteItemFromCart,
    getItemsInCart,
    getCartTotal
};
