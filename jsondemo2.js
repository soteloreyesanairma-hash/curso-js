//https://dragonball-api.com/api/characters/3

//Paso 1: Funcion asincrona (tiempos distintos/diferidos) - Latencia (ESPERAR...)
async function obtenerPersonaje(id){

  //Paso 2: URL (endpoint)
  const API_URL = `https://dragonball-api.com/api/characters/${id}`

//Paso 3: App es propensa a errores...
try{
  //Paso 4: Realizar peticion
  const respuesta = await fetch(API_URL)

  //Paso 5: ¿Existe una respuesta?
  if(!respuesta.ok){
    throw new Error(`No hay comunicacion con el servidor`) //Stop
  }

  //Paso 6: Si llegamos hasta aqui entonces hemos resivido los datos (JSON)
  //JSON (cadena) > OBJECT JS
  const datos = await respuesta.json()

  //Paso 7: Mostrar todo el JSON
  //console.log(datos)

  //Mostrar solo el nombre de las transformaciones
  const transformaciones = datos.transformations
  transformaciones.forEach(transformacion =>{
    console.log(transformacion.name)
});

}catch(error){
  console.error(`No se pudo conectar la operacion: ${e}`)
}

} //fin funcion obetenerPersonaje()

//TEST
//Debemos pasar el ID del personaje
obtenerPersonaje(2)