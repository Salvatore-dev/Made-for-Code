import { useState } from 'react';

let globalObjId = 1;
function makeObj(voice, completed = false) {
  return {
    id: globalObjId++,
    voice,
    completed,
  };
}

function List2() {
  const [objs, setObjs] = useState([
    makeObj('fai la spesa'),
    makeObj('prendi anna da scuola', true),
    makeObj('gioca alla play'),
  ]);

  function toggleCompleted(objId) {
    const newObjs = objs.map((obj, i) => {
      if (obj.id === objId) {
        return { ...obj, completed: !obj.completed };
      }

      return obj;
    });

    setObjs(newObjs);
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        {objs.map((obj) => (
          <div key={obj.id} onClick={() => toggleCompleted(obj.id)}>
            <div>ID: {obj.id}</div>
            <div>Voice: {obj.voice}</div>
            <div className={`${obj.completed ? 'line-through' : ''}`}>
              Completed: {obj.completed ? 'complete' : 'not complete'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List2;