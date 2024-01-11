import { useContext, useEffect, useState } from "react"
import './Window.css'
import imgBus from "../assets/bus.png"
import { TransportContext } from "../context/TransportContext"
import { convertirFecha } from "../utils/ConvertirFechaAHora"

export const Window = ({ onClosing }) => {
  const {selectedBus,time } = useContext(TransportContext)
  const closeWindow = () => {
    onClosing(false)
  }
  return (
    <section className='windowContainer'>
      <div className="window">
        <div>
          <h3>Línea: {selectedBus.route_short_name}</h3>
          <p>Último mensaje: {convertirFecha(time)}</p>
          <p>Destino: {selectedBus.trip_headsign}</p>
        </div>
        <div className="lastColumn">
          <img className="imgBus" src={imgBus} alt="colectivo" />
          <button className="btnStyle" onClick={closeWindow}>Salir</button>
        </div>
      </div>
    </section>

  )
}
