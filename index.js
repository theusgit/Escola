const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const sequelize =require("./database/conexao");
const alunos=require("./database/alunos");
const alunosRepo = require("./repo/alunos");

sequelize.authenticate().then(function(){
    console.log("Conectou");
}).catch(error => console.log(error)) ;

app.set('view engine','ejs');
app.use(express.static('public'));
//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/alunos', async (req,res)=>{
    try {
        res.status(200).send(await alunosRepo.pegarTodos());
    } catch (error) {
        console.log("deu erro",error);
        res.send("deu erro",error);
    }   

});

app.get('/alunos/:id', async (req,res)=>{
    try {
        res.status(200).send(await alunosRepo.pegarPorId(req.params.id));
    } catch (error) {
        console.log("deu erro",error);
        res.send("deu erro",error);
    }
});

app.post('/alunos',async (req,res)=>{
    try {
        res.status(200).send(await alunosRepo.criarNovoAluno(
            req.body.nome,
            req.body.cpf,
            req.body.endereco
        ));
    } catch (error) {
        console.log("deu erro: ",error);
        res.send("deu erro: ",error);
    }


});


app.get("",async(req,res)=>{
    res.render("index");
});

app.delete('/alunos/:id', async (req,res)=>{
    try {
        res.status(200).send(await alunosRepo.deletarAluno(req.params.id))
    } catch (error) {
        console.log("deu erro",error);
        res.send("deu erro",erro);
    }
});

app.put('/alunos/:id',async (req,res)=>{
    try {
        res.status(200).send(await alunosRepo.atualizarAluno(
            req.params.id,
            req.body.nome,
            req.body.cpf,
            req.body.endereco
        ))
    } catch (error) {
        console.log("deu erro: ",error);
        res.send("deu erro: ",error);
    }


});




app.listen(4002,function(erro){
    if(erro){
    console.log("Não funcionou")
}else{
    console.log("Servidor rodando")
}
});








//criar constante que recebe o express
//express função dentro da const app para ser usado
//constante da funçaõ express com listen numero da porta função com parâmetro de erro
//se erro aparecer um console de ocorreu um erro
//se não servidor rodando
//criar rota constante express com função get(pegar)('/')iniciando
//a rota deve receber os parâmetros que o user colocar na url
//função que recebe os parâmetros req e res
// uma var deve receber a requisição.função dos parâmetros. nome da rota
//responder com uma mensagem e exibir o que o user colocou na rota











