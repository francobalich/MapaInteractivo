import express from 'express';
import { TransporteAPI } from './utils/TransporteAPI.js';
import { transportRouter } from './routes/transport.route.js';
import { corsConfig } from '../middleware/corsConfig.js';
import cors from 'cors'

const PORT = 3000;
const app = express();

// Importa la función TransporteAPI desde tu archivo correspondiente
app.use(express.json())

// Configuración del cors
app.use(cors())
app.use(corsConfig)

app.get("/", transportRouter);

app.listen(PORT, () =>
  console.log(`\x1B[34mServer running in \x1B[31m${PORT} port.\x1B[0m`)
)
