const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');
const bcrypt = require('brcrypt');
const { beforeCreate, beforeUpdate } = require('./comment');
 
class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.comparesync(
            loginPW, this.password
        );
    }
}

User.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
    
});

module.exports = User;``