import { useState } from 'react';

function List({ type }) {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  let bg = 'bg-blue-400';
  switch (type) {
    case 'left':
      bg = 'bg-pink-400';
      break;
  }

  const changeText = (e) => {
    setText(e.target.value);
  };

  const updateList = () => {
    if (text == '') return;
    setList((prev) => [...prev, text]);
    setText('');
  };

  return (
    <section className="mt-14">
      <input
        className="p-4
        bg-gray-300
        border-gray-500"
        type="text"
        value={text}
        onChange={changeText}
      />
      <button onClick={updateList}>Add</button>

      <div className="grid grid-col-12">
        <div className="col-span-6 flex flex-col gap-4">
          {list.map((el) => (
            <div className={bg}>{el}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default List;
