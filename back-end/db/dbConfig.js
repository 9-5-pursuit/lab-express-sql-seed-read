// Postgres promise establishes connection between express and sql
const pgp = require("pg-promise")();
require("dotenv").config();

// Cn stands for connection
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);

//Code to display if connection has been made in terminal
//Postgres connection established
db.connect()
  .then((obj) => {
    console.log("Postgres connection established");
    obj.done();
  })
  .catch((e) => {
    console.log("ERROR:", e.message || e);
  });

module.exports = db;
