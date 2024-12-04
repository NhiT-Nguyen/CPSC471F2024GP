const fishingGearModel = require('../models/fishingGearModel');

// get all fishing gear items
const getFishingGear = (req, res) => {
    fishingGearModel.getAllFishingGear((err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// get fishing gear item by id
const getGearById = (req, res) => {
    const { itemId } = req.params;
    fishingGearModel.getGearById(itemId, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// create a new fishing gear item
const createGear = (req, res) => {
    const { quanitityInStock, description, stockStatus, discount, price } = req.body;
    fishingGearModel.createGear(quanitityInStock, description, stockStatus, discount, price, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// update stock quantity
const updateStock = (req, res) => {
    const { itemId } = req.params;
    const { quantity } = req.body;
    fishingGearModel.updateStock(itemId, quantity, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// update fishing gear price

const updatePrice = (req, res) => {
    const { itemId } = req.params;
    const { price } = req.body;
    fishingGearModel.updatePrice(itemId, price, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
}

// delete fishing gear item
const deleteGear = (req, res) => {
    const { itemId } = req.params;
    fishingGearModel.deleteGear(itemId, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Item deleted successfully' });
    });
};

module.exports = {
    getFishingGear,
    getGearById,
    createGear,
    updateStock,
    updatePrice,
    deleteGear
};