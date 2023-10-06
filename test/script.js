// const carro = {
//     marca: "ford",
//     modelo: "aka",
//     ano: 2015,
// }
// console.log(carro)

// let mouse = document.getElementById('teste');
// function eventoClick(){
//     alert("click")
// }
// function viraVermelho(){
//  let div= document.getElementById('teste')
// div.style.backgroundColor = "red" 
// }
// function viraAqua(){
// div= document.getElementById('teste')
//     div.style.backgroundColor = "aquamarine"
// }
// function mouseDentro(){
//     mouse.innerHTML = "Mouse dentro" 
// }
// function mouseFora(){
//     mouse.innerHTML = "Mouse fora" 
// }
// function substituiImagem(){
//     document.getElementById('vangogh').style.display = "none"
// }
// function mostraImagem(){
//     document.getElementById('vangogh2').style.display= "block"
// }
// function imagemOriginal(){
//     document.getElementById('vangogh').style.display = "block"
// }
// function imagemSome(){
//     document.getElementById('vangogh2').style.display= "none"
// }
// function mostraLista(){
//     document.getElementById('item_lista').style.display = "block"
//     document.getElementById('item_lista2').style.display = "block"
//     document.getElementById('item_lista3').style.display = "block"
// }
// function ocultarLista(){
//     document.getElementById('item_lista').style.display = "none"
//     document.getElementById('item_lista2').style.display = "none"
//     document.getElementById('item_lista3').style.display = "none"
// }
// function corTextoVermelho(){
//    let texto = document.getElementById('galeria')
//    texto.style.color = "darkblue"
//    texto.style.fontSize = "30px"

// }
// function corTextoNormal() {
//     let texto = document.getElementById('galeria')
//     texto.style.color="white"
//     texto.style.fontSize="32px"
// }

// const listateste = ["arroz", "feijão", "macarrao", "leite"]
// const listateste2 = ["carne", 'frango', 'bolacha2']
// const superlista = listateste.concat(listateste2)
// document.getElementById('teste').innerHTML = superlista.join(" / ")


// class carro{
//     constructor(valor1,valor2,valor3){
//         this.marca = valor1
//         this.modelo = valor2
//         this.ano = valor3
//     }
// }
// const uno = new carro ("Fiat","Uno",2001);
// console.log(uno)

// class celular{
//     constructor(marca,modelo,sistemaOperacional, cor){
//         this.marca = marca
//         this.modelo = modelo
//         this.sistemaOperacional = sistemaOperacional
//         this.cor = cor
//     }
// }
// const iPhone = new celular ("Apple","iPhone15","IOS","Branco")
// console.log(iPhone)
// const Samsung23 = new celular("Samsung","s23Ultra","Android","Preto")
// console.log(Samsung23)
// const motorola = new celular("Motorola","MotoG7","Android","Vermelho")
// console.log(motorola)

// let texto = JSON.stringify(Samsung23)

// document.getElementById("area").innerHTML = texto;

// // transforma um texto em obj
// let obj = JSON.parse(texto)
// console.log(obj.modelo)

const objs = [
    {
        "nome": "Matheus",
        "idade": 30,
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "profissao": "Programador",
            "empresa": "Empresa X"
        },
        "hobbies": ["Programar","Correr","Ler"]
    },
    {
        "nome": "João",
        "idade": 25,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": null,
            "empresa": null,
        },
        "hobbies": ["jogar","academia",]
    }
]
console.log(objs)
const jsonData =JSON.stringify(objs)
console.log(jsonData)

//converter json para obj
const objData = JSON.parse(jsonData)

console.log(objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})