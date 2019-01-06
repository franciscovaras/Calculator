var calculadora = {
    acumulado:0,
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
        var sign = document.getElementById('sign');

        uno.onclick = function() {
            calculadora.escribir(1);
            uno.addEventListener('mousedown', function(){
                uno.setAttribute('style','transform:scale(0.85,0.85)')
            });
            uno.addEventListener('mouseout', function(){
                uno.setAttribute('style','transform:scale(1,1)')
            });
        }
        dos.onclick = function() {
            calculadora.escribir(2);
            dos.addEventListener('mousedown', function(){
                dos.setAttribute('style','transform:scale(0.85,0.85)')
            });
            dos.addEventListener('mouseout', function(){
                dos.setAttribute('style','transform:scale(1,1)')
            });
        }
        tres.onclick = function() {
            calculadora.escribir(3);
            tres.addEventListener('mousedown', function(){
                tres.setAttribute('style','transform:scale(0.85,0.85)')
            });
            tres.addEventListener('mouseout', function(){
                tres.setAttribute('style','transform:scale(1,1)')
            });
        }
        cuatro.onclick = function() {
            calculadora.escribir(4);
            cuatro.addEventListener('mousedown', function(){
                cuatro.setAttribute('style','transform:scale(0.85,0.85)')
            });
            cuatro.addEventListener('mouseout', function(){
                cuatro.setAttribute('style','transform:scale(1,1)')
            });
        }
        cinco.onclick = function() {
            calculadora.escribir(5);
            cinco.addEventListener('mousedown', function(){
                cinco.setAttribute('style','transform:scale(0.85,0.85)')
            });
            cinco.addEventListener('mouseout', function(){
                cinco.setAttribute('style','transform:scale(1,1)')
            });
        }
        seis.onclick = function() {
            calculadora.escribir(6);
            seis.addEventListener('mousedown', function(){
                seis.setAttribute('style','transform:scale(0.85,0.85)')
            });
            seis.addEventListener('mouseout', function(){
                seis.setAttribute('style','transform:scale(1,1)')
            });
        }
        siete.onclick = function() {
            calculadora.escribir(7);
            siete.addEventListener('mousedown', function(){
                siete.setAttribute('style','transform:scale(0.85,0.85)')
            });
            siete.addEventListener('mouseout', function(){
                siete.setAttribute('style','transform:scale(1,1)')
            });
        }
        ocho.onclick = function() {
            calculadora.escribir(8);
            ocho.addEventListener('mousedown', function(){
                ocho.setAttribute('style','transform:scale(0.85,0.85)')
            });
            ocho.addEventListener('mouseout', function(){
                ocho.setAttribute('style','transform:scale(1,1)')
            });
        }
        nueve.onclick = function() {
            calculadora.escribir(9);
            nueve.addEventListener('mousedown', function(){
                nueve.setAttribute('style','transform:scale(0.85,0.85)')
            });
            nueve.addEventListener('mouseout', function(){
                nueve.setAttribute('style','transform:scale(1,1)')
            });
        }
        cero.onclick = function() {
            calculadora.escribir(0);
            cero.addEventListener('mousedown', function(){
                cero.setAttribute('style','transform:scale(0.85,0.85)')
            });
            cero.addEventListener('mouseout', function(){
                cero.setAttribute('style','transform:scale(1,1)')
            });
        }
        punto.onclick =function(){
            calculadora.escribir('.');
            punto.addEventListener('mousedown', function(){
                punto.setAttribute('style','transform:scale(0.85,0.85)')
            });
            punto.addEventListener('mouseout', function(){
                punto.setAttribute('style','transform:scale(1,1)')
            });
        }
        sign.onclick = function(){
            calculadora.escribir('-');
            sign.addEventListener('mousedown', function(){
                sign.setAttribute('style','transform:scale(0.85,0.85)')
            });
            sign.addEventListener('mouseout', function(){
                sign.setAttribute('style','transform:scale(1,1)')
            });
        }
        on.onclick = function(){
            calculadora.borrar();
            on.addEventListener('mousedown', function(){
                on.setAttribute('style','transform:scale(0.85,0.85)')
            });
            on.addEventListener('mouseout', function(){
                on.setAttribute('style','transform:scale(1,1)')
            });
        }
    },
    escribir: function (valorTecla) {
        var operaciones;
        if (display.textContent == "0" && valorTecla != ".") {
            display.textContent = valorTecla;
        }else if (display.textContent.length < 8) {
            display.textContent = display.textContent + valorTecla;
            if (valorTecla == '-'){
                var neg = 0;
                //con este for valida cuando el usuario presione más de dos veces la tecla sign
                for (i = 0; i < display.textContent.length; i++){
                    var caracter = display.textContent.substring(i,1);
                    if (caracter == '-'){
                        neg++;
                    }
                }
                //si el usuario ya había presionado la tecla sign no va a mostrar el caracter "-" en pantalla 
                //de lo contrario lo colocará en primera posición
                if (neg > 0){
                    var largo = 0;
                    largo = display.textContent.length;
                    largo = largo - 1;
                    display.textContent = display.textContent.substring(0,largo);
                }else{
                    var largo = 0;
                    largo = display.textContent.length;
                    largo = largo - 1;
                    display.textContent = display.textContent.substring(0,largo);
                    display.textContent = '-' + display.textContent;
                }
                
            }
            //realizo validación para el "."
            //impedir que usuario ingrese más de 2 veces el "." en una misma cadena
            if (valorTecla == '.'){
                var nuevaCadena = "";
                var valorCadena = 0;
                valorCadena = display.textContent.indexOf('.');
                valorCadena = valorCadena + 1;
                var largo = 0;
                largo = display.textContent.length;
                nuevaCadena = display.textContent.substring(valorCadena,largo);
                var nuevoLargo = 0;
                nuevoLargo = nuevaCadena.length;
                if (nuevoLargo > 0){
                    largo = largo-1;
                    display.textContent = display.textContent.substring(0,largo);
                }
            }
        }
        mas.onclick = function(){
            mas.addEventListener('mousedown', function(){
                mas.setAttribute('style','transform:scale(0.85,0.85)')
            });
            mas.addEventListener('mouseout', function(){
                mas.setAttribute('style','transform:scale(1,1)')
            });
            operaciones = '+';
            calculadora.calculando(display.textContent,operaciones)
            display.textContent = "";
        }
        menos.onclick = function(){
            menos.addEventListener('mousedown', function(){
                menos.setAttribute('style','transform:scale(0.85,0.85)')
            });
            menos.addEventListener('mouseout', function(){
                menos.setAttribute('style','transform:scale(1,1)')
            });
            operaciones = '-';
            calculadora.calculando(display.textContent,operaciones)
            display.textContent = "";
        }
        por.onclick = function(){
            por.addEventListener('mousedown', function(){
                por.setAttribute('style','transform:scale(0.85,0.85)')
            });
            por.addEventListener('mouseout', function(){
                por.setAttribute('style','transform:scale(1,1)')
            });
            operaciones = '*';
            calculadora.calculando(display.textContent,operaciones)
            display.textContent = "";
        }
        dividido.onclick = function(){
            dividido.addEventListener('mousedown', function(){
                dividido.setAttribute('style','transform:scale(0.85,0.85)')
            });
            dividido.addEventListener('mouseout', function(){
                dividido.setAttribute('style','transform:scale(1,1)')
            });
            operaciones = '/';
            calculadora.calculando(display.textContent,operaciones)
            display.textContent = "";
        }
        igual.onclick = function(){
            //alert('resultado');
            igual.addEventListener('mousedown', function(){
                igual.setAttribute('style','transform:scale(0.85,0.85)')
            });
            igual.addEventListener('mouseout', function(){
                igual.setAttribute('style','transform:scale(1,1)')
            });
            operaciones = 'igual';
            calculadora.calculando(display.textContent,operaciones)
            display.textContent = "";
        }
    },
    borrar: function(){
        display.textContent = "0";
    },
    calculando: function(numero,operacion){
        //alert(numero +' '+operacion);
        
        
        var acumulado = [];
        acumulado.push(numero);
        var res = acumulado[0];
        alert(res);
        if (operacion == '+'){
            res = res + parseFloat(numero);
        }
        acumulado = res;
        if (operacion == 'igual'){
            display.textContent = res;
        }
    }
}
calculadora.operacion();