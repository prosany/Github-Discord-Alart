require("dotenv").config();

let config = {};

config.PORT = process.env.PORT || 5090;

module.exports = config;
