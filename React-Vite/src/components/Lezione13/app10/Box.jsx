import { memo } from 'react';

function Box({ sizes, setSizes }) {
  console.log('box ' + (sizes.width + ' ' + sizes.height));

  return (
    <div>
      <h1>Box</h1>

      <div>
        <div
          style={{
            width: sizes.width + 'px',
            height: sizes.height + 'px',
            backgroundColor: 'green',
          }}
        ></div>
      </div>

      <button onClick={() => setSizes()}>update sizes</button>
    </div>
  );
}

export default memo(Box);