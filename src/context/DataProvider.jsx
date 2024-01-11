import { useState } from "react"
import { DataContext } from "./DataContext"

export const DataProvider = ({ children }) => {
  const [distance, setDistance] = useState(1000)
  const [coords, setCoords] = useState([-58.38135771, -34.60419970])
  const [lines, setLines] = useState([])
  const [update, setUpdate] = useState(false)
  return (
    <DataContext.Provider value={{
      distance, setDistance,
      coords, setCoords,
      lines, setLines,
      update, setUpdate
    }}>
      {children}
    </DataContext.Provider>
  )
}
