# Mapa interactivo

Este es un proyecto realizado como solucion a un challenge en donde se debia hacer un mapa interactivo que cumpla con las siguientes consignas:

 * Mostrar un mapa interactivo centrado en la Ciudad de Buenos Aires.
 * Mostrar las posiciones de los colectivos que devuelve la API. 
 * Al hacer clic en el colectivo se debe poder visualizar la información (línea de colectivo, tiempo en que fue emitido el mensaje y hacia dónde se dirige).

Soportar los siguientes filtros:

 * Por la línea de colectivo.
 * Por cercanía a una ubicación.

El proyecto fue realizado con React.js para su interfaz de usuario y su backend con Node.js.

# Instalación

Para probar el proyecto primero deberán cambiar 3 claves que se encuentran dentro del codigo en:
 * \src\components\MyMap.jsx (YOUR_API_KEY en maptiler)
 * \server\src\utils\TransporteAPI.js (YOUR__CLIENT_ID en API de transporte en CABA)
 * \server\src\utils\TransporteAPI.js (YOUR_CLIENT_SECRET en API de transporte en CABA)

Luego deberán instalar todas las dependencias (/):

```
npm install
```

Otra opción seria ejecutar el comando:

```
npm i .
```
Luego lo mismo en el path (/server)

Para ejecutar el proyecto en /:

```
npm run dev
```
Y para ejecutar el servidor en /server hay que ejercutar el siguiente script:

```
npm run dev
```
## Autor

- 📌[@francobalich](https://www.github.com/francobalich)


