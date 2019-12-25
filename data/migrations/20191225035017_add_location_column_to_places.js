exports.up = function(knex, Promise) {
  return knex.schema.table('places', function(places) {
    places.decimal('lat')
    places.decimal('long')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('places', function(places) {
    places.dropColumn('lat')
    places.dropColumn('long')
  })
};