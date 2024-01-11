import { useState } from "react"
import { TransportContext } from "./TransportContext"

export const TransportProvider = ({ children }) => {
  const [selectedBus, setSelectedBus] = useState({})
  const [listOfTransports, setListOfTransports] = useState([])
  const [time, setTime] = useState()
  const [lineFilter, setLineFilter] = useState()
  return (
    <TransportContext.Provider value={{
      selectedBus, setSelectedBus,
      listOfTransports,
      setListOfTransports,
      time, setTime,
      lineFilter, setLineFilter
    }}>
      {children}
    </TransportContext.Provider>
  )
}
