//Hacer una consulta al API y obtener una lista de los planetas
//Mostrar unicamente los planetas que NO hayan sido destruidos (idDestroyed)
//los datos a mostrar son: name(id) Ejemplo: Monmar(6)
async function obtenerPlanetas(){
  const API_URL = 'https://dragonball-api.com/api/planets/'
  try {
    const respuesta = await fetch(API_URL);
    if(!respueta.ok){
      throw new ERROR(`No hay conexion`)
    }
    const datos = await respuesta.json()
    const planetas = datos.items

    planetas.array.forEach(planeta => {
      console.log(`Planeta: ${planeta.name} - destruido: ${planeta.isDistroyed}`)
    });
  } catch (error) {
    console.error(`No se pudo conectar la operacion: ${e}`)
  }
}
obetenerPlanetas();