const express = require('express');
const webpush = require('web-push');
const asyncHandler = require('express-async-handler');

const { getTrips, addTrip, deleteTrip, patchTrip } = require('../controllers/trips');
require('dotenv').config();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

const subscription = [];

const router = express.Router();

webpush.setVapidDetails('mailto:lang.s03@htlwienwest.at', publicVapidKey, privateVapidKey);

router.get('/trips', getTrips);
router.delete('/trip/:id', deleteTrip);
router.post('/trip/', addTrip);
router.patch('/trip/:id', patchTrip);

router.post(
  '/subscribe',
  asyncHandler(async (req, res) => {
    subscription.push(req.body);
    res.status(201).end();
  }),
);

router.post('/notify', (req) => {
  const payload = JSON.stringify({ title: 'Push Notification', body: req.body });
  for (const sub of subscription) {
    try {
      webpush.sendNotification(sub, payload);
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports = router;
