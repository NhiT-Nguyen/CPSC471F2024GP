const db = require('../config/db');


// get all fish
const getAllFish = (callback) => {
    db.query('SELECT * FROM FISH', callback);

}

// get fish by scientific name
const GetFishByName = (scientificName, callback) => {
    db.query('SELECT * FROM FISH WHERE ScientificName = ?', [scientificName], callback);
}

// get common name for scientific name
const getFishCommonNames = (scientificName, callback) => {
    db.query('SELECT * FROM FISH_COMMON_NAMES WHERE FScientificName = ?', [scientificName], callback);
}

// get suitable lures for fish
const getFishLures = (scientificName, callback) => {
    db.query('SELECT * FROM FISH_SUITABLE_LURES WHERE FScientificName = ?', [scientificName], callback);
}

// get fishing locations
const getFishingLocations = (callback) => {
    db.query('SELECT * FROM FISHING_LOCATION', callback);
}

// get fishing types for location
const getFishingTypesByLoc = (location, callback) => {
    db.query('SELECT * FROM FISHING_TYPES_LOC WHERE LocName = ?', [location], callback);
}

// create a new fish
const createFish = (scientificName, size, description, freshOrSaltwater, weight, callback) => {
    db.query(
        'insert into FISH (ScientificName, Size, Description, FreshOrSaltwater, Weight) values (?,?,?,?,?)',
        [scientificName, size, description, freshOrSaltwater, weight],
        callback
    );
}

// create a new common name for fish
const createCommonName = (scientificName, commonName, callback) => {
    db.query(
        'insert into FISH_COMMON_NAMES (FScientificName, CommonName) values (?,?)',
        [scientificName, commonName],
        callback
    );
}

// create a new suitable lure for fish
const createSuitableLure = (scientificName, lureType, callback) => {
    db.query(
        'insert into FISH_SUITABLE_LURES (FScientificName, LureType) values (?,?)',
        [scientificName, lureType],
        callback
    );
}

// create a new fishing location
const createFishingLocation = (name, country, callback) => {
    db.query(
        'insert into FISHING_LOCATION (Name, Country) values (?,?)',
        [name, country],
        callback
    );
}

// create a new fishing type for location
const createFishingType = (locName, fishingType, callback) => {
    db.query(
        'insert into FISHING_TYPES_LOC (LocName, FishingType) values (?,?)',
        [locName, fishingType],
        callback
    );
}

// update fish
const updateFish = (scientificName, size, description, freshOrSaltwater, weight, callback) => {
    db.query(
        'UPDATE FISH SET Size = ?, Description = ?, FreshOrSaltwater = ?, Weight = ? WHERE ScientificName = ?',
        [size, description, freshOrSaltwater, weight, scientificName],
        callback
    );
}

// update common name
const updateCommonName = (scientificName, commonName, callback) => {
    db.query(
        'UPDATE FISH_COMMON_NAMES SET CommonName = ? WHERE FScientificName = ?',
        [commonName, scientificName],
        callback
    );
}

// update suitable lure
const updateSuitableLure = (scientificName, lureType, callback) => {
    db.query(
        'UPDATE FISH_SUITABLE_LURES SET LureType = ? WHERE FScientificName = ?',
        [lureType, scientificName],
        callback
    );
}

// update fishing location
const updateFishingLocation = (name, country, callback) => {
    db.query(
        'UPDATE FISHING_LOCATION SET Country = ? WHERE Name = ?',
        [country, name],
        callback
    );
}

// update fishing type
const updateFishingType = (locName, fishingType, callback) => {
    db.query(
        'UPDATE FISHING_TYPES_LOC SET FishingType = ? WHERE LocName = ?',
        [fishingType, locName],
        callback
    );
}

// delete fish by scientific name
const deleteFish = (scientificName, callback) => {
    db.query('DELETE FROM FISH WHERE ScientificName = ?', [scientificName], callback);
}

// delete common name by scientific name
const deleteCommonName = (scientificName, callback) => {
    db.query('DELETE FROM FISH_COMMON_NAMES WHERE FScientificName = ?', [scientificName], callback);
}

// delete suitable lure by scientific name
const deleteSuitableLure = (scientificName, callback) => {
    db.query('DELETE FROM FISH_SUITABLE_LURES WHERE FScientificName = ?', [scientificName], callback);
}

// delete fishing location by name

const deleteFishingLocation = (name, callback) => {
    db.query('DELETE FROM FISHING_LOCATION WHERE Name = ?', [name], callback);
}

// delete fishing type by location
const deleteFishingType = (locName, callback) => {
    db.query('DELETE FROM FISHING_TYPES_LOC WHERE LocName = ?', [locName], callback);
}

module.exports = {
    getAllFish,
    GetFishByName,
    getFishCommonNames,
    getFishLures,
    getFishingLocations,
    getFishingTypesByLoc,
    createFish,
    createCommonName,
    createSuitableLure,
    createFishingLocation,
    createFishingType,
    updateFish,
    updateCommonName,
    updateSuitableLure,
    updateFishingLocation,
    updateFishingType,
    deleteFish,
    deleteCommonName,
    deleteSuitableLure,
    deleteFishingLocation,
    deleteFishingType
};