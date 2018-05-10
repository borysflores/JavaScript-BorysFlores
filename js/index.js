//Declaramos
var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var display = document.getElementById("display");
    var on = document.getElementById('on');
    var sign = document.getElementById('sign');
    var raiz = document.getElementById('raiz');
    var dividido = document.getElementById('dividido');
    var siete = document.getElementById('7');
    var 8 = document.getElementById('8');
    var 9 = document.getElementById('9');
    var por = document.getElementById('por');
    var 4 = document.getElementById('4');
    var 5 = document.getElementById('5');
    var 6 = document.getElementById('6');
    var menos = document.getElementById('menos');
    var 1 = document.getElementById('1');
    var 2 = document.getElementById('2');
    var 3 = document.getElementById('3');
    var 0 = document.getElementById('0');
    var punto = document.getElementById('punto');
    var igual = document.getElementById('igual');
    var mas = document.getElementById('mas');

    //Eventos
    0.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    1.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    2.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    3.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    4.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    5.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    6.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    7.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    8.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    9.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    punto.onclick = function(e){
        resultado.textContent = resultado.textContent + ".";
    }
    on.onclick = function(e){
        resetear();
    }
    mas.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    menos.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    por.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    dividido.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
    sign.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    raiz.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }


    function limpiar(){
        resultado.textContent = "";
    }
    function resetear(){
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }


    function resolver(){
        var res = 0;
        switch(operacion){
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;
            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;
            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
        }
        resetear();
        resultado.textContent = res;
    }