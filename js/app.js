var acumulado = 0;
var ultimaOperacion= "";
var nuevoResultado;
var numero1 = 0;
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
        
        var display = document.getElementById('display');
        var pantalla = document.getElementsByClassName('pantalla');
        
        var on = document.getElementById('on');
        var sign = document.getElementById('sign');
        
        uno.addEventListener('click',function(){
            calculadora.escribir(1)});
        uno.addEventListener('mousedown', function(){
            uno.setAttribute('style','transform:scale(0.85,0.85)')
        });
        uno.addEventListener('mouseout', function(){
            uno.setAttribute('style','transform:scale(1,1)')
        });
        dos.addEventListener('click',function(){
            calculadora.escribir(2)});
        dos.addEventListener('mousedown', function(){
            dos.setAttribute('style','transform:scale(0.85,0.85)')
        });
        dos.addEventListener('mouseout', function(){
            dos.setAttribute('style','transform:scale(1,1)')
        });
        tres.addEventListener('click',function(){
            calculadora.escribir(3)});
        tres.addEventListener('mousedown', function(){
            tres.setAttribute('style','transform:scale(0.85,0.85)')
        });
        tres.addEventListener('mouseout', function(){
            tres.setAttribute('style','transform:scale(1,1)')
        });
        cuatro.addEventListener('click',function(){
            calculadora.escribir(4)});
        cuatro.addEventListener('mousedown', function(){
            cuatro.setAttribute('style','transform:scale(0.85,0.85)')
        });
        cuatro.addEventListener('mouseout', function(){
            cuatro.setAttribute('style','transform:scale(1,1)')
        });
        cinco.addEventListener('click',function(){
            calculadora.escribir(5)});
        cinco.addEventListener('mousedown', function(){
            cinco.setAttribute('style','transform:scale(0.85,0.85)')
        });
        cinco.addEventListener('mouseout', function(){
            cinco.setAttribute('style','transform:scale(1,1)')
        });
        seis.addEventListener('click',function(){
            calculadora.escribir(6)});
        seis.addEventListener('mousedown', function(){
            seis.setAttribute('style','transform:scale(0.85,0.85)')
        });
        seis.addEventListener('mouseout', function(){
            seis.setAttribute('style','transform:scale(1,1)')
        });
        siete.addEventListener('click',function(){
            calculadora.escribir(7)});
        siete.addEventListener('mousedown', function(){
            siete.setAttribute('style','transform:scale(0.85,0.85)')
        });
        siete.addEventListener('mouseout', function(){
            siete.setAttribute('style','transform:scale(1,1)')
        });
        ocho.addEventListener('click',function(){
            calculadora.escribir(8)});
        ocho.addEventListener('mousedown', function(){
            ocho.setAttribute('style','transform:scale(0.85,0.85)')
        });
        ocho.addEventListener('mouseout', function(){
            ocho.setAttribute('style','transform:scale(1,1)')
        });
        nueve.addEventListener('click',function(){
            calculadora.escribir(9)});
        nueve.addEventListener('mousedown', function(){
            nueve.setAttribute('style','transform:scale(0.85,0.85)')
        });
        nueve.addEventListener('mouseout', function(){
            nueve.setAttribute('style','transform:scale(1,1)')
        });
        cero.addEventListener('click',function(){
            calculadora.escribir(0)});
        cero.addEventListener('mousedown', function(){
            cero.setAttribute('style','transform:scale(0.85,0.85)')
        });
        cero.addEventListener('mouseout', function(){
            cero.setAttribute('style','transform:scale(1,1)')
        });
        punto.addEventListener('click',function(){
            calculadora.escribir('.')});
        punto.addEventListener('mousedown', function(){
            punto.setAttribute('style','transform:scale(0.85,0.85)')
        });
        punto.addEventListener('mouseout', function(){
            punto.setAttribute('style','transform:scale(1,1)')
        });
        sign.addEventListener('click',function(){
            calculadora.escribir('-')});
        sign.addEventListener('mousedown', function(){
            sign.setAttribute('style','transform:scale(0.85,0.85)')
        });
        sign.addEventListener('mouseout', function(){
            sign.setAttribute('style','transform:scale(1,1)')
        });
        on.addEventListener('click',function(){
            calculadora.borrar()});
        on.addEventListener('mousedown', function(){
            on.setAttribute('style','transform:scale(0.85,0.85)')
        });
        on.addEventListener('mouseout', function(){
            on.setAttribute('style','transform:scale(1,1)')
        });
    },
    escribir: function (valorTecla) {
        var op;
        //variables de operación
        var mas= document.getElementById('mas');
        var menos= document.getElementById('menos');
        var por= document.getElementById('por');
        var dividido= document.getElementById('dividido');
        var igual = document.getElementById('igual');
        var raiz = document.getElementById('raiz');

        if (display.textContent == "0" && valorTecla != ".") {
            if(valorTecla == '-'){
                valorTecla = 0;
            }
            display.textContent = valorTecla;
        }else if (display.textContent.length < 8) {
            display.textContent = display.textContent + valorTecla;
            if (valorTecla == '-'){
                calculadora.verificarDigito('-')
            }
            if (valorTecla == '.'){
                calculadora.verificarDigito('.')
            }
        }
        mas.addEventListener('mousedown', function(){
            mas.setAttribute('style','transform:scale(0.85,0.85)')
        });
        mas.addEventListener('mouseout', function(){
            mas.setAttribute('style','transform:scale(1,1)')
        });
        mas.onclick = function(){
            numero1 = display.textContent;
            op = '+'
            calculadora.calculando(display.textContent,op)
            display.textContent = "";
        }
        menos.addEventListener('mousedown', function(){
            menos.setAttribute('style','transform:scale(0.85,0.85)')
        });
        menos.addEventListener('mouseout', function(){
            menos.setAttribute('style','transform:scale(1,1)')
        });
        menos.onclick = function(){
            numero1 = display.textContent;
            operaciones = '-';
            calculadora.calculando(display.textContent,operaciones)
            display.textContent = "";
        }
        por.addEventListener('mousedown', function(){
            por.setAttribute('style','transform:scale(0.85,0.85)')
        });
        por.addEventListener('mouseout', function(){
            por.setAttribute('style','transform:scale(1,1)')
        });
        por.onclick = function(){
            numero1 = display.textContent;
            operaciones = 'mul';
            calculadora.calculando(display.textContent,operaciones)
            display.textContent = "";
        }
        dividido.addEventListener('mousedown', function(){
            dividido.setAttribute('style','transform:scale(0.85,0.85)')
        });
        dividido.addEventListener('mouseout', function(){
            dividido.setAttribute('style','transform:scale(1,1)')
        });
        dividido.onclick = function(){
            numero1 = display.textContent;
            operaciones = 'div';
            calculadora.calculando(display.textContent,operaciones)
            display.textContent = "";
        }
        igual.addEventListener('mousedown', function(){
            igual.setAttribute('style','transform:scale(0.85,0.85)')
        });
        igual.addEventListener('mouseout', function(){
            igual.setAttribute('style','transform:scale(1,1)')
        });
        igual.onclick = function(){
            operaciones = 'igual';
            calculadora.calculando(display.textContent,operaciones)
        }
        raiz.addEventListener('mousedown', function(){
            raiz.setAttribute('style','transform:scale(0.85,0.85)')
        });
        raiz.addEventListener('mouseout', function(){
            raiz.setAttribute('style','transform:scale(1,1)')
        });
        raiz.onclick = function(){
            operaciones = 'raiz';
            calculadora.calculando(display.textContent,operaciones)
        }
    },
    verificarDigito: function(Teclavalor){
        if (Teclavalor == '-'){
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
                display.textContent = display.textContent.substring(1,largo);
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
        if (Teclavalor == '.'){
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
    },
    borrar: function(){
        display.textContent = "0";
        acumulado = 0;
        ultimaOperacion= "";
        nuevoResultado="";
        numero1=0;
    },
    calculando: function(numero,operaciones){
        //alert('Numero '+numero +' '+'operacion '+operaciones+'numero1 '+numero1);
        // if (numero == "" && operaciones != ""){
        //     alert('Numero '+ numero +'numero1 '+ numero1);
        //     numero = numero1;
        //     numero1 = 0;
        // }
        var resultado = 0;
        var display = document.getElementById('display');
        if (operaciones == '+'){
            if(ultimaOperacion == '-'){
                acumulado = acumulado - parseFloat(numero);
            }else if(ultimaOperacion == 'mul'){
                acumulado = acumulado * parseFloat(numero);
            }else if(ultimaOperacion == 'div'){
                acumulado = acumulado / parseFloat(numero);
            }else if(ultimaOperacion == 'igual'){
                acumulado = nuevoResultado;
                calculadora.crearNuevoResultado(acumulado);
            }else{
                acumulado = acumulado + parseFloat(numero);
            }
            ultimaOperacion = '+';
        }
        if (operaciones == '-'){
            if (acumulado == 0 && numero != 0){
                acumulado = parseFloat(numero) - acumulado;
            }else{
                if(ultimaOperacion == '-'){
                    acumulado = acumulado - parseFloat(numero);
                }
                if(ultimaOperacion == '+'){
                    acumulado = acumulado + parseFloat(numero);
                }
                if(ultimaOperacion == 'mul'){
                    acumulado = acumulado * parseFloat(numero);
                }
                if(ultimaOperacion == 'div'){
                    acumulado = acumulado / parseFloat(numero);
                }
            }
            if(ultimaOperacion == 'igual'){
                acumulado = nuevoResultado;
            }
            ultimaOperacion = '-';
        }
        if (operaciones == 'div'){
            if (acumulado == 0 && numero != 0){
                acumulado = parseFloat(numero);
            }else{

                if(ultimaOperacion == '-'){
                    acumulado = acumulado - parseFloat(numero);
                }else if(ultimaOperacion == '+'){
                    acumulado = acumulado + parseFloat(numero);
                }else if(ultimaOperacion == 'mul'){
                    acumulado = acumulado * parseFloat(numero);
                }else if (operaciones == raiz){
                    acumulado = Math.sqrt(acumulado);
                }else{
                    acumulado = acumulado / parseFloat(numero);
                }
            }
            if(ultimaOperacion == 'igual'){
                acumulado = nuevoResultado;
            }
            ultimaOperacion = 'div';
        }
        if (operaciones == 'raiz'){
            alert('Numero '+numero +' '+' acumulado '+acumulado);
            acumulado = Math.sqrt(parseFloat(numero));
            display.textContent = acumulado
            // if (acumulado == 0 && parseFloat(numero) > 0){
            //     acumulado = math.sqrt(parseFloat(numero));
            //     alert(acumulado);
            // }else{
            //     acumulado = math.sqrt(acumulado);
            //     alert(acumulado);
            // }
        }
        if (operaciones == 'mul'){
            if (acumulado == 0 && parseFloat(numero) > 0){
                acumulado = parseFloat(numero);
            }else{
                if(ultimaOperacion == '-'){
                    acumulado = acumulado - parseFloat(numero);
                }else if(ultimaOperacion == '+'){
                    acumulado = acumulado + parseFloat(numero);
                }else{
                    acumulado = acumulado * parseFloat(numero);
                }
            }
            if(ultimaOperacion == 'igual'){
                acumulado = nuevoResultado;
            }
            ultimaOperacion = 'mul';
        }
        if (operaciones == 'igual'){
            if (ultimaOperacion == '+'){
                resultado = acumulado + parseFloat(numero);
            }
            if (ultimaOperacion == '-'){
                resultado = acumulado - parseFloat(numero);
            }
            if (ultimaOperacion == 'mul'){
                resultado = acumulado * parseFloat(numero);
            }
            if (ultimaOperacion == 'div'){
                resultado = acumulado / parseFloat(numero);
            }
            if (ultimaOperacion == 'raiz'){
                resultado = acumulado;
            }
            var nuevoValor = resultado.toString();
            if (nuevoValor.length>8){
                nuevoValor = nuevoValor.substring(0,8);
                resultado = parseFloat(nuevoValor);
                display.textContent = resultado;
            }else{
                display.textContent = resultado;
            }
            ultimaOperacion = 'igual';
            nuevoResultado = resultado;
        }
    },
    crearNuevoResultado: function(nuevoValor){

        return nuevoValor;
    }
}
calculadora.operacion();