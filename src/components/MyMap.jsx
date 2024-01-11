import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useContext, useEffect, useState } from 'react';
import { ClientTransporteAPI } from '../utils/ClientTransporteAPI';
import { CalculateDistance } from '../utils/CalculateDistance';
import { Window } from './Window';
import pngPin from '../assets/pin-small.png'
import { TransportContext } from '../context/TransportContext';
import { DataContext } from '../context/DataContext';
const API_KEY = `YOUR_API_KEY`

export const MyMap = () => {
  const { setSelectedBus, listOfTransports, setListOfTransports, setTime, lineFilter } = useContext(TransportContext)
  const {
    distance: distanceLimit,
    coords: BsAs,
    setLines,
    update, setUpdate
  } = useContext(DataContext)
  const [markers, setMarkers] = useState(<></>)
  const [window, setWindow] = useState(<></>)
  const [isVisible, setVisible] = useState(false)

  const getDataBus = (event) => {
    setVisible(value => value = !value)
    const busId = event.originalEvent.target.nextElementSibling.innerText
    const busData = listOfTransports.find((element) => element.id === busId)
    setSelectedBus(busData)
  }

  const createMarker = (lon, lat, id) => {
    return <Marker onClick={getDataBus} longitude={lon} latitude={lat} id={id} key={id}>
      <img src={pngPin} alt="pin" style={{ "width": "30px" }} />
      <span style={{ "display": "none" }}>{id}</span>
    </Marker>
  }

  const createMarkers = (transports = []) => {
    const markerList = []
    transports.forEach(element => {
      markerList.push(createMarker(element.longitude, element.latitude, element.id))
    });
    return markerList
  }
  const filterTransport = (transportList = []) => {
    const filterTransportsList = []
    transportList.forEach((element) => {
      const distance = CalculateDistance(BsAs[0], BsAs[1], element.longitude, element.latitude)
      if (distance < distanceLimit) {
        filterTransportsList.push(element)
      }
    })
    return filterTransportsList
  }
  const loadTransport = () => {
    ClientTransporteAPI().then((transportList) => {
      const filterTransports = filterTransport(transportList)
      setListOfTransports(filterTransports)
    })
  }
  useEffect(() => {
    loadTransport()
   // setInterval(loadTransport, 90000)
  }, [distanceLimit,BsAs])

  useEffect(() => {
    if (lineFilter === undefined) {
      setMarkers(createMarkers(listOfTransports))
    }
    else {
      const newList = listOfTransports.filter((element) => lineFilter === element.route_short_name)
      setMarkers(createMarkers(newList))
    }
    setTime(new Date())
  }, [listOfTransports,lineFilter])

  useEffect(() => {
    if (isVisible === true) {
      setWindow(<Window onClosing={setVisible} />)
    }
    else {
      setWindow(<></>)
    }
  }, [isVisible])

  return (
    <>
      <Map
        initialViewState={{
          longitude: BsAs[0],
          latitude: BsAs[1],
          zoom: 14
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`}
      >
        {window}
        {markers}

      </Map>
    </>

  )
}
