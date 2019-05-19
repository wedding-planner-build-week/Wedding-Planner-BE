const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      username: "mary",
      password: bcrypt.hashSync("password", 14),
      email: "mary@mary.com",
      location: "Boston, MA"
    },
    {
      username: "sarah",
      password: bcrypt.hashSync("password", 14),
      email: "567@567.com",
      location: "Austin, TX"
    },
    {
      username: "karen",
      password: bcrypt.hashSync("password", 14),
      email: "789@789.com",
      location: "Orlando, FL"
    }
  ]);
};
