// //exercicio 1
let pessoa = { nome: "carlos", idade: 18, cidade: "Ribeirão Preto" }

pessoa.idade = 17
console.log(pessoa)


class Produto {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}
const tablet = new Produto("Tablet Positivo", 10.00, "Tablet barato, com um processador snapdragon")

const bolacha = new Produto("Bolacha traquinas", 3.00, "Bolacha traquinas de morango")

const tang = new Produto("Tang de Uva", 2.50, "Suco muito gostoso, NATURAL")

console.log(tablet)
//exercicio 4
const Livro = {
    Livro: "Autentic Games"
}

const stringLivro = JSON.stringify(Livro)
const stringLivroToObj = JSON.parse(stringLivro)
console.log(stringLivro)
//exercicio 5

function desconto() {
    let preco = bolacha.preco
    let descontos = (preco / 100) * 10
    console.log(descontos)
}
console.log(desconto())

//exercicio 6
class carro {
    constructor(marca, modelo, caracteristicas) {
        this.marca = marca;
        this.modelo = modelo;
        this.caracteristicas = caracteristicas;
    }
}

//exercicio 7

function mostraCarro() {
    let carroAmarelo = new carro("Fiat", "2001", "Amarelo. Ele é meio racista reverso")
    console.log(carroAmarelo)
}
mostraCarro()

//exercicio 8
class Cliente {
    constructor(nome, email, saudacao) {
        this.nome = nome;
        this.email = email;
        this.saudacao = saudacao;
    }
}

let Cliente1 = new Cliente("Juniuor", "juningamer12@gamil.com", "eae meu mano, blz")
console.log(Cliente1)

//exercicio 9
class listaDeCompras {
    constructor(nome, quantidade, preco) {
        this.nome = nome
        this.quantidade = quantidade
        this.preco = preco
    }

}
let laraja = new listaDeCompras("Laranja", "12", "12")
let tomate = new listaDeCompras("Tomate cereja", "1", "13.49")
let Leite = new listaDeCompras("Leite ninho", "1", "9.89")
let bombril = new listaDeCompras("Bombril", "1000000", "10000")

let lista1 = JSON.stringify(laraja)
let lista2 = JSON.stringify(tomate)
let lista3 = JSON.stringify(Leite)
let lista4 = JSON.stringify(bombril)


function listaComprar() {
 console.log(lista1,lista2,lista3,lista4)
}
console.log(listaComprar())

let lista1valor = JSON.parse(laraja.preco)
let lista2valor = JSON.parse(tomate.preco)
let lista3valor = JSON.parse(Leite.preco)
let lista4valor = JSON.parse(bombril.preco)

function calculoLista(){
    precototal = lista1valor + lista2valor +lista3valor + lista4valor
    console.log("Preço total R$" + precototal)
}
calculoLista()