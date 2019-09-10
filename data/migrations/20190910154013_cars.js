exports.up = function(knex) {
  // create a table called fruits
  return knex.schema.createTable("cars", table => {
    table.increments(); // defaults to 'id'
    table.integer("VIN").unique().notNullable()
    table.string("make").notNullable()
    table.string("model").notNullable()
    table.integer("milage").notNullable()
    table.string("transmission type")
    table.string("title status")
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};