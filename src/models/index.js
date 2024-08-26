const { Sequelize } = require("sequelize");

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

// Test connection
sequelize
  .authenticate()
  .then(() => console.log("Database connection established."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = { sequelize };
