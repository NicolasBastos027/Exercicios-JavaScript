//exercicio 1 

let n1 = 0
let n2 = 0
let resposta = 0

function soma_numeros() {
    n1 = document.getElementById("input_n1").value
    n2 = document.getElementById("input_n2").value
    resposta = Number(n1) + Number(n2)
    document.getElementById("resposta1").innerHTML = resposta
}
//exercicio 2
function verifica_string() {
    vString = document.getElementById("input_string").value
    document.getElementById('resposta2').innerHTML = vString.length
}
//exercicio 3
const pessoas ={
    "nome":"Nicolas",
    "Idade":"Idade",
    "Endereço":"rua..."
}  



//exercicio 4
function click_console() {
    console.log("Click")
}
//exercicio 5
const array_numeros = [54, 34, 23, 1, 6, 6, 3]

function calcular_array() {
    let contador = 0
    let i = 0
    switch (oi) {
        case i:
            if (i < array_numeros.length){
                let quantiaArray = Number(array_numeros[i]);
                contador = + quantiaArray
                total = contador += contador
                i++
                console.log(total)  
            }
        
            break
        default:
            
    }



}
//exercicio 6
class produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
}
const bolacha = new produto("traquinas", 3.50, "1")
let bolacha1 = JSON.stringify(bolacha)
document.getElementById("resposta6").innerHTML = bolacha1

// exercicio 7
let numeros = [35, 42, 12, 64, 32]
function verifica_maior() {
numeros.sort(function(a,b){return a-b })
console.log(numeros.slice(4))
}
//exercicio 8
function troca_cor(){
    document.getElementById("botaocor").style = "background:#000; color: #fff"
}
// exercicio 9
let nomes = ["andre","carlos","artur","vinicius"] 
function A_nomes(){
    if (nomes.length(1) == "a"){
        let nomes_com_a = [nomes.length(0) = a]
        console.log(nomes_com_a)
    }
}

//exercicio 10
class pessoa {
    constructor(nome, idade, endereco) {
        this.nome = nome
        this.idade = idade
        this.endereco = endereco
    }
}
const pessoa1 = new pessoa('nicolas', 19, 'rua rua')

let nicolas = JSON.stringify(pessoa1)

document.getElementById("resposta10").innerHTML = nicolas

//exercicio 11
class carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
}
const carro1 = new carro('ford', 'k', 2009)

let k = JSON.stringify(carro1)

document.getElementById("resposta11").innerHTML = k

//exercicio 12
function impar_par(){
    n = document.getElementById('n').value  
    if(n % 2 == 0){
        document.getElementById("resposta12").innerHTML = "é par"
    }else {
        document.getElementById("resposta12").innerHTML = "é impar"
    }
}
//exercicio 13

function adiciona_lista(){
    const lista_mais = document.getElementById('lista_adiciona').value
    document.getElementById('lista').innerHTML += `<li>${lista_mais}</li>`
}
