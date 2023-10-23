import { useState } from 'react';

function Lezione4() {
  const [counter, setCounter] = useState(0);

  return (
    <section>
      <h1>App 2</h1>

      <div>
        <button
          onClick={() => {
            setCounter((v) => ++v);
          }}
        >
          Increase counter
        </button>
      </div>

      <div>
        <Box
          c={counter}
          changeCounter={setCounter}
          start={10}
          style={{ backgroundColor: 'green' }}
        >
          <div className="bg-blue-400">Box 1</div>
          <Div content="ciao ciao">
            <h1 className="text-2xl">Div children</h1>
          </Div>
        </Box>

        <Box
          c={counter}
          changeCounter={setCounter}
          start={4}
          style={{ backgroundColor: 'beige' }}
        >
          <div className="bg-pink-400">Box 2</div>
        </Box>
      </div>
    </section>
  );
}

function Box({ c, changeCounter, start, style, children }) {
  const [localCounter, setLocalCounter] = useState(start);

  return (
    <section style={style}>
      {children}

      <button
        onClick={() => {
          changeCounter((v) => ++v);
          setLocalCounter((v) => v + c);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          changeCounter((v) => --v);
          setLocalCounter((v) => v - c);
        }}
      >
        -
      </button>
      <div>Counter: {c}</div>
      <div>Local Counter: {localCounter}</div>
    </section>
  );
}

function Div({ content, children }) {
  return (
    <div>
      {content}: {children}
    </div>
  );
}

export default Lezione4;