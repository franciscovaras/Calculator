var numero= 0;


function calculadora () {
    
    function calcular (){
        this.numero = numero,
        this.operacion = operacion
    }
    
    var numero1 = 0;
    var operacion1;

    //variables números
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //variables de operación
    var mas= document.getElementById('mas');
    var menos= document.getElementById('menos');
    var por= document.getElementById('por');
    var dividido= document.getElementById('dividido');
   
    var igual = document.getElementById('igual');
    var pantalla = document.getElementById('display');
    
    uno.onclick = function() {
        numero1 = 1;
    }
    dos.onclick = function(){
        numero1 = 2;
    }
    tres.onclick = function(){
        numero1 = 3;
    }
    cuatro.onclick = function(){
        numero1 = 4;
    }
    cinco.onclick = function(){
        numero1 = 5;
    }
    seis.onclick = function(){
        numero1 = 6;
    }
    siete.onclick = function(){
        numero1 = 7;
    }
    ocho.onclick = function(){
        numero1 = 8;
    }
    nueve.onclick = function(){
        numero1 = 9;
    }
    cero.onclick = function(){
        numero1 = 0;
    }

    //operacion
    mas.onclick = function(){
        operacion1 = '+';
    }
    menos.onclick = function(){
        operacion1 = '-';
    }
    por.onclick = function(){
        por = '*';
    }
    dividido.onclick = function(){
        dividido = '/';
    }

    console.log(numero1+operacion1);

    var resultado = new calcular(numero1,operacion1);
    document.getElementById('display').innerHTML = resultado.numero;
}