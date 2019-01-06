function reducirTamañoBotonAccion(elemento){
    elemento.style.width = "18%";
  }

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
        var resultado = document.getElementById('display');
        var pantalla = document.getElementsByClassName('pantalla');

        uno.onclick = function() {
            //resultado.value = resultado.value + "1";
            //pantalla.innerHTML = 1;
            alert('estoy aca');
            //reducirTamañoBotonAccion();
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
    }
}