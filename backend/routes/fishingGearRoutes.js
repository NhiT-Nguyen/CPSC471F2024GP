const express = require('express');
const fishingGearController = require('../controllers/fishingGearController');
const router = express.Router();

// get all fishing gear items
router.get('/gear', fishingGearController.getFishingGear);

// get fishing gear item by id
router.get('/gear/:itemId', fishingGearController.getGearById);

// create a new fishing gear item
router.post('/gear', fishingGearController.createGear);

// update stock quantity
router.put('/gear/:itemId/stock', fishingGearController.updateStock);

// update fishing gear price
router.put('/gear/:itemId/price', fishingGearController.updatePrice);

// delete fishing gear item
router.delete('/gear/:itemId', fishingGearController.deleteGear);

// add fishing type to gear item
router.post('/gear/fishingtype/:itemId', fishingGearController.addFishingTypeToGear);

// get fishing types for a gear item
router.get('/gear/fishingtype/:itemId', fishingGearController.getFishingTypesForGear);

// delete a fishing type from a gear item
router.delete('/gear/fishingtype/:itemId/:fishingType', fishingGearController.deleteFishingTypeFromGear);

module.exports = router;
