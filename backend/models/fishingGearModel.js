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

// add fishing type to gear item
const addFishingTypeToGear = (itemId, fishingType, callback) => {
    db.query('INSERT INTO FISHING_TYPES_GEAR (ItemID, FishingType) VALUES (?, ?)', [itemId, fishingType], callback);
};

// Get fishing types for a gear item
const getFishingTypesForGear = (itemId, callback) => {
    db.query('SELECT FishingType FROM FISHING_TYPES_GEAR WHERE ItemID = ?', [itemId], callback);
};

// Delete a fishing type from a gear item
const deleteFishingTypeFromGear = (itemId, fishingType, callback) => {
    db.query('DELETE FROM FISHING_TYPES_GEAR WHERE ItemID = ? AND FishingType = ?', [itemId, fishingType], callback);
};

// Add admin sourced by
const addAdminSourcedBy = (aUser,ItemID, callback) => {
    db.query('INSERT INTO SOURCED_BY (AUsername,ItemID) VALUES (?, ?)', [aUser,ItemID], callback);
};

// Get admin sourced by
const getAdminSourcedBy = (ItemID, callback) => {
    db.query('SELECT AUsername FROM SOURCED_BY WHERE ItemID = ?', [ItemID], callback);
};

// Delete admin sourced by
const deleteAllAdminSourcedBy = (ItemID, callback) => {
    db.query('DELETE FROM SOURCED_BY WHERE ItemID = ?', [ItemID], callback);
};

// delete specific admin sourced by
const deleteAdminSourcedBy = (ItemID, AUsername, callback) => {
    db.query('DELETE FROM SOURCED_BY WHERE ItemID = ? AND AUsername = ?', [ItemID, AUsername], callback);
};

// get all gear sourced by a specific admin
const getGearSourcedByAdmin = (AUsername, callback) => {
    db.query('SELECT ItemID FROM SOURCED_BY WHERE AUsername = ?', [AUsername], callback);
};

module.exports = {
    getAllFishingGear,
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