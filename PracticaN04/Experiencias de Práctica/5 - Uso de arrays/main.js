
//a) Creación de arrays
let a = [4,1,7,9,10]
console.log(a);

let b = [];
b.push("Desarrollo");
b.push("Aplicaciones");
b.push("Practica");
console.log(b);

let c = [];
c[0] = {nombre:"Joseph Apaza", codigo:2020240471};
c[1] = {nombre:"Oscar Champi", codigo:2020227131};
c[2] = {nombre:"Fernando Alcca", codigo:2017203841};
console.log(c);

//b) Manipulación de arrays
//Recorrido del array
a.forEach(element => {
    console.log(element);
});
//Ingreso y eliminación de datos
b.push("Experiencia Practica");
b.push("Numero 5");
console.log(b);
b.pop();
console.log(b);
b.unshift("Grupo 1");
console.log(b);
//Consulta en array de objetos
console.log("Nombre: " + c[0].nombre + "\n" + "Código: " + c[0].codigo)
console.log("Nombre: " + c[1].nombre + "\n" + "Código: " + c[1].codigo)
console.log("Nombre: " + c[2].nombre + "\n" + "Código: " + c[2].codigo)

//c) Uso de iteradores en arrays
console.log("---forEach---");
a.forEach(i => {
    console.log("Posición: ", i);
});
//for
console.log("---for---");
for (let i = 0; i < b.length; i++) {
    const j = b[i];
    console.log("Posición [",i,"]: ", j);
}
//while
console.log("---while---");
let i = 0;
while(true){ 
    const j = c[i];
    console.log("Posición [",i,"]: ", j);
    i++;
    if (i == c.length)
        break;
}
//do while
console.log("---do while---");
let k = 0;
do{ 
    const j = a[k];
    console.log("Posición [",k,"]: ", j);
    k++;
    if (k == a.length)
        break;
} while(true)
