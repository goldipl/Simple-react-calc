import React, { useState } from 'react';
import './calc.css';

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

  const clear = () => {
    setResult(InitialValue);
    setValue1(InitialValue);
    setValue2(InitialValue);
  };

  return (
    <div className='calcWrapper'>
      <h2>Calculator - ver. 1.0</h2>
      <div className='inputContainer'>
      <input placeholder='Type 1st number' value={value1} onChange={(e) => setValue1(Number(e.target.value))} />
      <input placeholder='Type 2nd number' value={value2} onChange={(e) => setValue2(Number(e.target.value))} />
      <button onClick={clear}>Clear</button>
      </div>
      <div className='btnContainer'>
        <button onClick={add}>+</button>
        <button onClick={multiply}>•</button>
        <button onClick={divide}>÷</button>
        <button onClick={substract}>-</button>
      </div>
      <div className='inputContainer'>
      <input placeholder='Result' readOnly value={result}  />
      </div>
    </div>
  );
}