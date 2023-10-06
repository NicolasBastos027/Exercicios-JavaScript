// // //remover numero 2 
// // const numeros = [30, 32, 492, 312, 2,3]
// // // numeros.splice(1, 1)
// // numeros.sort(function(a,b){return a-b})
// // // document.getElementById('teste').innerHTML = numeros;

// // const alimentos = ['peixe', 'carne', 'presunto', 'mussarela']
// // // let arro = alimentos.slice(1,3)
// // const lista1 = alimentos.splice(1,2);
// // document.getElementById('teste').innerHTML = lista1;


// // // let organização = alimentos.sort()

// var hora = new Date().getHours()

// // if (hora < 12){
// //     alert("Bom dia")
// // }else if (hora < 18 && hora > 12){
// //     alert("Boa Tarde")
// // }else {
// //     alert("Boa Noite")
// // }
// function verificar(){
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value;
//     if(num1 > num2){
//     let p= document.getElementById("texto")
//     p.innerHTML = "O numero "+num1+" é maior que "+num2;
//     } else if (num2 > num1) {
//     let p= document.getElementById("texto")
//     p.innerHTML = "O numero "+num2+" é maior que "+num1;
//     }
// }
// function positivo(){
//     let num1 = document.getElementById("posiNega").value;
//     if(num1 < 0 ){
//     let p= document.getElementById("texto")
//     p.innerHTML = "Esse numero é negativo"
//     } else if (num1 > 0) {
//     let p= document.getElementById("texto")
//     p.innerHTML = "Esse numero é positivo"
//     } else {
//         let p= document.getElementById("texto")
//         p.innerHTML = "Esse numero é zero"
//     }
// }
// function maisdezoito(){
//     let num1 = document.getElementById("maisdezoito").value;
//     if(num1 < 18 ){
//     let p= document.getElementById("texto")
//     p.innerHTML = "Você não pode acessar sites +18"
//     } else {
//     let p= document.getElementById("texto")
//     p.innerHTML = "Você pode acessar sites +18"
//     }
// }
// function imparpar(){
//     let num1 = document.getElementById("imparpar").value;
//     if((num1/2) == 0 ){
//     let p= document.getElementById("texto")
//     p.innerHTML = "Esse numero é par"
//     } else {
//     let p= document.getElementById("texto")
//     p.innerHTML = "Esse numero é impar"
//     }
// }

// function verificaCor() {
//     let cor = document.getElementById("cor").value;

//     switch (cor) {
//         case 'preto':
//             document.body.style.background = "black"
//             break;
//         case 'amarelo':
//             document.body.style.background = "yellow"
//             break;
//         case 'vermelho':
//             document.body.style.background = "red"
//             break;
//         case 'azul':
//             document.body.style.background = "blue"
//             break;
//         case 'verde':
//             document.body.style.background = "green"
//             break;
//         case 'rosa':
//             document.body.style.background = "pink"
//             break;
//         default:
//             let p = document.getElementById("texto")
//             p.innerHTML = "Essa cor não está disponivel"
//             p.style.color = "red" 
//     }
// }

function olaMundo(){
    return "Olá mundo"
}
console.log(olaMundo())

function soma (n1,n2){
    return n1 + n2 
}
console.log (soma(3,2)) 

function trocaCor(){
    document.body.style.background = "pink"
}
function trocaCor2(){
    document.body.style.background = "lightblue"
}
function corReset(){
    document.body.style.background = "white"
}
function parImpar(n1){
     if ( (n1%2)==0){
    return 'Esse numero é par'
     } else{
    return "Esse numero é impar"
     }
}
console.log(parImpar(99))
i=1
function contadorClicks(){
    document.getElementById('contadormedidor').innerHTML = i
    return i+=1
}
var m = [6,4,6]
function media(){
   return (medi = (m[0]+ m[1]+ m[2])/3), medi
}
console.log(media())

function imagemZoom(){
    document.getElementById("blackwhite").style.width = "1000px"
}
function imagemZoom1(){
    document.getElementById("generations").style.width = "1000px"
}
function mouseporcima2(){
    let t = document.getElementById('texto_oculto')
    t.style.display = "block"
    t.style.background = "lightgray"
}
function mouseporcima1(){
    let t = document.getElementById('texto_oculto1')
    t.style.display = "block"
    t.style.background = "lightgray"
}