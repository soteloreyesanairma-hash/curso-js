//Crea una funcion que reciba el ID del planeta, haga uso del API Dragon ball
//y retorne una lista de personajes (name - race - affiliation). ejemplo: 1
//Picolo - namekian - z figther

//https://dragonball-api.com/api/planets/1

async function obtenerPlaneta(id){
  const API_URL = `https://dragonball-api.com/api/planets/${id}` 
  try{
    
  const respuesta = await fetch(API_URL)

  if(!respuesta.ok){
    throw new Error(`No hay conexion con el servidor`) //Stop
  }

  const datos = await respuesta.json()
  const caracteres = await respuesta.json()

  //console.log(datos)
    caracteres.array.forEach(caracteres => {
      console.log(`Personaje: ${caracteres.name} - raza: ${caracteres.race} - afiliacion: ${caracteres.affiliation}`)
    });

  }catch(error){
  console.error(`No se pudo conectar la operacion: ${e}`)
  }
}
obtenerPlaneta(1)



