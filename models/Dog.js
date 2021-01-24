const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model { }

Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    characteristic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'survey'
  }
);

module.exports = Dog;