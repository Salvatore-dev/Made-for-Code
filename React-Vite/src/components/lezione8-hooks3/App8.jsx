import { useState } from 'react';

function App8() {
  const [counter, setCounter] = useState(100);

  return (
    <div>
      <h1>App 8</h1>
      <A counter={counter} />
    </div>
  );
}

function A({ counter }) {
  return (
    <div>
      A
      <B counter={counter} />
    </div>
  );
}

function B({ counter }) {
  return (
    <div>
      B
      <C counter={counter} />
    </div>
  );
}

function C({ counter }) {
  return (
    <div>
      C
      <D counter={counter} />
    </div>
  );
}

function D({ counter }) {
  return <div>D {counter}</div>;
}

export default App8;
