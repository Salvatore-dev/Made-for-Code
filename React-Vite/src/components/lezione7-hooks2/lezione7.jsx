import { useEffect, useReducer, useRef } from 'react';

import './assets/app6.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeListItems(header) {
  header.innerHTML = '';
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'myUl');

  for (let i = 1; i <= getRandomInt(5, 15); i++) {
    const li = document.createElement('li');
    li.innerHTML = `li ${i}`;
    ul.appendChild(li);
  }
  header.appendChild(ul);
}

function App6() {
  const headerRef = useRef(null);

  useEffect(() => {
    const message = 'Hello world';
    const header = headerRef.current;
    header.innerHTML = 'ciao';
    header.classList.add('box');

    makeListItems(header);
    header.addEventListener('click', makeListItems.bind(null, header));
  }, []);

  const [sizes, setSizes] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'square':
          return {
            width: 200 * state.multiply,
            height: 200 * state.multiply,
            multiply: state.multiply,
          };

        case 'reactangle':
          return {
            width: 300 * state.multiply,
            height: 100 * state.multiply,
            multiply: state.multiply,
          };

        case 'increase_multiply':
          return {
            width: state.width,
            height: state.height,
            multiply: state.multiply * 2,
          };
      }
    },
    {
      width: 100,
      height: 300,
      multiply: 1,
    }
  );

  const [formData, setFormData] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'v1':
          return {
            v1: action.e.target.value,
            v2: state.v2,
          };

        case 'v2':
          return {
            v1: state.v1,
            v2: action.e.target.value,
          };
      }
    },
    { v1: '', v2: '' }
  );

  return (
    <main>
      <h1>App 6</h1>

      <header ref={headerRef}></header>

      <div
        style={{ width: sizes.width + 'px', height: sizes.height + 'px' }}
        className="bg-blue-400"
      ></div>
      <button onClick={setSizes.bind(null, { type: 'square' })}>Square</button>
      <button onClick={setSizes.bind(null, { type: 'reactangle' })}>
        Reactangle
      </button>
      <button onClick={setSizes.bind(null, { type: 'increase_multiply' })}>
        Increase Multiply
      </button>

      <div>
        <div>
          <input
            type="text"
            className="p-4 bg-gray-200 m-4"
            onChange={(e) => setFormData({ type: 'v1', e })}
          />
          <input
            type="text"
            className="p-4 bg-gray-200 m-4"
            onChange={(e) => setFormData({ type: 'v2', e })}
          />
        </div>
        <div>
          V1: {formData.v1} V2: {formData.v2}
        </div>
      </div>
    </main>
  );
}

export default App6;