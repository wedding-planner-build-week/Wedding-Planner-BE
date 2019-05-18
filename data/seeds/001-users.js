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
      username: "tina",
      password: bcrypt.hashSync("password", 14),
      email: "123@123.com",
      location: "New York, NY"
    },
    {
      username: "linda",
      password: bcrypt.hashSync("password", 14),
      email: "345@345.com",
      location: "San Diego, CA"
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
