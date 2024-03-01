let options; 

const students = [];

while (options != 3) {
    options = Number(
        prompt(`
            Seja Bem-Vindo ao menu de notas...

            Escolha uma das opções:

            1 - Cadastrar Aluno e Notas.
            2 - Calcular media dos alunos.
            3 - sair do programa.
        `)
    );


    switch (options) {
        case 1:
            let name = prompt(`Escreva o nome do Aluno.`);
            let noteOne = Number(prompt(`Escreva a primeira nota.`));
            let noteTwo = Number(prompt(`Escreva a segunda nota.`));

            const student = registerStudent(name, noteOne, noteTwo);

            students.push(student);

            break;
        case 2:
            for (const student of students) {
                const media = (student.noteOne + student.noteTwo) / 2;

                const passingAverage =
                    media >= 7
                        ? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso`
                        : `Não foi dessa vez, ${student.name}! Tente outra vez`;

                alert(`
                    A media do(a) Aluno(a) ${student.name} é: ${media}.
                    ${passingAverage}
                `);
            }
            break;

        case 3:
            alert('Tchau');
            break;
        default:
            alert('Opção inválida. Tente novamente');
    }
}

function registerStudent (name,noteOne,noteTwo) {
    return {
        name: name,
        noteOne: noteOne,
        noteTwo: noteTwo
    };
};