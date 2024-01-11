const BASE_URL = 'https://apitransporte.buenosaires.gob.ar';
const CLIENT_ID = 'YOUR__CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';

export const TransporteAPI = async () => {
  const url = `${BASE_URL}/colectivos/vehiclePositionsSimple?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*', // Este encabezado no debería incluirse en la solicitud, es responsabilidad del servidor enviarlo en la respuesta
        // Agrega cualquier otro encabezado necesario según la API
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Se envio una respuesta");
    return data;
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
};
