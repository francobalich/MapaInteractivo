import Form from 'react-bootstrap/Form';

export const Scroll = ({label,distance, setDistance}) => {
  const scrollHandle=(event)=>{
    setDistance(parseInt(event.target.value))
  }
  return (
      <div>
        <Form.Label>{label}</Form.Label>
        <Form.Range onChange={scrollHandle} max={5000} />
        <Form.Label>{distance} m</Form.Label>
      </div>
  )
}
