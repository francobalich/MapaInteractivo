import Form from 'react-bootstrap/Form';

export const InputNumber = ({ placeholder, id,saveCoords,value }) => {
  const changeHandle=(event)=>{
    saveCoords(parseFloat(event.target.value),id)
  }
  return (
    <div>
      <Form.Label>{placeholder}</Form.Label>
      <Form.Control
        type='number'
        id={id}
        aria-describedby={placeholder}
        placeholder={placeholder}
        onChange={changeHandle}
        value={value}
        step={.001}
      />
    </div>
  )
}
