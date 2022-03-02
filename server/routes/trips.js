const express = require('express');
const { getTrips, addTrip, deleteTrip, patchTrip } = require('../controllers/trips');

const router = express.Router();

router.get('/trips', getTrips);
router.delete('/trip/:id', deleteTrip);
router.post('/trip/', addTrip);
router.patch('/trip/:id', patchTrip);

module.exports = router;
