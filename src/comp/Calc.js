import React, { useState } from 'react';

const InitialValue = '';

export default function App() {
  const [value1, setValue1] = useState(InitialValue);
  const [value2, setValue2] = useState(InitialValue);
  const [result, setResult] = useState(InitialValue);

  const add = () => {
    setResult(value1 + value2);
  };

  const multiply = () => {
    setResult(value1 * value2);
  };

  const divide = () => {
    if (value2 !== 0) {
      setResult(value1 / value2);
    } else {
        alert('Nie można dzielić przez zero!');
    }
  };

  const substract = () => {
    setResult(value1 - value2);
  };

  return (
    <div>
      <h2>Calculator - ver. 0.1</h2>
      <div className='inputContainer'>
      <input placeholder='Type 1st number' value={value1} onChange={(e) => setValue1(Number(e.target.value))} />
      <input placeholder='Type 2nd number' value={value2} onChange={(e) => setValue2(Number(e.target.value))} />
      </div>
      <div className='btnContainer'>
        <button onClick={add}>Add</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={substract}>Substract</button>
      </div>
      <div className='inputContainer'>
      <input placeholder='result' readOnly value={result}  />
      </div>
    </div>
  );
}