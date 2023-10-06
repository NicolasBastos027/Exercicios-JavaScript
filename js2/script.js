function soma(n1, n2){
    return n1 + n2
}
var resultado = soma(5,5)
console.log(resultado)

function quadrado(n1){
    return n1*n1
}
var dobro = quadrado (6)
console.log(dobro)

function ehPar(n1){
    if (n1%2==0) {
        return 'o numero ' + n1 + ' é par';
    } else {
        return 'o numero ' + n1 + ' é impar';
    }
}
var resultado = ehPar(48)
console.log(resultado)

function concatenarStrings(string1,string2){
    return string1+string2
}
var resultado = concatenarStrings('sobrinho','lacoste')
console.log(resultado)

function maiorNumero(n1,n2) {
    if (n1>n2){
        return n1 + ' é maior que ' + n2
    } else{
        return n2 + ' é maior que ' + n1
    }
}
var resultado = maiorNumero(390,323)
console.log(resultado)

function celsiusParaFahrenheit(C){
    return F = ((C * 1.8) + 32), F +'°F'
}
var resultado = celsiusParaFahrenheit(30)
console.log(resultado)

function media(n1,n2,n3){
    return (m=(n1+n2+n3)/3), 'A média é '+ m
}
var resultado = media(8,4,7)
console.log(resultado)

function comprimentoString(palavra){
    return p = palavra.length, 'a palavra '+palavra +  ' tem ' + p + ' letras' 
}
var resultado = comprimentoString('morango')
console.log(resultado)

function verificarNumero(n1){
    if (n1>0){
        return 'o '+n1 +' é positivo'
    }else if (n1==0){
        return 'o '+n1 +' é zero'
    }
    else {
        return 'o '+n1 +' é negativo'
    }
}
var resultado = verificarNumero(-343)
console.log(resultado)

function jurosSimples(valor){
    return 
}