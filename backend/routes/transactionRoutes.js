const express = require('express');
const transactionController = require('../controllers/transactionController');
const router = express.Router();

router.get('/transaction', transactionController.getAllTransactions);

router.get('/transaction/:transactionId', transactionController.getTransactionById);

router.get('/transaction/:memUsername', transactionController.getTransactionByMember);

router.post('transaction/create', transactionController.createTransaction);

router.put('/transaction/update/:transactionId', transactionController.updateTransactionStatus);

module.exports = router;

