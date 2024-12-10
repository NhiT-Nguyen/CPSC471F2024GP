const express = require('express');
const fishController = require('../controllers/fishController');
const router = express.Router();

// get all fish
router.get('/fish', fishController.getAllFish);

// get fish by scientific name
router.get('/fish/scientificName/:scientificName', fishController.getFishByName);

// get common name
router.get('/fish/commonNames/:scientificName', fishController.getFishCommonNames);

// get suitable lures
router.get('/fish/suitableLures/:scientificName', fishController.getFishLures);

// get all locations
router.get('/locations', fishController.getFishingLocations);

// get fishing type by loc
router.get('/locations/:location', fishController.getFishingTypesByLoc);

// create fishing location
router.post('/locations', fishController.createFishingLocation);

// create a new fish
router.post('/fish', fishController.createFish);

// create a new common name
router.post('/fish/commonNames', fishController.createCommonName);

// create a new suitable lure
router.post('/fish/suitableLures', fishController.createSuitableLure);

// update fish  
router.put('/fish/:scientificName', fishController.updateFish);

// delete fish
router.delete('/fish/:scientificName', fishController.deleteFish);
module.exports = router;