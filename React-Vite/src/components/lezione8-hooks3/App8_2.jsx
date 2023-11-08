import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({ x: 50, y: 14 });
const AppContext = createContext(null);

function App8_2() {
  const [counter, setCounter] = useState(100);

  return (
    <>
      <GlobalContext.Provider value={{ x: 10, y: 4 }}>
        <AppContext.Provider value={{ counter, setCounter }}>
          <div>
            <h1>App 8_2</h1>
            <div>counter: {counter}</div>

            <A />
          </div>
        </AppContext.Provider>
      </GlobalContext.Provider>
      {/* <D /> */}
    </>
  );
}

function A() {
  return (
    <div>
      A
      <B />
    </div>
  );
}

function B() {
  return (
    <div>
      B
      <C />
    </div>
  );
}

function C() {
  return <div>C{/* <D /> */}</div>;
}

function D() {
  const ctx = useContext(AppContext);
  const { counter, setCounter } = ctx;

  const { x, y } = useContext(GlobalContext);

  return (
    <div>
      D {counter}{' '}
      <button onClick={() => setCounter((prev) => prev + 1)}>
        increase counter
      </button>
      <div>
        x: {x} y: {y}
      </div>
    </div>
  );
}

export default App8_2;