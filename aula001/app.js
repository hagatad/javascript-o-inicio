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

console.warn("atenção")
console.info("informações")
console.error("erro")

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
O principal é o sinal de igual (=), mas existem variações que combinam operações matemáticas./*

//     Operadores aritméticos

/*operadores aritméticos são usados para fazer cálculos matemáticos em JavaScript.

Principais:

+ → soma
- → subtração
* → multiplicação
/ → divisão
% → resto da divisão
** → exponenciação/*

//     Operadores relacionais

/*operadores relacionais comparam valores e retornam true ou false.

Principais:

== → igual (valor)
=== → igual (valor e tipo)
!= → diferente (valor)
!== → diferente (valor ou tipo)
> → maior que
< → menor que
>= → maior ou igual
<= → menor ou igual*/

//     Operadores lógicos

/*operadores lógicos combinam expressões booleanas (true ou false).

Principais:

&& → E (true se ambos forem true)
|| → OU (true se algum for true)
! → NÃO (inverte o valor)*/

// Estrutura
//     Estrutura de controle/decisão

//     Laços de repetição

// Arrays --> vetor

// Funções personalizadas