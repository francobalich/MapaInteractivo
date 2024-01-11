
export const ClientTransporteAPI=async ()=>{
  const URL=`http://localhost:3000/`

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
}
