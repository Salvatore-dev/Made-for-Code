import React from 'react';

import Box from './lezione2Boxes.jsx';
import List from './lezione2List.jsx';

function PassProps() {
  // logic
  const box1 = { h: 100, bg: 'blue' };
  const box2 = { w: 150, h: 80, bg: 'green' };
  const box3 = { w: 150, h: 50, bg: 'red' };
  const boxes = [box1, box2, box3];

  const boxesJsx = boxes.map((el, i) => <Box w={el.w} h={el.h} bg={el.bg} />);

  // jsx
  return (
    <main>
      <h1 className='text-center font-bold text-3xl p-1'>lezione giorno 3</h1>
      <p className='font-bold text-xl p-3 mr-3'>Passing props to components in react</p>

      <section className="sections">{boxesJsx}</section>

      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <List type="left" />
          </div>
          <div className="col-span-6">
            <List type="right" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default PassProps;