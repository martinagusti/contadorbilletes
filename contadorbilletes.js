
function calcular(){

    let mil = document.getElementById("mil").value
    let quinientos = document.getElementById("quinientos").value
    let doscientos = document.getElementById("doscientos").value
    let cien = document.getElementById("cien").value
    let cincuenta = document.getElementById("cincuenta").value
    let veinte = document.getElementById("veinte").value
    let diez = document.getElementById("diez").value

    let calculo = (mil*1000) + (quinientos * 500) + (doscientos * 200) + (cien * 100) + (cincuenta * 50) + (veinte * 20) + (diez * 10)

console.log(calculo)
document.getElementById("total").innerHTML = calculo
}

function limpiar(){
    document.getElementById("mil").value=""
    document.getElementById("quinientos").value=""
    document.getElementById("doscientos").value=""
    document.getElementById("cien").value=""
    document.getElementById("cincuenta").value=""
    document.getElementById("veinte").value=""
    document.getElementById("diez").value=""

    document.getElementById("total").innerHTML = 0
    sound.play();
}

function limpiarTotal(){
    document.getElementById("total").innerHTML = ""
}

var sound = new Audio();
sound.src = "homero.mp3";
