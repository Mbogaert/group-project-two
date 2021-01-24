const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
