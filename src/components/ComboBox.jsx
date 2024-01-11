import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { TransportContext } from '../context/TransportContext';

export const ComboBox = ({ label, title, options = [] }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const { setLineFilter } = useContext(TransportContext)
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    setLineFilter(options[selectedValue - 1])
  };
  const loadLines = () => {
    const optionsToAdd = []
    for (let index = 1; index < options.length + 1; index++) {
      const element = options[index - 1];
      optionsToAdd.push(<option key={index} value={index}>{element}</option>)
    }
    return optionsToAdd
  }
  return (
    <div>
      <Form.Label>{label}</Form.Label>
      <Form.Select aria-label="Default select example" onChange={handleOptionChange} value={selectedOption}>
        <option>{title}</option>
        {loadLines()}
      </Form.Select>
    </div>
  )
}
