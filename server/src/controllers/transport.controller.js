import { response } from 'express'
import { TransporteAPI } from '../utils/TransporteAPI.js';

export const getData = async (req, res = response) => {
  try {
    // Obtén los datos de TransporteAPI
    const transporteData = await TransporteAPI();
    // Envía los datos como JSON
    return res.status(200).send(transporteData)
  } catch (err) {
    console.log(err)
    res.status(401).send('Some error happened')
  }
}
