//Almacenar un texto en una variable y luego mostralo en orden inverso en la consola
//Ejemplo : "senati" -> "itanes"
const textoOriginal = "nombre"
let textoInvertido = ""
const longitud = textoOriginal.length
for (let i = longitud - 1; i >= 0; i--){
  textoInvertido = textoInvertido + textoOriginal.substring(i, i + 1)
}
console.log(textoInvertido)

//Crear una variable donde almacene una direccion de correo electronico
//Verifica si el correo es valido cuando tiene  un solo @
//Ejemplo: 
// jhon@gmail.com   [correcto]
// luis@gamil@.com  [incorrecto]
// mariagmail.com   [incorrecto]
const correo = "rodrigo@gmail.com"
let total = 0

for (let i = 0; i < correo.length; i++){
  if(correo.substring(i, i + 1) === "@"){
    total = total + 1
  }
}

if(total === 1){
  console.log("Correcto")
}else{
  console.log("Incorrecto")
}