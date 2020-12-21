const Sequelize = require('sequelize');
const sequelize = new Sequelize('escola','root','M4theus$$',
{host:'127.0.0.1', dialect:'mysql'});



module.exports=sequelize;