//CREACIÓN DE OBJETOS
let alumno ={
    nombre: "Oscar",
    dni: 71707298,
    Nacionalidad: "Peruano",
    Edad: 21,
    getData: function(){
        return(this)
    }
}
let alumno1 ={
    nombre: "carlos",
    dni: 40216654,
    Nacionalidad: "BOLIVIANO",
    Edad: 19,
    getData: function(){
        return(this)
    }
}
//CREACIÓN DE OBJETOS POR MEDIO DE Object.create()
 
const alumno3 = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`Mi nombre es  ${this.name}, ? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(alumno3);
  
  me.name = "Carmen"; 
  me.isHuman = true; 
  
  me.printIntroduction();
 
console.log(alumno)
console.log(alumno1)
console.log(alumno3)
