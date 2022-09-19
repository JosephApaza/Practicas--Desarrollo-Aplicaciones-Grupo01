function autos(modelo, año_fabricación){
    return('Este auto es: ' + modelo + ' y su año de fabricación es: ' +año_fabricación)
}
console.log(autos('suzuki', '1999'));
 
/*Otros Ejemplos */
function suma(a,b){
    return('La suma de ' + a + ' + ' + b + ' es: ' + parseInt(a + b));
}
console.log(suma(1,5))
 
function promedio(a,b,c){
    let promedio = (a+b+c)/3;
 
return `El promedio de las notas ${a}, ${b}, ${c} es ${promedio}`
}
console.log(promedio(15,20,16));
const multiplicacion = (a, b) => {
    const multi = a * b;
    return `La multiplicación de ${a} x ${b} es: ${multi}`
}
console.log(multiplicacion(5,5))
/*Función como Parámetro */
/*Creamos como una plantilla de función que hará uso de otra función */
const usarAlert = (fun,x) =>{
    alert(fun(x));
}
/*restar es una función que se usará mediante la función anterior pero esta función se declarará como un parámetro */
const resta = (a = 20, b = 10) => {
    let resta = a -  b;
    return `La resta de ${a} - ${b} es: ${resta}`
}
/*A diferencia de otras funciones esto es una función dentro de otra función */
usarAlert(resta);
