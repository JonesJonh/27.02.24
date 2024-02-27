const variavel1 = "valor somente leitura"; //declaração de variavel, somente leitura
var variavel2 = "valor editável"; // declaração de variavel denominada variavel2, com valor editável

try { // tramsformar a variavel em um valor nao permitido

    //a linha abaixo define a variável 'variacel1' e tribui a ela o valor "valor não permitido".
    variavel1 = "valor não permitido"; 

    // a linha abaixo imprime uma mensagem no console que mostra que a váriavel 'variavel1' foi alterada e exibe o valor atual dela
    console.log("A variavel1 foi alterada para: ", variavel1); // ações do algoritmo try

  // a linha abaixo é uma maneira de capturar e lidar com os erros que ocorrem dentro de um bloco 'try'  
} catch (e ) { // e = variavel de erro

    // a linha abaixo é usada para imprimir uma mensagem de erro no console.
    console.error("Ops! Ocorreu um erro: ", e); 
}

// a linha abaixo permite que o programa execute certas operações que podem lançar exceções
try {

    // a linha abaixo é uma declaração de atribuição, e ela atribui o valor "valor permitido" a variavel chamada "variavel2"
    variavel2 = "valor permitido";

    // a linha abaixo é uma intrução que ultiliza a função 'console.log()' para imprimir uma mensagem no console.
    console.log("A variavel2 foi alterada para: ", variavel2);


} catch (e) {// variavel de erro

    //a linha abaixo é usada para imprimir uma mensagem de erro no console.
    console.error("Ops! Ocorreu um erro: ", e);
}