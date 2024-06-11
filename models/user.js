const { Sequelize } = require("sequelize");

const sequelize = require("../config/dbConfig");

const User = sequelize.define("user", {
  user_id: {
    type: Sequelize.INTEGER,

    autoIncrement: true,

    allowNull: false,

    primaryKey: true,
  },

  username: { type: Sequelize.STRING, allowNull: false },

  email: { type: Sequelize.STRING, allowNull: false },

  password: { type: Sequelize.STRING, allowNull: false },
});

module.exports = User;
