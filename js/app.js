// > 01 - Chama o valor da tag pelo id
// console.log(
    // document.getElementById("titulo").innerHTML
// );




// > 02 - Retorna a largura da tela
// Previous e next com history
// function voltar() {
    // history.back()
// }
// function adiantar() {
    // history.forward()
// }


// Retorna a largura da tela
// console.log(
    // window.screen.width
// );


// Retorna no console os objetos da janela do navegador (BOM)
// console.log(
    // window
// );


// Retorna no console os objetos do docmento HTML (DOM)
// console.log(
    // window.document
// );


// Retorna javascript no html com .innerHTML
// document.getElementById("largura").innerHTML = screen.width;
// document.getElementById("altura").innerHTML = screen.height;
// document.getElementById("orientation").innerHTML = screen.orientation.type;




// > 03 - Valores que são retornados da janela do navegador (BOM)
// console.log(
    //  screen.width,
    //  screen.height,
    //  screen.orientation,
    //  screen.orientation.type
// );


// Retorna informações de tela.
// console.log(
    // screen
// );


// Retorna as informações do navegador.
// console.log(
    // navigator
    // navigator.language
// );


// Retorna a localização do navegador
// console.log(
    // location
// );


// Redireciona para um link
// location.href = "http://www.google.com"




// > 04 - DOM acessa os elementos HTML 'document.'
// console.log(
    // document.getElementById("fruta"),                                            // Sem o '.innerHTML, é mostrado toda a tag no console
    // document.getElementById("fruta").innerHTML                                   // Com o 'innerHTML' é mostrado apenas o valor do ID
    // document.getElementsByClassName("carro"),                                    // Acessa todas as tag com a mesma classe
    // document.getElementsByClassName("carro")[0],                                 // Acessa a tag pelo indice
    // document.getElementsByClassName("carro")[0].innerHTML                        // Com o 'innerHTML' é mostrado apenas o valor da classe
// );




// > 05 - DOM acessa os elementos HTML 'document.'
// console.log(
    // document.getElementsByTagName("div"),                                        // Chama a tag pelo nome no da tag
    // document.getElementsByTagName("div")[1],                                     // Chama a tag pelo nome da tag e indice, caso tenha mais de uma tag com o mesmo nome
    // document.getElementsByTagName("p"),                                          // Retorna um HTMLCollection
    // document.getElementsByTagName("p")[0].innerHTML                              // Precisa declara o indice '[0]' para retorna o valor que está na tag
    // document.querySelector("p"),                                                 // Retorna a primeira ocorrência. Não retorna o collection
    // document.querySelector("#p2")                                                // Retorna a primeira ocorrência. Não retorna o collection
// );




// > 06 - Atributos
// console.log(
    // document.getElementById("p1").innerHTML
// );

// document.getElementById("p1").innerHTML = "Novo banco de dados"                  // Sobrescreve um novo valor no HTML

// var paragrafo = document.getElementById("p1");                                   // Atribui o valor da variavel paragrafo
// paragrafo.innerHTML = "Banco de dados 2022";                                     // Sobrescreve um novo valor na variavel


// paragrafo.style.color = "white";                                                 // .style estilo css
// paragrafo.style.backgroundColor = "#636363";
// paragrafo.style.width = "260px";
// paragrafo.style.height = "40px";
// paragrafo.style.textAlign = "center";
// paragrafo.style.borderRadius = "50px";
// paragrafo.style.padding = "16px 18px 1px 18px";
// paragrafo.style.border = "solid #c7c7c7";
// paragrafo.style.borderWidth = "4px";
// paragrafo.style.letterSpacing = "0.8px";
// paragrafo.style.cursor = "pointer";
// paragrafo.style.boxShadow = "0.1rem 0.1rem 0.1rem #636363";


// var imagem = document.getElementById("imagem")                                   // Atribui a variavel image ao elemento ID
// imagem.src = "background.png"                                                    // Chama e atribui o link da imagem na tag <img>
// imagem.alt = "Imagem de background"                                              // Atribui o alt a tag <img>
// imagem.width = "360"                                                             // Define largura
// imagem.height = "180"                                                            // Define altura





// > 07 - createElement

// var imagem = document.createElement("img")
// imagem.src = "background.png"


// var paragrafo = document.createElement("p")
// paragrafo.innerHTML = "Olá"
// console.log(
    // imagem, paragrafo
// )


// Atribui elementos apartir de uma tag pai

// var p = document.createElement("p")
// p.innerHTML = "Olá Mundo"

// var img = document.createElement("img")
// img.src = "background.png"
// img.width = "360"
// img.height = "180"
// img.style.borderRadius = "32px"


// document.getElementById("conteudo").appendChild(p)
// document.getElementById("conteudo").appendChild(img)

// document.getElementById("conteudo").removeChild(p)
// document.getElementById("conteudo").removeChild(img)




// > 08 - childNodes - Arvore DOM - Acessa as propriedades e exibe os valores
// console.log(
    // document.documentElement.firstChild
    // document.documentElement.lastChild
    // document.body.childNodes
// )

// var lista = document.body.childNodes
// alert(lista[5].childNodes[3].childNodes[0].nodeValue)




// > 09 - parentNode - Retorna o elemento pai
// console.log(
    // document.getElementById("ilheus").parentNode
    // document.getElementById("bahia").parentNode
    // document.getElementById("ilheus").parentNode.parentNode.parentNode.parentNode
// )




// > 10 - DOM - getAttribute, setAttribute, removeAttribute
// document.getElementById("btn-set").addEventListener("click", function() {        // Chama id, adiciona o evento "click" que terá sua ação de acordo com a function()
    // document.getElementById("title").setAttribute("class", "red")                // Chama id do elemento que a ação vai ocorrer e seta o atributo com o nome da classe css e o seu valor

// })


// document.getElementById("btn-remove").addEventListener("click", function() {
    // document.getElementById("title").removeAttribute("class")                    // Chama id e remove atributo adicionado pelo setAttribute

// })


// document.getElementById("btn-get").addEventListener("click", function() {
    // var value = document.getElementById("title").getAttribute("class")
//     document.getElementById("paragrafo").innerHTML = value

// })





// > 11 - TextNode, textContent
// var titulo = document.querySelector("h1")
// var texto = document.createTextNode("Proposta de valor")                         // Adiciona mais texto no querySelector

// titulo.appendChild(texto)                                                        // Adiciona um nó ao pai h1 e inclui mais texto com a variável texto

// titulo.textContent = "Uma nova Proposta de valor"                                // Substitui o querySelector com um novo texto




// > 12 - children, insertBefore
// var lista = document.getElementsByTagName("ul")[0]                               // Seleciona o HTMLCollection com todos os indices ul, o '[0]' específica qual índice selecionar
// var itens = document.getElementsByTagName("li")                                  // Seleciona o HTMLCollection com todos os indices li
// var itens = lista.children                                                       // Seleciona os filhos do índice setado na variável lista

// var novoItem = document.createElement("li")                                      // Cria novo elemento 'li'
// novoItem.textContent = "Suco de laranja"                                         // Inseri valor no novoItem

// lista.insertBefore(novoItem, itens[0])                                           // Chama a variável lista e o insertBefore adiciona a variável novoItem antes da variável itens no índice '[0]'
// console.log(itens)




// >> 13 - replaceChild
// var lista = document.getElementsByTagName("ul")[0]
// // var itens = document.getElementsByTagName("li")
// var itens = lista.children

// var novoItem = document.createElement("li")
// novoItem.textContent = "Suco de laranja"

// lista.insertBefore(novoItem, itens[0])


// var lista2 = document.getElementsByTagName("ul")[1]
// var itens = lista2.children

// var novoItem2 = document.createElement("li")
// novoItem2.textContent = "Margarina"

// lista2.replaceChild(novoItem2, itens[1])

// console.log(itens)




// >> 14 - Tipos de dados
// var nome = "lpaulopds"                                                           // string pode ser qualquer valor entre aspas simples '' ou duplas ""
// var id = 64                                                                      // Tipo número
// var cadastrado = true                                                            // Tipo booleano
// var frutas = ['Abacaxi', 'Banana', 'Caju']                                       // Tipo array. Retorna um objeto
// var carro = new Object()                                                         // Tipo Object

// carro.fabricacao = "2025"
// carro.cor = "cinza"

// var soma = function(a,b) {return a+b}                                            // Tipo function

// alert(typeof(soma))                                                              // typeof() mostra o tipo de dado
// alert(soma (2,2))




// >> 15 - var, let, const, escopo
// var nome = "luiz"                                                                // As variáveis do tipo var são acessadas no escopo global e local
// if (true) {
//     var nome = "daniel"
// }
// console.log(nome)

// let nome = "daniel"
// if (true) {
//     // let nome = "daniel"                                                       // As variáveis do tipo let são acessadas apenas no escopo local. Declarando no escopo global elas ficam diponíveis para todo documento
//     nome = "daniele"
// }
// console.log(nome)




// >> 16 - Array
// Elemento que guarda um conjunto dados de varios tipos
                                                            // Objeto                       // Array dentro de array
// let myArray = ['notebook', 'mouse', 'teclado', 1500.00, {memoria: '16GB', hd: '100BG'}, ['notebook dell', 'modelo 1000'] ]
// console.log(
    // myArray                                                                      // Retorna os índices do array
    // myArray[4]                                                                   // Retorna valor do índice
    // myArray[4].memoria                                                           // Retorna valor do objeto
    // myArray[5][0]                                                                // Retorna valor do array que está dentro do array
// )


// const array = document.getElementById("indice")
// array.innerHTML = myArray

// const array2 = document.getElementById("indice5")
// array2.innerHTML = myArray[5]


// let itens = "";
// for (let i = 0; i < myArray.length; i++) {
//     itens += myArray[i] + "<br>"
// }
// document.getElementById("indice").innerHTML = itens




// >> 17 - Objetos
// let pessoa = {
//     nome: "Adalberto",
//     idade: 53,
//     feliz: true,
//     pets: ["cachorro", "gato", "raposa"],
//     carros: {
//         camaro: {
//             placa: "123456",
//             cor: "cinza"
//         },
//         uno: {
//             placa: 456789,
//             cor: "preto"
//         }
//     },
//     andar: function(km) {
//         alert(pessoa.nome+" andou "+km+" km")
//     }
// }                                                                                // objeto, pode ter arrays e outros objetos
// pessoa.nome = "Paulo"                                                            // Atribui novo valor
// pessoa.pets[0] = "papagaio"                                                      // Atribui novo valor
// console.log(pessoa.pets[0])                                                      // Retorna a propriedade
// console.log(pessoa.carros.camaro.placa)                                          // Retorna os valores do objeto que está dentro do objeto
// pessoa.andar(20)                                                                 // Retorna o resultado da função que está dentro do objeto




// >> 18 - Operadores aritméticos e de atribuição
// let x = 10
// let y = 5
// let resultado = x - y
// let resultado = x + y
// let resultado = x / y
// let resultado = x * y
// let resultado = x ** y
// let resultado = x % y


// let nota1 = 8
// let nota2 = 7
// let nota3 = 6

// let resultado = (nota1 + nota2 + nota3) / 3

// console.log(resultado)


// let x = 5
// let y = 2

// x = x + y
// =
// x += y
// x *= y
// x **= y
// x %= y

// console.log(x)
// x++                                                                              // incremento
// console.log(x)                                                                   // Resultado com incremento




// >> 19 - Operadores, lógicos, de comparação, operador ternário
// let x = 5
// console.log(x == 5)                                                              // Verifica se valor é igual
// console.log(x === "5")                                                           // Verifica o tipo de dado retornado
// console.log(x != 4)                                                              // Verifica se não é igual
// console.log(x !== "5")                                                           // Verifica se tipo de não é igual
// console.log(x < 10)                                                              // Verifica se é menor que
// console.log(x > 2)                                                               // Verifica se é maior que
// console.log(x >= 2)                                                              // Verifica se é maior ou igual


// let media = 8
// let frequencia = 80

// console.log(media >= 7 && frequencia >=80)      // Operadores lógicos e = '&&', ou = '||'


// let idade = 14

// let eleitor = (idade >= 16) ? "Pode votar" : "Não pode votar"                    // Operadores ternários
// let eleitor = !(idade <= 15) ? "Pode votar" : "Não pode votar"                   // Operadores ternários

// console.log(eleitor)




// >> 20 - Condicionais if, else, elseif, switch
// let pais = "brasil"
// let estado = "al"

// if (pais == "canada") {
//     console.log("Sou Brazil")
// } else if(estado == "al") {
//     console.log("Sou Alagoas")
// }
// else {
//     console.log("Não sou Brazil")
// }


// switch(pais) {
//     case 'brasil':
//         console.log("Sim, Brazil")
//         break
//     case 'canada':
//         console.log("Não, sou Canadá")
//         break
//     default:
//         console.log("Resposta padrão")
// }




// >> 21 - Loops for, while
// for (let i = 0;i <= 10; i++) {
//     console.log(i)
// }


// let paises = document.getElementsByClassName("pais")

// for (let i = 0;i < paises.length; i++) {
//     console.log(i)
//     console.log(paises[i].innerHTML)
// }


// let paises = document.getElementsByClassName("pais")
// let i = 0

// while(i < paises.length) {
//     console.log(paises[i].innerHTML)
//     i++                                                                          // O while precisa ser incrementado para não entrar em loop infinito
// }


// do  {                                                                            // O do executa o bloco apenas uma vez
    // console.log(paises[i].innerHTML)
    // i++                                                                          // O while precisa ser incrementado para não entrar em loop infinito
// }
// while (i < paises.length)




// >> 22 - Loops for in, for of
// let fruta = {nome: "banana", preço: 9.99, unidade: 1}

// for (let valor in fruta) {                                                       // O for in percorre um objeto
//     console.log(fruta[valor])
// }


// let aparelhos = ["Celular", "Fone de ouvido", "Microfone", "Mouse"]

// for (let valor of aparelhos) {                                                   // O for of percorre um array
//     console.log(valor)
// }




// >> 23 - Funções
// function soma(x, y) {
//     return x + y
// }
// // console.log(soma(58, 87))
// document.getElementById("resultado").innerHTML = soma(58,87)




// >> 24 - Alert, prompt,confirm
// let nome = prompt("Digite seu nome")                                             // Exibe uma caixa de dialogo com input
// console.log(nome)                                                                // A variável nome recebe o valor inserido no input
// alert(nome)


// let resposta = confirm("Deseja excluir este ficheiro")                           // Retorna booleano
// if (resposta == true) {
//     alert("Ficheiro excluído")
// } else {
//     alert("Edite o ficheiro")
// }
