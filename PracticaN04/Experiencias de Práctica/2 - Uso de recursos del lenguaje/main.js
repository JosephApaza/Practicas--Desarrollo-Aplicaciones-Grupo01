/*
//a) Uso de variables y constantes
let p = 1;
let q = "Hola Mundo";
let r = 2;
let s = "Opción 2";
const t = "Variable constante"; //No puede ser modificado.

if (p===1)
    console.log(q);
if (r===2)
    console.log(s);

console.log(t)

function suma() {
    let a = 3;
    let b = 2;
    return a + b;
}
console.log(suma());
*/

/*
//b) Elevación de variables
console.log(x === undefined); //La variable no fue declara con anterioridad, 
                            //siendo indefinido, por ello devuelve true.
var x = 3;

var myvar = 'my value'; //Variable en ámbito global
(function() {
    console.log(myVar); //La variable 'myVar' no fue declarada antes 
                        //en el ámbito local, siendo indefinido.
var myvar = 'valor local';
})();
*/

/*
//c) Uso de consolelog y scope
let a = "Hola Mundo";
console.log(a); //Hola Mundo

function doble() {
    let b = 2;
    console.log(b * b)
}
doble() //4

console.log(b); //b is not defined
*/

/*
//d) Uso de tipos de datos y cambio de tipos de datos
var answer = 42;
answer = 'Gracias por todo el pescado...'; //En javascript las variables 
                                        //no se asocian con un tipo de dato.
//La función parseInt recibe un dos argumentos, el 1ro será el valor a convertir, el 2do la base.
//Si encuentra un caracter que no es un numeral de la base mandada, se detiene y 
//retorna el valor hasta donde haya llegado.
console.log(parseInt("F", 16)); // 15
console.log(parseInt("10", 8)); // 8
console.log(parseInt("15", 10)); // 15
console.log(parseInt(15.99, 10)); // 15
console.log(parseInt("FXX123", 16)); // 15
console.log(parseInt("1111", 2)); // 15
console.log(parseInt("15*3", 10)); // 15
console.log(parseInt("12", 13)); // 15
console.log(parseInt("Hello", 8)); // NaN
console.log(parseInt("0x7", 10)); // 0
console.log(parseInt("546", 2)); // NaN

//Se llama al método toString que devuelve el valor del objeto.
var howMany = 10;
alert("howMany.toString() is " + howMany.toString()); // Muestra "10"
alert("45 .toString() is " + 45 .toString()); // Muestra "45"

//Al enviar el número dos como argumento al toString, nos devuelve el valor en binario
var x = 7;
alert("Valor binario de " + x + ":   " + x.toString(2)) // Muestra "111"
*/