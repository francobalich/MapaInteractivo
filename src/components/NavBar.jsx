import React, { useContext, useEffect } from 'react';
import './NavBar.css';
import { ComboBox } from './ComboBox';
import { InputNumber } from './Input';
import { Scroll } from './Scroll';
import { DataContext } from '../context/DataContext';
import { TransportContext } from '../context/TransportContext';
import Form from 'react-bootstrap/Form';

export default function NavBar() {
  const {
    distance, setDistance,
    coords, setCoords,
    lines, setLines,
    update, setUpdate
  } = useContext(DataContext)
  const { listOfTransports } = useContext(TransportContext)

  const getLines=()=>{
    let linesOfTransport=new Set();
    listOfTransports.forEach(element => {
      linesOfTransport.add(element.route_short_name);
    });
    const uniqueLinesList = Array.from(linesOfTransport);
    return uniqueLinesList;
  }

  const saveCoords = (coord, type) => {
    if (type === "longitud") {
      setCoords(value => value = [coord, value[1]])
    }
    else {
      setCoords(value => value = [value[0], coord])
    }
  }
  useEffect(() => {
    setLines(getLines())
  }, [listOfTransports])
  
  return (
    <div className="heading">
      <div className='dataMenu'>
        <h1>Mapa interactivo (CABA)</h1>
        <div className='coordContainer'>
          <InputNumber value={coords[0]} placeholder="Longitud" id='longitud' saveCoords={saveCoords} />
          <InputNumber value={coords[1]} placeholder="Latitud" id='latitud' saveCoords={saveCoords} />
        </div>
        <Scroll label='Distancia' distance={distance} setDistance={setDistance} />
        <ComboBox label='Linea' title='Seleccione una linea' options={lines} />
      </div>
    </div>
  );
}