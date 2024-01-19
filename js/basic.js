/*
EXEMPLO DE BDD

Sendo um cliente correntista do banco
Posso sacar dinheiro em caixa eletrônicos
Para poder comprar em lugar que não aceitam o cartão de débito e crédito

*/

/**
 * Cenário 1: Saque com sucesso
 * Dado que meu saldo é de 1000 reais
 * Quando faço um saque de 500 reais
 * Então o valor do saque deve ser deduzido do meu saldo
 */


/**
 * Cenário 2: Saque com valor superior ao saldo
 * Dado que meu saldo é de 1000 reais
 * Quando faço um saque de 1001 reais
 * Então não deve deduzir do meu saldo
 * E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo
 */

/**
 * Cenário 3: Saque com valor máximo
 * Dado que meu saldo é de 1000 reais
 * E o valor máximo por operação é de 700 reais
 * Quando faço um saque no valor de 701 reais
 * Então não deve deduzir do meu saldo
 * E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação
 


let saldo = 1000

function saque(valor){

    if (valor  > saldo){
        console.log('Valor do saldo superior ao saldo')
    } else if(valor > 700){
        console.log('Valor é superior ao máximo permitido por operação. Valor máximo de 700')
    } else {
        saldo = saldo - valor
    }
    
}

saque(1000)
console.log(saldo)
*/
/**
 * 
 * //Arrays
 * 
 * 
var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// metodo para inserir novo item na lista
personagens.push('R2D2')

// metodo para excluir o último item da lista
personagens.pop();

//Função de escolher qual item excluir da lista
personagens = personagens.filter(function(p){
    return p !== 'Darth Vader'
})

//Função que ignora todos os dados da lista
personagens = personagens.filter(function(t){
    return t === 'Mestre Yoda'
})

console.log(personagens)

 */

//Controles de repetição (Loops)
/*
personagens.forEach(function(p){
    console.log(p)
})


for(let i in personagens) {
    //console.log(i)
    console.log(personagens[i])
}
*/
let personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
//console.log(personagens)

for(let i = 0; i < 10; i++){
    console.log(function(personagens){
    }.length)
}
//console.log(personagens)

/**
 * 
 * for(let i = 0; i <= 10; i++){

    

    /*
    personagens.forEach(function(i){
        console.log(i)
    })*/


let yoda = {
    nome: 'Mestre Yoda',
    idade: 100,
    jedi: true,
    mostraInfo: function(){
        console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
    }
}

yoda.mostraInfo()


