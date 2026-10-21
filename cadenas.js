//cadenas = conjunto de caracteres
//1 solo caracter = CHAR

//Existen 3 formas de crear cadenas JS:
const tradicional = "Hola soy un texto"
const simple = 'Un gusto conocerte'
const mensaje = `Soy un texto muy especial`

//Backticks permite  multilineas + inyeccion
const nombre = 'Jhon'
const carrera = 'Programador'

const historia = `
Esta es la historia de ${nombre}
un ${carrera}
que solo queria Vibecodear
`
console.log(historia)

//Propiedades
const longitud = carrera.length // Total de caracteres
console.log(longitud)

//Esta constante no es un areglo
const amigos = "Luis, Miguel, Juan, Jose, Raul, Ernesto"

//Metodos
console.log('concat:', carrera.concat(nombre)) //Concatenar (unir)
console.log('repeat:', carrera.repeat(3)) //repetir
console.log('replace', carrera.replace('a', '@')) //remplazar primero
console.log('UpperCase', carrera.toUpperCase()) //Mayuscula
console.log('LowerCase', carrera.toLowerCase()) //minuscula
console.log('replaceAll', carrera.replaceAll('a', '@')) //remplaza todos
console.log('split:', carrera.split('m')) //Devuelve un array
console.log('trim:', carrera.trim()) //quita espacios vacios extremos

//Extaer primeros 3 caracteres
console.log('3 primero:', carrera.substring(0, 3)) // 0 = index(inicio), 3 = total

//Extaer la palabra "grama" de programador
console.log('Caracteres internos:', carrera.substring(3, 8))