//Estructura = OBJETOS
//Desestructura = ABRIR OBJETOS
const persona = {
  apellidos : "De La Cruz Sotelo",
  nombres : "Jesus Rodrigo",
  edad : 18,
  skills: ["PHP", "Java", "JavaScript", "Python"]
}

//Guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad
*/

//Desestructurar es separar datos provenientes de un objeto
//NOTA: No es necesario recuperar toda la coleccion
//NOTA: La variable deben coinciden con las claves
const {nombres, skills} = persona

console.log(nombres, skills)
