//Declaramos
var operandoa = 0;
var operandob;
var operacion;

function init() {
    console.log('init')
    //variables
    var resultado = document.getElementById("display");
    var on = document.getElementById('on');
    var sign = document.getElementById('sign');
    var raiz = document.getElementById('raiz');
    var dividido = document.getElementById('dividido');

    var pantalla = 0;
    var mas = document.getElementById('mas');



    var a0 = document.getElementById('a0');
    a0.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) *10 + 0;
        console.log('funcion')
    }

    var a1 = document.getElementById('a1');
    a1.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) *10 + 1;
        console.log('funcion')
    }

    var a2 = document.getElementById('a2');
    a2.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) *10 + 2;
        console.log('funcion')
    }

    var a3 = document.getElementById('a3');
    a3.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) *10 + 3;
        console.log('funcion')
    }

    var a4 = document.getElementById('a4');
    a4.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) *10 + 4;
        console.log('funcion')
    }

    var a5 = document.getElementById('a5');
    a5.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) *10 + 5;
        console.log('funcion')
    }

    var a6 = document.getElementById('a6');
    a6.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) *10 + 6;
        console.log('funcion')
    }

    var a7 = document.getElementById('a7');
    a7.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) *10 + 7;
        operandob = parseFloat(resultado.textContent)
        console.log('funcion')
    }

    var a8 = document.getElementById('a8');
    a8.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) *10 + 8;
        console.log('funcion')
    }

    var a9 = document.getElementById('a9');
    a9.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) *10 + 9;
        console.log('funcion')
    }

    var punto = document.getElementById('punto');
    punto.onclick = function(e) {
        resultado.textContent = parseFloat(resultado.textContent) + '.';
        console.log('funcion')
    }

    mas.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
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
        operandoa = parseFloat(resultado.textContent) *(-1);
        resultado.textContent = operandoa;
    }
    raiz.onclick = function(e){
        operandoa = Math.sqrt(parseFloat(resultado.textContent));
        resultado.textContent = operandoa;
    }


    function limpiar() {
        resultado.textContent = '0';
    }

    function resetear() {
        resultado.textContent = '0';
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }


    function resolver() {
        var res = 0;
        switch (operacion) {
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
        operandoa = res;
    }

}

init();