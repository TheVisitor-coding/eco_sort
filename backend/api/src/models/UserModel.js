const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/DbConnexion.js')

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'company', // This model name 'company' must match the model name you define for your company table
            key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
    },
    first_name: {
        type: DataTypes.STRING(45),
        allowNull: false 
    },
    last_name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false
    },
    is_active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    profil_image: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    created_at: {
        type: DataTypes.TIMESTAMP,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.TIMESTAMP,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user',
    tableName: 'user',
    timestamps: false, // Since you've defined custom timestamp fields
});

module.exports = User;
