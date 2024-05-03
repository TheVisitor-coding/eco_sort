const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/DbConnexion.js')

class Company extends Model {}

Company.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    code: {
        type: DataTypes.STRING(19),
        allowNull: false,
        unique: true
    },
    logo: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    siren: {
        type: DataTypes.STRING(9),
        allowNull: false,
        unique: true
    },
    slug:{
        type: DataTypes.STRING,
        lowercase: true,
        unique: true

      },
    created_at: {
        type: DataTypes.TIMESTAMP,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'company',
    tableName: 'company',
    timestamps: false, // Manually handling 'created_at'
});

module.exports = Company;
