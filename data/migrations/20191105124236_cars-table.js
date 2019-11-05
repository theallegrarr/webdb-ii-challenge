
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments('id');

    table.text('VIN', 128).unique().notNullable();
    table.text('Model', 128).notNullable();
    table.decimal('Mileage').defaultTo(0);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
