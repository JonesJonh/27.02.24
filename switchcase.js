// a linha abaixo define uma constante chamada "sortear" que armazena uma função "let nomes".
const sortear=() => { 

    // a linha abaixo armazena um array de strings
    let nomes = ["ROBESVALDO 👍","PINK FLOID🎸","MACARENA💃🏻","MICHAEL JACKSON🕴","WINKS 🧚‍♀️","PATRULHA CANINA 🐶","BARBIE👸","KEN 👱🏻‍♂️","MONSTER HIGH 🧟‍♀️"];
    
    // a linha abaixo atribui o elemento HTML com o ID "nome" a uma variavel chamada "h1Nome"
    let h1Nome = document.getElementById("nome");
    
    // a linha abaixo significa que uma váriavel chamada 'achouNumero' está sendo declarada e inicializada com o valor 'false'.
    let achouNumero = false;

    // a linha abaixo significa que uma variavel chamada 'numeroSorteado' está sendo declarada utilizando a palavra-chave 'let'
    let numeroSorteado;
    
    // a linha abaixo significa que o código dentro do loop será repetido enquanto a variavel 'achouNumero' for 'false'
    while(achouNumero == false) {

        // a linha abaixo gera um número inteiro aleatório entre 0 e 99.
        numeroSorteado = Math.floor(Math.random() * 100);

        //a linha abaixo verifica se o valor armazenado em 'numeroSorteado' é menor que o número de elementos array 'nomes'
        if (numeroSorteado < nomes.length) {

            //a linha abaixo significa que a variável "achouNumero" está atribuida a um valor booleano "true". 
            achouNumero = true;
        }
    }

    // a linha abaixo inicia uma estrutura de controle chamada 'switch' no qual o 'numeroSorteado' é a expressão que será avaliada.
    switch (numeroSorteado) {
       
    // a linha abaixo é usada como estrutura de controle switch para executar um bloco de código especifico
     case 0:

        // a linha abaixo atribui o texto de um elemento HTML <h1> chamado h1Nome para ser localizado em uma posição especifica de array     
        h1Nome.innerText = nomes[numeroSorteado];

        // a linha abaixo é usada para interromper imedidatamente a execução de um loop ou estrutura de seleção
        break;

    // a linha abaixo é usada como estrutura de controle switch para executar um bloco de código especifico    
    case 1:

        // a linha abaixo atribui o texto de um elemento HTML <h1> chamado h1Nome para ser localizado em uma posição especifica de array  
        h1Nome.innerText = nomes[numeroSorteado];

        // a linha abaixo é usada para interromper imedidatamente a execução de um loop ou estrutura de seleção
        break;

    // a linha abaixo é usada como estrutura de controle switch para executar um bloco de código especifico
    case 2:

        // a linha abaixo atribui o texto de um elemento HTML <h1> chamado h1Nome para ser localizado em uma posição especifica de array 
        h1Nome.innerText = nomes[numeroSorteado];

        // a linha abaixo é usada para interromper imedidatamente a execução de um loop ou estrutura de seleção
        break;

    // a linha abaixo é usada como estrutura de controle switch para executar um bloco de código especifico
    case 3:

        // a linha abaixo atribui o texto de um elemento HTML <h1> chamado h1Nome para ser localizado em uma posição especifica de array    
        h1Nome.innerText = nomes[numeroSorteado];

        // a linha abaixo é usada para interromper imedidatamente a execução de um loop ou estrutura de seleção
        break;

    // a linha abaixo é usada como estrutura de controle switch para executar um bloco de código especifico
    case 4:

        // a linha abaixo atribui o texto de um elemento HTML <h1> chamado h1Nome para ser localizado em uma posição especifica de array 
        h1Nome.innerText = nomes[numeroSorteado];

        // a linha abaixo é usada para interromper imedidatamente a execução de um loop ou estrutura de seleção
        break;

    // a linha abaixo é usada como estrutura de controle switch para executar um bloco de código especifico 
    case 5:

        // a linha abaixo atribui o texto de um elemento HTML <h1> chamado h1Nome para ser localizado em uma posição especifica de array 
        h1Nome.innerText = nomes[numeroSorteado];

        // a linha abaixo é usada para interromper imedidatamente a execução de um loop ou estrutura de seleção
        break;

    // a linha abaixo é usada como estrutura de controle switch para executar um bloco de código especifico
    case 6:

        // a linha abaixo atribui o texto de um elemento HTML <h1> chamado h1Nome para ser localizado em uma posição especifica de array 
        h1Nome.innerText = nomes[numeroSorteado];

        // a linha abaixo é usada para interromper imedidatamente a execução de um loop ou estrutura de seleção
        break;

    // a linha abaixo é usada como estrutura de controle switch para executar um bloco de código especifico
    case 7:

        // a linha abaixo atribui o texto de um elemento HTML <h1> chamado h1Nome para ser localizado em uma posição especifica de array 
        h1Nome.innerText = nomes[numeroSorteado];

        // a linha abaixo é usada para interromper imedidatamente a execução de um loop ou estrutura de seleção
        break;

    // a linha abaixo é usada como estrutura de controle switch para executar um bloco de código especifico
    case 8:

        // a linha abaixo atribui o texto de um elemento HTML <h1> chamado h1Nome para ser localizado em uma posição especifica de array 
        h1Nome.innerText = nomes[numeroSorteado];

        // a linha abaixo é usada para interromper imedidatamente a execução de um loop ou estrutura de seleção
        break;

        // a linha abaixo é executada quando nenhuma das condições anteriores é antendida.
        default:
        }
}