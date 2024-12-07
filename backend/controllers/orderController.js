const order = require('../models/orderModel');

const createOrder = (req, res) => {
    const { cartId, transactionId, shippingAddress } = req.body;

    order.createOrder(cartId, transactionId, shippingAddress, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        return res.status(200).json({ message: 'Order created' });
    });
}

const getOrderById = (req, res) => {
    const { orderId } = req.params;

    order.getOrderById(orderId, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        return res.status(200).json(result);
    });
}

const getOrderDetails = (req, res) => {
    const { orderId } = req.params;

    order.getOrderDetails(orderId, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        return res.status(200).json(result);
    });
}

const updateOrderStatus = (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    order.updateOrderStatus(orderId, status, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        return res.status(200).json({ message: 'Order status updated' });
    });
}

const deleteOrder = (req, res) => {
    const { orderId } = req.params;

    order.deleteOrder(orderId, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        return res.status(200).json({ message: 'Order deleted' });
    });
}

module.exports = {
    createOrder,
    getOrderById,
    getOrderDetails,
    updateOrderStatus,
    deleteOrder
}


