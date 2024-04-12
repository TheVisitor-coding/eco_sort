const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

const sequelize = new Sequelize( process.env.DATABASE_DSN, process.env.USER_DSN, process.env.PASSWORD_DSN, {
    host: process.env.HOST_DSN,
    dialect: 'mariadb',
})

const AuthenticateDatabase =  ( async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}); 



module.exports = AuthenticateDatabase