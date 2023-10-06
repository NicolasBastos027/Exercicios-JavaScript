let n1 = 1;
var n1 = document.getElementById('sa')
function contador(n1){
        n1+=1;    
        document.getElementById('texto').innerHTML = contador;
}


let idade = prompt('informe sua idade')
function verificaIdade(idade){
    if (idade>=18){
        return 'Você é maior de idade'
    } else{
        return 'Você é menor de idade'
    }
}

var password=document.getElementById("password");
function gerador(){
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";
for (var i = 0; i <= passwordLength; i++){
    var numeroAleatorio = Math.floor(Math.random() * chars.length);
    password+= chars.substring(numeroAleatorio, numeroAleatorio+1);
}
 document.getElementById('geradorDeSenhas').innerHTML = password;
}

var numero=document.getElementById("numero");
function randomNumber(){
    var chars = "0123456789";
    var passwordLength = 2;
    var password = "";
    for (var i = 0; i <= passwordLength; i++){
        var numeroAleatorio = Math.floor(Math.random() * chars.length);
        password+= chars.substring(numeroAleatorio, numeroAleatorio+1);
    }
     document.getElementById('geradorDeNumeros').innerHTML = password;
    }

let parcela = prompt("Informe o valor do produto")
let meses = prompt("informe a quantidade de parcelas")

function calculoParcelas(){
    return p = parcela / meses, "Pagando R$" + parcela + " em " + meses + " vezes, dará R$" + p +'x'+meses
}
var quizVisivel = document.getElementById('question1')

function quiz(){
    quizVisivel.style.display==='none'
    
}