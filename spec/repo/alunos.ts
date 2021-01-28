import 'jasmine';
const alunos = require("../../database/alunos");
const alunosrepo=require("../../repo/alunos");

describe('repo/alunos.js',()=>{
    it('pegarTodos',async()=>{
        spyOn(alunos,'findAll').and.returnValue({
            nome:'valdir',
            cpf:'4273727372'
        });
        await alunosrepo.pegarTodos();
        expect(alunos.findAll).toHaveBeenCalledTimes(1);
    });
});