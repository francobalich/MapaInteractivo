export const CalculateDistance = (lon1, lat1, lon2, lat2) => {
  let rad = function (x) {
    return x * Math.PI / 180;
  }
  let R = 6378.137;
  let dLat = rad(lat2 - lat1);
  let dLong = rad(lon2 - lon1);
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) *
    Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  let d = R * c * 1000;
  return d;
}