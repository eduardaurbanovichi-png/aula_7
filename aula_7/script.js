
function calcular(){
let a = document.getElementById('Primeironumero').value
let b = document.getElementById('Segundonumero').value
resultado_soma = parseFloat(a)+parseFloat(b)
document.getElementById("resultado1").innerHTML=resultado_soma
resultado_subtracao= parseFloat(a)-parseFloat(b)
document.getElementById("resultado2").innerHTML=resultado_subtracao
resultado_divisao= parseFloat(a)/parseFloat(b)
document.getElementById("resultado3").innerHTML=resultado_divisao
resultado_multiplicacao= parseFloat(a)*parseFloat(b)
document.getElementById("resultado4").innerHTML=resultado_multiplicacao
}

