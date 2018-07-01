const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
  getAllLocations
}

function getAllLocations() {
  return db('locations')
    .join('photos', 'locations.id', 'photos.location_id')
    .select('locations.id as id', 'locations.title as title', 'locations.label as label', 'locations.lat as lat', 'locations.lng as lng', 'locations.info as info', 'photos.title as imageTitle', 'photos.url as url')
}