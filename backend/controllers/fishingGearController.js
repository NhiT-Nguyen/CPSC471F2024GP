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

const addFishingTypeToGear = (req, res) => {
    const { itemId, fishingType } = req.body;
    fishingGearModel.addFishingTypeToGear(itemId, fishingType, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Fishing type added to gear item' });
    });
};

const getFishingTypesForGear = (req, res) => {
    const { itemId } = req.params;
    fishingGearModel.getFishingTypesForGear(itemId, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

const deleteFishingTypeFromGear = (req, res) => {
    const { itemId, fishingType } = req.body;
    fishingGearModel.deleteFishingTypeFromGear(itemId, fishingType, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Fishing type deleted from gear item' });
    });
};

const addAdminSourcedBy = (req, res) => {
    const { aUser, ItemID } = req.body;
    fishingGearModel.addAdminSourcedBy(aUser, ItemID, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Admin sourced by added' });
    });
}

const getAdminSourcedBy = (req, res) => {
    const { ItemID } = req.params;
    fishingGearModel.getAdminSourcedBy(ItemID, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
}

const deleteAllAdminSourcedBy = (req, res) => {
    const { ItemID } = req.params;
    fishingGearModel.deleteAllAdminSourcedBy(ItemID, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'All admin sourced by deleted' });
    });
}

const deleteAdminSourcedBy = (req, res) => {
    const { ItemID, AUsername } = req.body;
    fishingGearModel.deleteAdminSourcedBy(ItemID, AUsername, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({ message: 'Admin sourced by deleted' });
    });
}

const getGearSourcedByAdmin = (req, res) => {
    const { AUsername } = req.params;
    fishingGearModel.getGearSourcedByAdmin(AUsername, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
}

module.exports = {
    getFishingGear,
    getGearById,
    createGear,
    updateStock,
    updatePrice,
    deleteGear,
    addFishingTypeToGear,
    getFishingTypesForGear,
    deleteFishingTypeFromGear,
    addAdminSourcedBy,
    getAdminSourcedBy,
    deleteAllAdminSourcedBy,
    deleteAdminSourcedBy,
    getGearSourcedByAdmin
};