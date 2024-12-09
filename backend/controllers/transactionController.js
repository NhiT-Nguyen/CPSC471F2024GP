const transaction = require('../models/transactionModel');

const createTransaction = (req, res) => {
    const { cartId, memUsername, cardNum, cardExpDate, cvNum, amount, date } = req.body;

    transaction.createTransaction(cartId, memUsername, cardNum, cardExpDate, cvNum, amount, date, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        return res.status(200).json(result);
    });
}

const getAllTransactions = (req, res) => {
    transaction.getAllTransactions((err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        return res.status(200).json(result);
    });
}

const getTransactionById = (req, res) => {
    const { transactionId } = req.params;

    transaction.getTransactionById(transactionId, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        return res.status(200).json(result);
    });
}

const getTransactionByMember = (req, res) => {
    const { memUsername } = req.params;

    transaction.getTransactionByMember(memUsername, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        return res.status(200).json(result);
    });
}

const updateTransactionStatus = (req, res) => {
    const { transactionId } = req.params;
    const { status } = req.body;

    transaction.updateTransactionStatus(transactionId, status, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        return res.status(200).json(result);
    });
}

module.exports = {
    createTransaction,
    getAllTransactions,
    getTransactionById,
    getTransactionByMember,
    updateTransactionStatus
};