const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    
    host: 'localhost',
    dialect: 'mysql',
    port: '3000'

});

module.exports = sequelize;