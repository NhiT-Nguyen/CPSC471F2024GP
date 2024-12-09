const db = require('../config/db');
const utils = require('../db/dbUtils');

/*

CREATE TABLE `ORDER` (
OrderID		INT			NOT NULL,
TransactionID		INT			NOT NULL,
ShippingAddress	VARCHAR(50)		NOT NULL,
Date			DATE			NOT NULL,
Status			VARCHAR(20)		NOT NULL,
PRIMARY KEY (OrderID),
FOREIGN KEY (TransactionID) REFERENCES TRANSACTION (TransactionID)
);

CREATE TABLE ORDER_DETAILS (
OrderID		INT			NOT NULL,
ItemID			INT			NOT NULL,
Quantity		INT			NOT NULL,
FOREIGN KEY (OrderID) REFERENCES `ORDER` (OrderID),
FOREIGN KEY (ItemID) REFERENCES FISHING_GEAR (ItemID)
);

*/

// create order
// First check if there is a completed transaction with the associated cart id with status

const createOrder = (cartId,transactionId, shippingAddress, callback) => {
    // check transaction with cart id
    utils.checkTransactionCart(cartId, (err, exists) => {

        if (err) {
            return callback(err, null);
        }

        if (!exists) {
            return callback(new Error('Transaction does not exist'), null);
        }

        const sqlOrder = `INSERT INTO ORDER (TransactionID, ShippingAddress, Date, Status) VALUES (?, ?, ?, ?)`;
        const sqlDetails = `INSERT INTO ORDER_DETAILS (OrderID, ItemID, Quantity) SELECT o.OrderID, p.ItemID, p.Quantity FROM PLACED_IN p JOIN ORDER o ON p.CartID = ? WHERE o.TransactionID = ?`;
        const values = [transactionId, shippingAddress, new Date(), 'Pending'];

        db.query(sql, values, (err, result) => {
            if (err) {
                return callback(err, null);
            }

            db.query(sqlDetails, [cartId, transactionId], (err, result) => {
                if (err) {
                    return callback(err, null);
                }

                return callback(null, result);
            });
        });

    });
}


// get order
const getOrderById = (orderId, callback) => {
    db.query('SELECT * FROM ORDER WHERE OrderID = ?', [orderId], callback);
}

const getOrderDetails = (orderId, callback) => {
    db.query('SELECT * FROM ORDER_DETAILS WHERE OrderID = ?', [orderId], callback);
}
// update order
const updateOrderStatus = (orderId, status, callback) => {
    db.query('UPDATE ORDER SET Status = ? WHERE OrderID = ?', [status, orderId], callback);
}
// delete order
const deleteOrder = (orderId, callback) => {
    db.query('DELETE FROM ORDER WHERE OrderID = ?', [orderId], callback);
    db.query('DELETE FROM ORDER_DETAILS WHERE OrderID = ?', [orderId], callback);
}

module.exports = {
    createOrder,
    getOrderById,
    getOrderDetails,
    updateOrderStatus,
    deleteOrder
};
