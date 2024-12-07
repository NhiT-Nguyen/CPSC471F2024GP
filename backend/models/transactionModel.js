/*CREATE TABLE TRANSACTION (
    TransactionID		INT			NOT NULL,
    CartID			INT			NOT NULL,
    MemUsername		VARCHAR(20)		NOT NULL,
    Status			VARCHAR(20)		NOT NULL,
    CardNum		VARCHAR(16)		NOT NULL,
    CardExpDate		VARCHAR(4)		NOT NULL,
    CVNum		VARCHAR(3)		NOT NULL,
    Amount		FLOAT			NOT NULL,
    Date			DATE			NOT NULL,
    PRIMARY KEY (TransactionID),
    FOREIGN KEY (CartID) REFERENCES CART (CartID),
    FOREIGN KEY (MemUsername) REFERENCES MEMBER (MUsername)
    );*/

/* In order to checkout, a member must conduct a successful transaction, for their order to be
created. Also, a cart must be created with at least 1 item before an order can be placed.
A member can conduct as many transactions as they like, but each transaction can only be
associated with one cart and one order in order to successfully checkout.*/

const db = require('../config/db');
const { getCartTotal } = require('../db/dbUtils');

// create a transaction
// check if the amount is equal to the total amount of the cart

const createTransaction = (cartId, memUsername, cardNum, cardExpDate, cvNum, amount, date, callback) => {

    getCartTotal(cartId, (err, total) => {
        if (err) {
            return callback(err, null);
        }

        if (total !== amount) {
            return callback(new Error('Amount does not match cart total'), null);
        }

        const sql = `INSERT INTO TRANSACTION (CartID, MemUsername, Status, CardNum, CardExpDate, CVNum, Amount, Date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [cartId, memUsername, 'Pending', cardNum, cardExpDate, cvNum, amount, date];

        db.query(sql, values, (err, result) => {
            if (err) {
                return callback(err, null);
            }

            return callback(null, result);
        });
    });
}


// get all transactions
const getAllTransactions = (callback) => {
    db.query('SELECT * FROM TRANSACTION', callback);
}

// get transaction by ID
const getTransactionById = (transactionId, callback) => {
    db.query('SELECT * FROM TRANSACTION WHERE TransactionID = ?', [transactionId], callback);
}

// get transaction by member
const getTransactionByMember = (memUsername, callback) => {
    db.query('SELECT * FROM TRANSACTION WHERE MemUsername = ?', [memUsername], callback);
}

// update transaction status
const updateTransactionStatus = (transactionId, status, callback) => {
    db.query('UPDATE TRANSACTION SET Status = ? WHERE TransactionID = ?', [status, transactionId], callback);
}

module.exports = {
    createTransaction,
    getAllTransactions,
    getTransactionById,
    getTransactionByMember,
    updateTransactionStatus
};


