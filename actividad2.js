//Crear un obejto que almacene datos de una mascota
//desestructurar utilizando un minimo de 4 variables
//mostrar en consola.
const mascota = {
  nombre : "Doky",
  especie : "Perro",
  raza : "Golden",
  color : "Marron",
  edad :  4,
  skills: ["juagar", "dormir", "comer"]
}

const {nombre, especie, raza, skills} = mascota

console.log(nombre, especie, raza, skills)
