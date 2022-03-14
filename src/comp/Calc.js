import React from 'react';

const InitialValue = 100;

export default function App() {
  const [counter, setCounter] = React.useState(InitialValue);
  const [step, setStep] = React.useState(10);

  return (
    <div>
      <h2>Licznik: {counter}</h2>
      <input value={step} onChange={(event) => setStep(Number(event.target.value))} />
      <div>
        <button onClick={() => setCounter(counter + step)}>Increment</button>
        <button onClick={() => setCounter(InitialValue)}>Reset</button>
      </div>
    </div>
  );
}