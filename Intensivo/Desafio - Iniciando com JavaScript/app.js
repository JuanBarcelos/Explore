let options;

while (options != 10) {
    options = Number(
        prompt(`
            Seja Bem-Vindo ao menu de notas...

            Escolha uma das opções:

            1 - Mensagem de Hello.
            2 - Calcular soma entre dois números.
            3 - Verificar se e um número ou não.
            4 - Verificar se e um texto ou não.
            5 - Verificar se e um boolean ou não.
            6 - Calcular subtração entre dois números.
            7 - Calcular multiplicação entre dois números.
            8 - Calcular divisão entre dois números.
            9 - Par ou Impar.
            10 - Sair.
        `)
    );

    switch (options) {
        case 1:
            helloWord();
            break;
        case 2:
            const numberOne = Number(prompt("Escolha o primeiro numero"));
            const numberTwo = Number(prompt('Escolha o segundo numero'));
            calculateSum(numberOne,numberTwo);
            break;
        case 3:
            const number = prompt('Escreva algo que vou dizer se e um numero ou não');
            itIsANumber(number);
            break;
        case 4:
            const text = prompt(
                'Escreva algo que vou dizer se e um texto ou não'
            );
            itIsString(text)
            break;
        case 5:
            const boolean = prompt(
                'Escreva algo que vou dizer se e um Boolean ou não'
            );
            itIsBoolean(boolean)
            break;
        case 6:
            const numberA = Number(prompt('Escolha o primeiro numero'));
            const numberB = Number(prompt('Escolha o segundo numero'));
            calculateSubtraction(numberA, numberB);
            break;
        case 7:
            const x = Number(prompt('Escolha o primeiro numero'));
            const y = Number(prompt('Escolha o segundo numero'));
            calculateMultiplication(x, y);
            break;
        case 8:
            const numberX = Number(prompt('Escolha o primeiro numero'));
            const numberY = Number(prompt('Escolha o segundo numero'));
            calculateDivision(numberX, numberY);
            break;
        case 9:
            const numberEvenOrOdd = Number(prompt('Escolha o numero'));
            evenOrOdd(numberEvenOrOdd);
            break;
        case 10:
            alert('Tchau')
            break;

        default:
            alert("Escolha uma opção valida")
            break;
    }
}

function helloWord() {
    alert("Hello Word...")
};

function calculateSum (numberOne, numberTwo){
    const sum = numberOne + numberTwo;
    return alert(`A soma entre os dois números e: ${sum}`);
}

function calculateSubtraction (numberOne, numberTwo) {
    const subtraction = numberOne - numberTwo;
    if(subtraction < 0){
        return alert(
            `A soma entre os dois números e: ${numberTwo - numberOne}`
        );
    }
    return alert(`A soma entre os dois números e: ${subtraction}`);
}

function calculateMultiplication(numberOne, numberTwo) {
    const multiplication = numberOne * numberTwo;
    return alert(`A soma entre os dois números e: ${multiplication}`);
}

function calculateDivision(numberOne, numberTwo) {
    const division = numberOne / numberTwo;
    return alert(`A soma entre os dois números e: ${division}`);
}

function itIsANumber(number) {
    const response = Number(number)
    if (!isNaN(response)) {
        return alert(`E um número`);
    } else {
        return alert(`Não e um número`);
    }
    
}

function itIsString(text) {
    if (typeof text === 'string') {
        return alert(`E um texto`);
    }else{
        return alert(`Não e um texto`);
    }
}
    
function itIsBoolean(text) {
    if (text === 'true' || text === 'false') {
        return alert(`E um Boolean`);
    }else{
        return alert(`Não e um Boolean`);
    }
}

function evenOrOdd(number){
    if(number % 2 === 0){
        return alert('É um número par');
    }

    return alert('É um número impar');
}