const S = require("sequelize");

const sequelize = new S("tmdberik", null, null,{
    dialect: "postgres",
    host: "localhost",
    logging: false
});

module.exports = sequelize;