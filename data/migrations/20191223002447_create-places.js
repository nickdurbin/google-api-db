exports.up = async function(knex, Promise) {
  return await knex.schema.createTable('places', table => {
    table.increments()

    table.string('name').notNull()
    table.string('address').notNull()
    table.integer('zipcode').notNull()
    table.string('website')
  })
};

exports.down = async function(knex, Promise) {
  return await knex.schema.dropTableIfExists('places')
};