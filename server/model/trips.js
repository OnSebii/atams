const db = require('../db');

const getTrips = async () => {
  const { rows } = await db.query('select * from trips;');
  return rows;
};

const addTrip = async (body) => {
  const { rows } = await db.query('insert into trips (name, gpscalls, distance, date) values ($1, $2, $3, $4) returning id', [body.name, body.gpscalls, body.distance, body.date]);
  return rows;
};

const deleteTrip = async (id) => {
  const { rows } = await db.query('delete from trips where id = $1 returning name', [id]);
  return rows;
};

const patchTrip = async (body, id) => {
  const { rows } = await db.query('select id from trips where id = $1', [id]);

  let upd = [];
  for (key in body) upd.push(`${key} = '${body[key]}'`);
  const cmd = 'UPDATE trips SET ' + upd.join(', ') + ' where id = $1';
  await db.query(cmd, [rows[0].id]);

  return '';
};

module.exports = { getTrips, deleteTrip, addTrip, patchTrip };
