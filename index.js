const express = require('express');
const app = express();
const sequelize =require("./database/conexao");
const alunos=require("./database/alunos");


sequelize.authenticate().then(function(){
    console.log("Conectou");
}).catch(error => console.log(error)) ;

app.set('view engine','ejs');


app.get('/alunos', async (req,res)=>{
    try {
        const todosOsAlunos = await alunos.findAll();
        res.send(todosOsAlunos); 
    } catch (error) {
        console.log("deu erro",error);
        res.send("deu erro",error);
    }   

});

app.get('/alunos/:id', async (req,res)=>{
    try {
        res.send(await alunos.findOne({
            where:{
                id:req.params.id,
            }
        }))
    } catch (error) {
        console.log("deu erro",error);
        res.send("deu erro",error);
    }
});

app.post('/alunos',async (req,res)=>{
    try {
        await alunos.create({
            nome:"naelson",
            cpf:"22323333",
            endereco:"rua naelson", 
        });
        console.log("sucesso");
        res.send("sucesso");    
    } catch (error) {
        console.log("deu erro: ",error);
        res.send("deu erro: ",error);
    }
    

});

app.delete('/alunos/:id', async (req,res)=>{
    try {
        await alunos.destroy({
            where:{
                id:req.params.id
            }
        }); 
        res.sendStatus(200);
    } catch (error) {
        console.log("deu erro",error);
        res.send("deu erro",erro);
    }
});

app.put('/alunos/:id',function(req,res){

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











