var calculadora = {
    operacion: function(){
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
        
        //variables de operación
        var mas= document.getElementById('mas');
        var menos= document.getElementById('menos');
        var por= document.getElementById('por');
        var dividido= document.getElementById('dividido');
        
        var igual = document.getElementById('igual');
        var display = document.getElementById('display');
        var pantalla = document.getElementsByClassName('pantalla');
        
        var on = document.getElementById('on');

        uno.onclick = function() {
            calculadora.escribir(1);
            setInterval(calculadora.presionarBoton(uno),3000);
            calculadora.presionarBoton1(uno);
        }
        dos.onclick = function() {
            calculadora.escribir(2);
        }
        tres.onclick = function() {
            calculadora.escribir(3);
        }
        cuatro.onclick = function() {
            calculadora.escribir(4);
        }
        cinco.onclick = function() {
            calculadora.escribir(5);
        }
        seis.onclick = function() {
            calculadora.escribir(6);
        }
        siete.onclick = function() {
            calculadora.escribir(7);
        }
        ocho.onclick = function() {
            calculadora.escribir(8);
        }
        nueve.onclick = function() {
            calculadora.escribir(9);
        }
        cero.onclick = function() {
            calculadora.escribir(0);
        }
        on.onclick = function(){
            calculadora.borrar();
        }    
        
    },
    escribir: function (valorTecla) {
        if (display.textContent == "0" && valorTecla != ".") {
            display.textContent = valorTecla;
        }else if (display.textContent.length < 8) {
            display.textContent = display.textContent + valorTecla;
        }
    },
    presionarBoton: function(elemento){
        elemento.style.width = "20%";
        elemento.style.height = "61.91px";
        elemento.style.margin = '2%';
        //elemento.style.width = "29%";
    },
    presionarBoton1: function(elemento){
        elemento.style.width = "29%";
        elemento.style.height = "62.91px";
        elemento.style.margin = '0px';
    },
    borrar: function(){
        display.textContent = "0";
    }
}
calculadora.operacion();