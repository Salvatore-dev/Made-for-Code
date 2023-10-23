import { useEffect, useReducer, useRef, useState } from 'react';

// reducer
function obj1Reducer(state, action) {
  if (action.type === 'increment_coords') {
    return {
      x: state.x + 1,
      y: state.y + 1,
    };
  }
  throw Error('Unknown action.');
}

export default function Hooks2() {
  // ref
  const counterGlobal = useRef(0);
  const elBox = useRef(null);
  // state
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [todos, setTodos] = useState([]);

  // effect
  useEffect(() => {
    console.log('every render');
  });

  useEffect(() => {
    console.log('first render');
    if (elBox.current) elBox.current.style.backgroundColor = 'blue';
  }, []);

  useEffect(() => {
    console.log('counter2 render');
  }, [counter2]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  // reducer
  const [obj1State, obj1Dispatch] = useReducer(obj1Reducer, { x: 10, y: 4 });

  return (
    <>
      <div onClick={() => counterGlobal.current++}>
        counterGlobal: {counterGlobal.current}
      </div>
      <div onClick={() => setCounter((prev) => prev + 1)}>
        counter: {counter}
      </div>
      <div onClick={() => setCounter2((prev) => prev + 1)}>
        counter2: {counter2}
      </div>

      <div ref={elBox}>box</div>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>

      <div>
        <div onClick={() => obj1Dispatch({ type: 'increment_coords' })}>
          Increment coords
        </div>
        Obj1 x: {obj1State.x}
        Obj1 y: {obj1State.y}
        Obj1 area: {obj1State.x * obj1State.y}
      </div>
    </>
  );
}