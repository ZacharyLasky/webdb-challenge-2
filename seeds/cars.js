exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 100, make: "honda", model: "gg", milage: 20000, transmission_type: "good", title_status: "salvage" },
        { VIN: 200, make: "toyota", model: "hh", milage: 6799, transmission_type: "bad", title_status: "good" },
        { VIN: 300, make: "idk", model: "gg", milage: 676878, transmission_type: "bad", title_status: "salvage" },
        { VIN: 400, make: "spaghetti", model: "jj", milage: 245252, transmission_type: "good", title_status: "good" },
        { VIN: 500, make: "honda", model: "ll", milage: 2525, transmission_type: "bad", title_status: "good" },
        { VIN: 600, make: "honda", model: "oo", milage: 4525, transmission_type: "bad", title_status: "salvage" },
        { VIN: 700, make: "honda", model: "pp", milage: 2004524500, transmission_type: "good", title_status: "salvage" }
      ]);
    });
};
