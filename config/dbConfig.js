require("dotenv").config();
const { Sequelize } = require("sequelize");

console.log("Loaded Environment Variables:");
console.log("DATABASE:", process.env.DATABASE);
console.log("USERNAME:", process.env.USERNAME);
console.log("PASSWORD:", process.env.PASSWORD);

const sequelize = new Sequelize("kryzen", "sa", process.env.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    connectTimeout: 86400,
  },
  logging: console.log,
});

async function connectionToDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectionToDb();

module.exports = sequelize;
