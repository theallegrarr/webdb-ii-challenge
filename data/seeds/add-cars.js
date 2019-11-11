
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'ABQ 311', Make: 'Toyota', Model: 'Camry', Mileage: 3400},
        {VIN: 'CCC 747', Make: 'Chevrolet', Model: 'Camaro', Mileage: 200},
        {VIN: 'NYC 851', Make: 'Lincoln', Model: 'Navigator', Mileage: 1200}
      ]);
    });
};
