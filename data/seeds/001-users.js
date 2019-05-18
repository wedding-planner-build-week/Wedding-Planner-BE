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
      username: "dog",
      password: bcrypt.hashSync("password", 14),
      email: "ilovedogs@gmail.com",
      location: "San Diego, CA"
    }
  ]);
};
