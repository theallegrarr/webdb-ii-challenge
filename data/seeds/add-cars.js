
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'ABQ 311', Model: 'Toyota Camry', Mileage: 3400},
        {VIN: 'CCC 747', Model: 'Chevrolet Camaro', Mileage: 200},
        {VIN: 'NYC 851', Model: 'Lincoln Navigator', Mileage: 1200}
      ]);
    });
};
