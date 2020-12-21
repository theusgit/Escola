const alunos = require("../database/alunos");

async function pegarTodos() {
    return await alunos.findAll();
}

async function pegarPorId(id) {
    return await alunos.findOne({
        where:{
            id,
        }
    })
    
}

async function criarNovoAluno(nome,cpf,endereco) {
    return await alunos.create({
        nome,
        cpf,
        endereco,       
    });
    
}

async function deletarAluno(id){
    await alunos.destroy({
        where:{
            id
        }
    }); 
}

async  function atualizarAluno(id,nome,cpf,endereco){
    return await alunos.update({
        nome,
        cpf,
        endereco, 
    },{where:{id}});    
}

module.exports={
    pegarTodos,
    pegarPorId,
    criarNovoAluno,
    deletarAluno,
    atualizarAluno
};






