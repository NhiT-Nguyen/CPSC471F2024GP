const fishModel = require('../models/fishModel');


// get all fish
const getAllFish = (req, res) => {
    fishModel.getAllFish((err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// get fish by scientific name
const getFishByName = (req, res) => {
    const { scientificName } = req.params;
    fishModel.getFishByName(scientificName, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

const getFishLures = (req, res) => {
    const { scientificName } = req.params;
    fishModel.getFishLures(scientificName, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// get common name

const getFishCommonNames = (req, res) => {
    const { scientificName } = req.params;
    fishModel.getFishCommonNames(scientificName, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
}

// get all locations
const getFishingLocations = (req, res) => {
    fishModel.getFishingLocations((err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
}

// get fishing type by loc
const getFishingTypesByLoc = (req, res) => {
    const { location } = req.params;
    fishModel.getFishingTypesByLoc(location, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
}

// create fish
const createFish = (req, res) => {
    const { scientificName, size, description, freshOrSaltwater, weight } = req.body;
    if (!scientificName || !size || !description || !freshOrSaltwater || !weight) {
        res.status(400).send('Missing input');
        return;
    }
    fishModel.createFish(scientificName, size, description, freshOrSaltwater, weight, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.status(201).json({message: 'Fish created successfully'});
    });
};

// create common name 
const createCommonName = (req, res) => {
    const { scientificName, commonName } = req.body;
        if (!scientificName || !commonName) {
            res.status(400).send('Missing input');
            return;
        }
        fishModel.createCommonName(scientificName, commonName, (err, results) => {

        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.status(201).json({message: 'Common name created successfully'});
    });
}

// create lure
const createSuitableLure = (req, res) => {
    const { scientificName, lureType } = req.body;
    if (!scientificName || !lureType) {
        res.status(400).send('Missing input');
        return;
    }
    fishModel.createSuitableLure(scientificName, lureType, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.status(201).json({message: 'Lure created successfully'});
    });
};

//update fish
const updateFish = (req, res) => {
    const { scientificName} = req.params;
    const { size, description, freshOrSaltwater, weight } = req.body;
    if (!description || !freshOrSaltwater || !weight) {
        res.status(400).send('Missing input');
        return;
    }
    fishModel.updateFish(scientificName, size, description, freshOrSaltwater, weight, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({message: 'Fish updated successfully'});
    });
};

// delete fish
const deleteFish = (req, res) => {
    const { scientificName } = req.params;
    fishModel.deleteFish(scientificName, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json({message: 'Fish deleted successfully'});
    });
};

module.exports = {
    getAllFish,
    getFishByName,
    getFishLures,
    getFishCommonNames,
    getFishingLocations,
    getFishingTypesByLoc,
    createFish,
    createCommonName,
    createSuitableLure,
    updateFish,
    deleteFish
};