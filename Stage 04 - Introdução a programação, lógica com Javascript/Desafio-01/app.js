let numberOne = Number(
    prompt(`Vamos calcular ?
Insira o primeiro numero`)
);

let numberTwo = Number(
    prompt(`Insira o segundo numero`)
);


const sum = numberOne + numberTwo;
const subtraction = numberOne - numberTwo;
const multiplication = numberOne * numberTwo;
const division = numberOne / numberTwo;

const restOfTheDivision = numberOne % numberTwo;

const evenOrOdd = restOfTheDivision === 0 ? "PAR" : "IMPAR";

const numberEquals = numberOne === numberTwo ? 'iguais' : 'diferentes';

alert(`
    A soma dos números é: ${sum}.
    A subtração dos números é: ${subtraction}.
    A divisão dos números é: ${division}.
    O resta da divisão dos números é: ${restOfTheDivision}.
    A multiplicação dos números é: ${multiplication}.
    O números é: ${evenOrOdd}.
    Os números são: ${numberEquals}.
    
`);