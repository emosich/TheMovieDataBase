const S = require("sequelize");
const sequelize = require("../db");

class Favorites extends S.Model {}

Favorites.init(
  {
    idApi: {
      type: S.STRING,
      allowNull: false
    },
    title: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    year: {
      type: S.DATE,
      allowNull: true,
    },
  },
  { sequelize: sequelize, modelName: "favorites" }
);

module.exports = Favorites;