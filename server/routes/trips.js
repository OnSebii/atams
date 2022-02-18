const express = require('express');
const { getTrips, addTrip, deleteTrip } = require('../controllers/trips');

const router = express.Router();

router.get('/trips', getTrips);
router.delete('/trip/:id', deleteTrip);
router.post('/trip/', addTrip);

module.exports = router;
