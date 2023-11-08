import { createContext, useContext, useReducer, useState } from 'react';

const startValue = { val: 'blue' };
const AppCtx = createContext(startValue);

function App9_2() {
  const ctx = useContext(AppCtx);
  const [value, setValue] = useState(ctx.val);

  return (
    <AppCtx.Provider value={{ ...startValue, setValue }}>
      <div>
        <div>{value}</div>
        <Comp1 />
        <Comp2 />
      </div>
    </AppCtx.Provider>
  );
}

function Comp1() {
  const ctx = useContext(AppCtx);
  const [v, setV] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'green':
          return {
            val: 'green',
          };

        case 'red':
          return {
            val: 'red',
          };
      }
    },
    { val: 'blue' }
  );

  function change() {
    setV({ type: 'green' });
    console.log(v.val);
    ctx.setValue(v.val);
  }

  return (
    <div>
      {v.val}
      c1 <button onClick={change}>-set green-</button>
    </div>
  );
}

function Comp2() {
  const ctx = useContext(AppCtx);

  return <div>c2 {ctx.val ?? 'no value'}</div>;
}

export default App9_2;