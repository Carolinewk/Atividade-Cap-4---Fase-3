function somar() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    valor = parseInt(num1) + parseInt(num2)
    resultado = `Resultado: ${valor}`
    document.getElementById("resultado").innerHTML = resultado
}

function subtrair() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    valor = parseInt(num1) - parseInt(num2)
    resultado = `Resultado: ${valor}`
    document.getElementById("resultado").innerHTML = resultado
}

function multiplicar() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    valor = parseInt(num1) * parseInt(num2)
    resultado = `Resultado: ${valor}`
    document.getElementById("resultado").innerHTML = resultado
}

function dividir() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    valor = parseInt(num1) / parseInt(num2)
    resultado = `Resultado: ${valor}`
    document.getElementById("resultado").innerHTML = resultado
}