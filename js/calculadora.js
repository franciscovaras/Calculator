var operacion;
var operacionA = 0;
var operacionB = 0;
var numero = 0;

function calculadora(){
    var resultado = document.getElementById('display');
    var pantalla = document.getElementsByClassName('pantalla');
    //variables números
    
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    
    //variables de operaciosnes básicas
    var suma = document.getElementById('mas');
    var resta = document.getElementById('menos');
    var multiplicar = document.getElementById('por');
    var division = document.getElementById('dividido');
    
    //variables para borrar
    var CE = document.getElementById('ce');
    var C = document.getElementById('c');

    var igual = document.getElementById('igual');

    uno.onclick = function() {
        resultado.value = resultado.value + "1";
        alert('estoy aca');
    }
    dos.onclick = function(){
        resultado.value = resultado.value + "2";
    }
    tres.onclick = function(){
        resultado.value = resultado.value + "3";
    }
    cuatro.onclick = function(){
        resultado.value = resultado.value + "4";
    }
    cinco.onclick = function(){
        resultado.value = resultado.value + "5";
    }
    seis.onclick = function(){
        resultado.value = resultado.value + "6";
    }
    siete.onclick = function(){
        resultado.value = resultado.value + "7";
    }
    ocho.onclick = function(){
        resultado.value = resultado.value + "8";
    }
    nueve.onclick = function(){
        resultado.value = resultado.value + "9";
    }
    cero.onclick = function(){
        resultado.value = resultado.value + "0";
    }
    
    suma.onclick = function(){
        operacion = "+";
        
        if(numero == 0){
            var operandoA = resultado.value;
            numero = parseFloat(operandoA);
        }
        else{
            var operandoA = resultado.value;
            var operandoB = parseFloat(operandoA);
            numero = parseFloat(operandoB) + parseFloat(numero);
        }
        resultado.value ="";
    }
    resta.onclick = function(){
        operacion = "-";
    }
    division.onclick = function(){
        operacion = "/";
    }
    multiplicar.onclick = function(){
        operacion = "*";
    }
    igual.onclick = function(){
        operacionB = resultado.value;
        resultado.value ="";
        resultadoFinal();
    }
    //procedimientos de borrar
    
    CE.onclick = function(){
       resultado.value ="";
       operacion = "";
       operacionA = 0;
       operacionB = 0;
       numero = 0;
    }
    C.onclick = function(){
        resultado.value ="";
    }
}
function borrar(){
    resultado.value ="";
    operacion = "";
    operacionA = "";
    operacionB = "";
}
function resultadoFinal(){
    var res = 0;
   
    if (operacion == "+"){
        res = parseFloat(numero) + parseFloat(operacionB);
    }
    if (operacion == "-"){
        res = parseFloat(operacionA) - parseFloat(operacionB);
    }
    if (operacion == "*"){
        res = parseFloat(operacionA) * parseFloat(operacionB);
    }
    if (operacion == "/"){
        res = parseFloat(operacionA) / parseFloat(operacionB);
    }
    borrar();
    document.getElementById('resultado').value= res;

    
}
