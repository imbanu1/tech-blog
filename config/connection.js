require("dotenv").config();
const Sequelize = require("sequelize");
let sequelize;

if (process.env.JAWSDB_URL) {
  // If JAWSDB_URL is set, use it for the connection
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Otherwise, use the environment variables for local connection
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
    },
  });
}

module.exports = sequelize;