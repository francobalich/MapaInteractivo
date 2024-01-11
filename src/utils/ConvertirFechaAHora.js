export const convertirFecha = (timestamp) => {
  const date = new Date(timestamp)
  const horas = date.getHours();
  const minutos = date.getMinutes();
  const segundos = date.getSeconds();

  const horaFormateada = `${horas}:${minutos}:${segundos}`;

  return horaFormateada;
}