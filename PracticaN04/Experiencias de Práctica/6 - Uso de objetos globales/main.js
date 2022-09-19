/*
//a) Uso de objeto Window
document.querySelector("button").onclick = function() {
    window.alert("Hola Mundo");
    var nombre = window.prompt("Cual es tu nombre: ", "");
    window.alert("Hola " + nombre);
    var rpt = window.confirm("Que te vaya bien!!!!");
    if (rpt == true) {
        window.alert(":)");
    } else {
        window.alert(":(");
    }
    var aprender = window.confirm("¿Quieres aprender más de Javascript?");
    if (aprender == true) {
        let nuevaVent = window.open();
        nuevaVent.document.write("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae magnam alias nostrum incidunt, beatae tempora ea, quos autem esse voluptatem earum officiis. Corrupti nesciunt fuga, ipsa rem eaque hic.")
    } else {
        window.alert("Hasta luego!!");
    }
}
*/

/*
//b) Uso del objeto Array
let x = new Array();
let propiedades = function(a) {
    a.forEach(element => {
        console.log("Arreglo: ", element);
    });
}
x.push("Desarrollo");
x.push("Aplicaciones");
x.push("Practica");
x.unshift(1);
x.unshift("Grupo");
x.pop();
propiedades(x);
let y = "Desarrollo"
console.log("Posición de '" + y + "' : " + x.indexOf(y));
*/

/*
//c) Uso del objeto Number
let c = new Number('123.123');
console.log(c.toFixed());
console.log(c.valueOf());
console.log(c.toString());
console.log(c.toExponential());
console.log(c.toPrecision());
console.log(c.toLocaleString());

let palabra = new Number('Hola Mundo');
console.log(palabra.toString());
*/