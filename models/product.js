const { Sequelize } = require("sequelize");

const sequelize = require("../config/dbConfig");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,

    autoIncrement: true,

    allowNull: false,

    primaryKey: true,
  },

  title: { type: Sequelize.STRING, allowNull: false },

  price: { type: Sequelize.DECIMAL, allowNull: false },

  category: { type: Sequelize.STRING, allowNull: false },
  image: { type: Sequelize.BLOB, allowNull: false },
  rating: { type: Sequelize.JSON, allowNull: false },
});

module.exports = Product;
