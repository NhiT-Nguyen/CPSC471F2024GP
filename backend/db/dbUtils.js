const db = require('../config/db');

// function to check if cart exists
const doesCartExist = (cartId, callback) => {
    db.query('SELECT * FROM cart WHERE CartID = ?', [cartId], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.length === 0) {
            return callback(null, false);
        }

        return callback(null, true);
    });
}

// function to check if member already has cart
const doesMemberHaveCart = (memUsername, callback) => {
    db.query('SELECT * FROM cart WHERE MemUsername = ?', [memUsername], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.length === 0) {
            return callback(null, false);
        }

        return callback(null, true);
    });
}

// function to get total of cart
const getCartTotal = (cartId, callback) => {
    // first check if cart exists
    doesCartExist(cartId, (err, exists) => {
        if (err) {
            return callback(err, null);
        }

        if (!exists) {
            return callback(new Error('Cart does not exist'), null);
        }
        // if cart exists, get the total
        // If the cart exists, calculate the total
        const query = `
        SELECT SUM(fg.Price * pi.Quantity) AS Total
        FROM PLACED_IN pi
        JOIN FISHING_GEAR fg ON pi.ItemID = fg.ItemID 
        WHERE pi.CartID = ?
        `;
    
        db.query(query, [cartId], (err, result) => {
            if (err) {
                return callback(err, null);
            }
    
            // Assuming there's always a result (even if 0 total)
            return callback(null, result[0].Total || 0);
    });
});
}

// function to check if transaction is associated to a cart

const checkTransactionCart = (cartId, callback) => {
    const query = `SELECT * FROM TRANSACTION WHERE CartID = ? AND Status = 'Completed'`;
    db.query(query, [cartId], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.length === 0) {
            return callback(null, false);
        }

        return callback(null, true);
    });
}

    




module.exports = {
    doesCartExist,
    getCartTotal,
    doesMemberHaveCart
}