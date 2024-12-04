const db = require('../config/db');

// get all fishing gear items
const getAllFishingGear = (callback) => {
    db.query('SELECT * FROM fishing_gear', callback);
};

// get fishing gear item by id
const getGearById = (itemId, callback) => {
    db.query('SELECT * FROM fishing_gear WHERE ItemID = ?', [itemId], callback);
};

// create a new fishing gear item
const createGear = (quanitityInStock,description,stockStatus,discount,price,callback) => {
    db.query(
        'insert into fishing_gear (QuantityInStock, Description, StockStatus, Discount, Price) values (?,?,?,?,?)',
        [quanitityInStock,description,stockStatus,discount,price],
        callback
    );
};

// update stock quantity
const updateStock = (itemId, quantity, callback) => {
    db.query('UPDATE fishing_gear SET QuantityInStock = ? WHERE ItemID = ?', [quantity, itemId], callback);
};

// update fishing gear price
const updatePrice = (itemId, price, callback) => {
    db.query('UPDATE fishing_gear SET Price = ? WHERE ItemID = ?', [price, itemId], callback);
};

// delete fishing gear item
const deleteGear = (itemId, callback) => {
    db.query('DELETE FROM fishing_gear WHERE ItemID = ?', [itemId], callback);
};

module.exports = {
    getAllFishingGear,
    getGearById,
    createGear,
    updateStock,
    updatePrice,
    deleteGear
};