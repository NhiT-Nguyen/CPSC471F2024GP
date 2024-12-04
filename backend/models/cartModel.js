const db = require('../config/db');

// get a cart by CartID

const GetCartById = (cartId, callback) => {
    db.query('SELECT * FROM cart WHERE CartID = ?', [cartId], callback);
}

// get cart by member
const getCartByMember = (memUsername, callback) => {
    db.query('SELECT * FROM cart WHERE MemUsername = ?', [memUsername], callback);
};

// create a new cart
const createCart = (memUsername, callback) => {
    const createDate = new Date();
    const cartStatus = 'active';
    db.query('INSERT INTO cart (CartStatus, CreationDate, MemUsername) VALUES (?, ?, ?)',
        [cartStatus,createDate, memUsername], callback);
};

// update cart status by CartId
const updateCartStatus = (cartId, cartStatus, callback) => {
    db.query('UPDATE cart SET CartStatus = ? WHERE CartID = ?', [cartStatus, cartId], callback);
}

// delete cart by CartID
const deleteCart = (cartId, callback) => {
    db.query('DELETE FROM cart WHERE CartID = ?', [cartId], callback);
}

module.exports = {
    GetCartById,
    getCartByMember,
    createCart,
    updateCartStatus,
    deleteCart
};
