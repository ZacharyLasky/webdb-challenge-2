module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
    filename: './data/car-dealer.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
  }
};

//to create a migration: knex migrate:make
//to run all pending migrations: knex migrate:latest
//to undo migrations: knex migrate:rollback