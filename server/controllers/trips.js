const asyncHandler = require('express-async-handler');
const model = require('../model/trips');

const getTrips = asyncHandler(async (req, res) => {
  const trips = await model.getTrips();
  return res.status(200).json({ code: 200, data: trips });
});

const addTrip = asyncHandler(async (req, res) => {
  const [{ id }] = await model.addTrip(req.body);
  if (id > 0) return res.status(200).josn({ code: 200, data: 'Wurde hinzugefügt' });

  return res.status(500).json({ code: 500, data: 'Server Error' });
});

const deleteTrip = asyncHandler(async (req, res) => {
  const [{ name }] = await model.deleteTrip(req.params.id);
  return res.status(200).json({ code: 200, data: `${name} wurde gelöscht` });
});

module.exports = {
  getTrips,
  addTrip,
  deleteTrip,
};
