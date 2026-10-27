//Se requiere tenga las claves:
//2 cadena
//2 numericos (entero, decimal)
//1 null
//1 logica (false/true)
//1 array (cadenas)
//1 array (objetos)
//1 objetos (arrays)

const persona = {
  apellidos: "De La Cruz Sotelo",
  nombres: "Jesus Rodrigo",
  edad: 18,
  sueldo: 400.50,
  segundoTrabajo: null,
  estudia: "true",
  skilss: ["JavaScript", "MySql", "HTML"],
  familiares: [
    {nombre:"Ana", pariente: "Mamá"},
    {nombre:"Jorge", pariente: "Abuelo"},
    {nombre:"Susana", pariente: "Tia"}
  ],
  informacion: {
    direccion:["Ica","Chincha", "Sunampe" ],
    telefonos:["934155450", "909030456"],
    estudios:["Primaria", "Secundaria", "Superior"]
  }
}

console.log(persona.skilss[1])

const telefonos = persona.informacion.telefonos
telefonos.forEach(telefonos =>{
  console.log(telefonos)
});