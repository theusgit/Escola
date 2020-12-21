const Sequelize = require('sequelize');
const sequelize = require('./conexao');


const Alunos = sequelize.define('alunos',{
    nome:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    endereco:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    createdAt:{
        type:Sequelize.DATE,
        allowNull:true,
    },updatedAt:{
        type:Sequelize.DATE,
        allowNull:true,
    }
})

Alunos.sync({force:false}).then(()=>{});
module.exports=Alunos;