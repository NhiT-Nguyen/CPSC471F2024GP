const db = require('../config/db');
const utils = require('../db/dbUtils');
/*
CREATE TABLE CART (
CartID			INT			NOT NULL,
CartStatus		VARCHAR(20)		NOT NULL,
CreationDate		DATE			NOT NULL,
MemUsername		VARCHAR(20)		NOT NULL,
PRIMARY KEY (CartID),
FOREIGN KEY (MemUsername) REFERENCES MEMBER (MUsername)
);

CREATE TABLE PLACED_IN(
CartID			INT			NOT NULL,
ItemID			INT 			NOT NULL,
Quantity		INT			NOT NULL,
FOREIGN KEY (CartID) REFERENCES CART(CartID),
FOREIGN KEY (ItemID) REFERENCES FISHING_GEAR (ItemID)
);

CREATE TABLE FISHING_GEAR (
ItemID			INT			NOT NULL,
QuantityInStock	INT			NOT NULL,
Description		VARCHAR(300)	,
StockStatus		VARCHAR(20)		NOT NULL,
Discount		INT			,
Price			FLOAT			NOT NULL,
PRIMARY KEY (ItemID)
);
*/
// get a cart by CartID

const getCartById = (cartId, callback) => {
    
    db.query('SELECT * FROM cart WHERE CartID = ?', [cartId], callback);
}

// get cart by member
const getCartByMember = (memUsername, callback) => {
    db.query('SELECT * FROM cart WHERE MemUsername = ?', [memUsername], callback);
};

// create a new cart
const createCart = (memUsername, callback) => {

    // first check if member has cart already
    utils.doesMemberHaveCart(memUsername, (err, hasCart) => {
        if (err) {
            return callback(err, null);
        }

        if (hasCart) {
            return callback('Member already has a cart', null);
        }
        // if they dont have a cart already
        const createDate = new Date();
        const cartStatus = 'active';

        db.query('INSERT INTO cart (CartStatus, CreationDate, MemUsername) VALUES (?, ?, ?)',
            [cartStatus, createDate, memUsername], 
            callback
            );
    });

};

// update cart status by CartId
const updateCartStatus = (cartId, cartStatus, callback) => {

    db.query('UPDATE cart SET CartStatus = ? WHERE CartID = ?', [cartStatus, cartId], callback);
}

// delete cart by CartID
const deleteCart = (cartId, callback) => {
    db.query('DELETE FROM cart WHERE CartID = ?', [cartId], callback);
}

// add item to cart
const addItemToCart = (cartId, itemId, quantity, callback) => {
    // first check if theres enough quantity in stock
    // if there is, then add the item to the cart if the cart exists
    // if not, throw an error

    // check if cart exists
    db.query('SELECT * FROM cart WHERE CartID = ?', [cartId], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.length === 0) {
            return callback('Cart does not exist', null);
        }

        // check if item exists
        db.query('SELECT * FROM fishing_gear WHERE ItemID = ?', [itemId], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            if (result.length === 0) {
                return callback('Item does not exist', null);
            }

            // check if quantity is in stock
            if (result[0].QuantityInStock < quantity) {
                return callback('Not enough quantity in stock', null);
            }

            // add item to cart
            db.query('INSERT INTO placed_in (CartID, ItemID, Quantity) VALUES (?, ?, ?)',
                [cartId, itemId, quantity], callback);
        });
    });

}

// update item quantity in cart
const updateItemQuantityInCart = (cartId, itemId, quantity, callback) => {
    // check if cart exists
    db.query('SELECT * FROM cart WHERE CartID = ?', [cartId], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.length === 0) {
            return callback('Cart does not exist', null);
        }


    // check if the item is already in cart
    // if it is, update the quantity
    // if not, throw an error
    
    db.query('SELECT * FROM placed_in WHERE CartID = ? AND ItemID = ?', [cartId, itemId], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.length === 0) {
            return callback('Item is not in cart', null);
        }

        db.query('UPDATE placed_in SET Quantity = ? WHERE CartID = ? AND ItemID = ?', [quantity, cartId, itemId], callback);
    });
});
}

// delete item from cart
const deleteItemFromCart = (cartId, itemId, callback) => {
    // check if cart exists
    db.query('SELECT * FROM cart WHERE CartID = ?', [cartId], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.length === 0) {
            return callback('Cart does not exist', null);
        }

        // check if the item is already in cart
        // if it is, delete the item
        // if not, throw an error
        db.query('SELECT * FROM placed_in WHERE CartID = ? AND ItemID = ?', [cartId, itemId], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            if (result.length === 0) {
                return callback('Item is not in cart', null);
            }

            db.query('DELETE FROM placed_in WHERE CartID = ? AND ItemID = ?', [cartId, itemId], callback);
        });
    });
}

// get all items in cart
const getItemsInCart = (cartId, callback) => {
    db.query('SELECT * FROM placed_in WHERE CartID = ?', [cartId], callback);
}

// get total of cart
const getCartTotal = (cartId, callback) => {
    db.query('SELECT SUM(Quantity * Price) AS Total FROM placed_in JOIN fishing_gear ON placed_in.ItemID = fishing_gear.ItemID WHERE CartID = ?', [cartId], callback);
}


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
