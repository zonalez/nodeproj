// var --> variable global
// let --> se usan en un bloque
// const --> Constante



const opciones="HOLA MUNDO!";
console.log(opciones);

console.log("hola mundo!");
console.log("Segunda línea de código");
console.log("La tercera es la vencida");
for (var i=0; i<10; i++) {
    console.log(i);
} 

var c = 10;
console.log("El valor de c es: " + c);
if (true) {
    let c = 20;
    console.log("El valor de c dentro del bloque es: " + c);
}

console.log("El valor de c fuera del bloque es: " + c);


// funciones
function suma (a,b) {
    return a + b;
}

console.log ("El resultado de la función suma es: " + suma(10,20));

// función anónima
const sumar2 = function (a,b) {
    return a + b;
}
console.log ("El valor de sumar2 asignado a una función es: " + sumar2(10,30));

// función flecha
let sumar3 = (a,b) => {
    return a + b;
}

console.log (sumar3(1,2));

//Asincronismo
function paso1() {
    setTimeout(function() {console.log("paso 1")}, 500)
}

function paso2() {
    console.log("paso 2");
}

// Se ejecuta primero el paso2 por el asincronismo
paso1();
paso2();

//callbacks
function paso3(callback) {
   var a = 100 + 200;
   callback(a);
}


paso3(function(resultado){
    console.log(resultado);
});

const modulo = require ("./modulo");
console.log("El resultado del modulo sumar es: " + modulo.sumar(4,3));

const http = require('http');
const PORT = 8090;
const server = http.createServer((req, res) => {
    res.end("Hola, soy el servidor HTTP");
});

server.listen(PORT, function(error) {
    if (error) console.log(error);
    console.log("Hola, estoy escuchando por el puerto 8090");
});