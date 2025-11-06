// Boas práticas

/*As boas práticas em JavaScript incluem usar let e const para variáveis, manter funções pequenas e focadas, e evitar variáveis globais. É essencial seguir um estilo de código consistente, usar comparadores estritos (===), e ser cuidadoso com a manipulação do DOM para otimizar o desempenho. Outras práticas importantes são evitar aninhamentos profundos, utilizar o retorno antecipado e, sempre que possível, usar recursos modernos como funções de seta e módulos do ES6+.
*/

// Case sensitive

/*Case sensitive significa que o JavaScript diferencia letras maiúsculas de minúsculas.*/
console.log("olá mundo!")

// Sintaxe básica e comentário

/*Em JavaScript, a sintaxe básica define como o código deve ser escrito. As instruções geralmente terminam com ponto e vírgula e os blocos de código são delimitados por chaves { }.

Os comentários servem para explicar o código sem afetar sua execução.
Para uma linha, usa-se //, e para várias linhas, usa-se /* ... */

// Declaração de variáveis(var, let, const)

/*Em JavaScript, as variáveis são declaradas com var, let e const.

var: mais antiga, tem escopo de função e pode ser redeclarada.
let: tem escopo de bloco e pode ser alterada, mas não redeclarada no mesmo bloco.
const: também tem escopo de bloco, mas não pode ser alterada após receber um valor.*/
let nome = "Hagata"
console.log("Olá " + nome)
nome = "Dias"
console.log(nome)

const idade = 23
console.log(idade)

// Console e Debug

/*O console é usado para exibir informações e testar códigos no navegador ou no terminal. O comando principal é console.log(), que mostra mensagens, variáveis e resultados.

O debug (depuração) serve para encontrar erros no código. Pode-se usar o comando debugger; para pausar a execução e inspecionar variáveis, ou usar as ferramentas de desenvolvedor do navegador (aba “Console” e “Sources”).*/

/*console.warn("atenção")
console.info("informações")
console.error("erro")*/

//Tipos de dados

/*os tipos de dados são as categorias de valores que uma variável pode armazenar. Eles se dividem em:

Primitivos: string (texto), number (número), boolean (verdadeiro/falso), undefined, null, bigint, e symbol.
Não primitivos: object, que inclui arrays, funções e objetos em geral.*/

//String
let cidade = "Americana"

//number
let salario = 2000

//bool
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição

/*operador de atribuição é usado para guardar um valor em uma variável.
O principal é o sinal de igual (=), mas existem variações que combinam operações matemáticas.*/

salario = 2500

//     Operadores aritméticos

/*operadores aritméticos são usados para fazer cálculos matemáticos em JavaScript.

Principais:

+ → soma
- → subtração
* → multiplicação
/ → divisão
% → resto da divisão*/

let n1 = 10, n2 = 5
console.log (n1+n2) // soma
console.log (n1-n2) // subtração
console.log (n1*n2) // multiplicação
console.log (n1/n2) // divisão

//     Operadores relacionais

/*operadores relacionais comparam valores e retornam true ou false.

Principais:

== → igual (valor)
=== → igual (valor e tipo) perfeitamente igual, comparando o tipo e valor
!= → diferente (valor)
> → maior que
< → menor que
>= → maior ou igual
<= → menor ou igual*/

console.log (n1==n2) // igual / igual
console.log (n1 != n2) // diferente
console.log (n1 > n2) // maior
console.log (n1 < n2) // menor
console.log (n1 >= n2) // maior ou igual
console.log (n1 <= n2) // menor ou igual
console.log (10%3) // resto da divisão

//     Operadores lógicos

/*operadores lógicos combinam expressões booleanas (true ou false).

Principais:

&& → E (true se ambos forem true) - AND
|| → OU (true se algum for true) - OR
! → NÃO (inverte o valor) - NOT */

let altura = 1.80
let peso = 80 
let tipo = "criança"

console.log (!10>5)  // NOT
console.log (altura > 1.5 || peso < 150 || tipo != "criança") // - (||)
console.log (altura > 1.5 && peso < 150 && tipo != "criança") // &&

// com && tem que atender todos os critérios, todas as verificações devem ser verdadeiras para o resultado final ser verdadeiro.
// com OR (||) basta atender apenas 1 critério, uma única verificação ser verdadeira.
// com NOT (!) muda o resultado final, se for verdadeiro acaba virando falso e vise e versa.

// Estrutura

//     Estrutura de controle/decisão

let carro = "fiat"

if(carro == "bmw"){
    console.log("vc ta bem mais ou menos")
}else{
    console.log("A vida ta progredindo")
}

let idadealuno = 20

if(idadealuno >= 18){
    console.log ("Maior de idade")
}else{
    console.log ("Menor de idade")
}

//     Laços de repetição

let controle = 1
while(controle <=10){
    console.log(controle)
    controle = controle + 1
}
controle = 1
while(controle<= 10){
    console.log(7*controle)
    controle = controle + 1
} console = controle + 1
 
// Arrays --> vetor

let zoologico = ['leão','elefante','zebra','ariranha','lobo guará']
console.log(zoologico [2])
console.log(zoologico.length)

// o numero 2 se refre a posição no caso o inidador ' sempre começa do 0

let frutas = ['🍓', '🍌','🍇','🍉','🍐','🍍','🍊']
console.log(frutas)
frutas.push ('🍎')
console.log(frutas)

let alunos = []
alunos.push ("joão")
alunos.push ("renata")
alunos.push ("roberto")
console.log (alunos)

// Funções personalizadas

function mensagem (){
    console.log ("olá")
    console.log ("seja bem vindo")
    console.log (" :) ")
}
mensagem()

function conta (horas, sal_hora){
    console.log (horas * sal_hora)
}

conta (140,75)


