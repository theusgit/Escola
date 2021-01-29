
const alunos = require("../../database/alunos");
const alunosrepo = require("../../repo/alunos");

describe('repo/alunos.js', () => {
    it('pegarTodos', async () => {
        spyOn(alunos, 'findAll').and.returnValue([{
            nome: 'valdir',
            cpf: '4273727372'
        }]);
        const resultado = await alunosrepo.pegarTodos();
        expect(alunos.findAll).toHaveBeenCalledTimes(1);
        expect(resultado).toEqual(
            [{
                nome: 'valdir',
                cpf: '4273727372'
            }]
        )
    });
    it('pergarPorId', async () => {
        spyOn(alunos, 'findOne').and.returnValue({
            id: 1,
            nome: 'valdir',
            cpf: '4273727372'
        });
        const resultado = await alunosrepo.pegarPorId(1);
        expect(alunos.findOne).toHaveBeenCalledTimes(1);
        expect(resultado).toEqual(
            {
                id: 1,
                nome: 'valdir',
                cpf: '4273727372'
            }
        )
        expect(alunos.findOne).toHaveBeenCalledWith({ where: { id: 1 } })
    })
    it('criarNovoAluno', async () => {
        spyOn(alunos, 'create').and.returnValue({
            nome: 'valdir',
            cpf: '4273727372',
            endereco: 'rua frutos'
        })
        const resultado = await alunosrepo.criarNovoAluno('valdir', '4273727372', 'rua frutos');
        expect(alunos.create).toHaveBeenCalledTimes(1);
        expect(resultado).toEqual(
            {
                nome: 'valdir',
                cpf: '4273727372',
                endereco: 'rua frutos'
            }
        )
        expect(alunos.create).toHaveBeenCalledWith({
            nome: 'valdir',
            cpf: '4273727372',
            endereco: 'rua frutos'
        });
    })
    it('deletarAluno', async () => {
        spyOn(alunos, 'destroy').and.stub()
        await alunosrepo.deletarAluno(1);
        expect(alunos.destroy).toHaveBeenCalledTimes(1);
        expect(alunos.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
    })
    it('atualizarAluno', async () => {
        spyOn(alunos, 'update').and.returnValue({ nome: 'valdir', cpf: '4273727372', endereco: 'rua frutos' });
        const resultado = await alunosrepo.atualizarAluno(1, 'valdir', '4273727372', 'rua frutos');
        expect(alunos.update).toHaveBeenCalledTimes(1);
        expect(alunos.update).toHaveBeenCalledWith({
            nome: 'valdir',
            cpf: '4273727372',
            endereco: 'rua frutos'
        },{where:{id:1}});
    })
});