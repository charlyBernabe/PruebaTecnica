const sequelize = require('sequelize');
const sequelizeConnection = new Sequelize(process.env.database, 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelizeConnection;