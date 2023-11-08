import { memo, useCallback, useMemo, useState } from 'react';
import Hello from './app10/Hello';
import Box from './app10/Box';
import './app10/style.css';
import { useColors } from './app10/useColors';

function App10() {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  const value = useMemo(() => fn(j), [j]);

  function incrementI() {
    setI((i) => i + 1);
  }

  function incrementJ() {
    setJ((j) => j + 1);
  }

  const [sizes, setSizes] = useState({
    width: 200,
    height: 200,
  });

  const updateSizes = useCallback(() => {
    setSizes((s) => {
      return {
        width: s.width + 10,
        height: s.height + 10,
      };
    });
  }, [sizes]);

  const [color, updateColor] = useColors();

  const MemoizedCiao = memo(Ciao);

  return (
    <div>
      App10
      {i % 5 == 0 ? <Hello value={i} /> : <Hello />}
      <div>Value: {value}</div>
      <div>
        i: {i}
        <button onClick={incrementI}>incrementa i</button>
      </div>
      <div>
        j: {j}
        <button onClick={incrementJ}>incrementa j</button>
      </div>
      <div>
        <Box sizes={sizes} setSizes={updateSizes} />
      </div>
      <div>
        color: {color} <br />
        <button onClick={() => updateColor()}>update color</button>
      </div>
      <div>
        <MemoizedCiao />
      </div>
    </div>
  );
}

function fn(v) {
  console.log('here ', v);

  let str = '';
  for (let i = 1; i <= v; i++) {
    str += i + '';
  }

  return str;
}

function Ciao() {
  console.log('ciao ciao ciao');

  return (
    <div>
      <div>Ciao</div>
    </div>
  );
}

export default App10;
