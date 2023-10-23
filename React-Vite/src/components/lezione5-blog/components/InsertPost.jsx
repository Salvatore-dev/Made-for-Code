import { useState } from 'react';

const startInputData = {
  title: '',
  text: '',
  authorId: 1,
};

export default ({ authors, postsData }) => {
  const [inputData, setInputData] = useState(startInputData);
  const [posts, setPosts] = postsData;
  const [message, setMessage] = useState('');

  let _postsId = posts[posts.length - 1].id;

  const updateInputData = (e) => {
    const el = e.target;
    const v = el.value;
    const label = el.dataset.label; // dataset richiama l'attributo del tag, la seconda parola e' libera si noti che sotto e' legatas con "-" qui con "."

    switch (label) { // in questo switch presente in questa funzione che passiamo a imput diversi controlliamo la provenienza, con label, e in base alla provenienza diamo delle istruzioni
      case 'title':
      case 'text':
      case 'authorId':
        setInputData((prev) => {
          return {
            ...prev,
            [label]: label != 'authorId' ? v : parseInt(v),
          };
        });
        break;
    }
  };

  const addPost = () => { // questa funzione e' legata al bottone send, setta i posts partendo da quello precedente, e inserisce nell'aray un nuovo oggetto che ha come chiave un id incrementale e il contenuto dell'imput
    setPosts((prev) => {
      return [...prev, { id: ++_postsId, ...inputData }];
    });
    setMessage('Post added!'); //avvenuto invio

    setTimeout(() => { // un timer di un secondo al termine del quale esegue il riassetto di imput in default e setta il messaggio stringa vuota. il mmessaggio comporare sullo schermo per un secondo
      setInputData(startInputData);
      setMessage('');
    }, 1000);
  };

  return (
    <>
      <h2>Insert Post</h2>

      <div>
        <label>
          <div>Title</div>
          <input
            data-label="title" // questa espressione, usando la parola data che e' un atrtributo del tag puo essere richiamata in fase di controllo fell'origine
            type="text"
            className="p-3 bg-gray-400 w-full max-w-full"
            value={inputData.title}
            onChange={updateInputData}
          />
        </label>
      </div>

      <div>
        <label>
          <div>Text</div>
          <textarea
            data-label="text"
            className="p-3 bg-gray-400 w-full max-w-full"
            value={inputData.text}
            onChange={updateInputData}
          ></textarea>
        </label>
      </div>

      <div>
        <label>
          <div>Author</div>
          <select
            data-label="authorId"
            className="p-3 bg-gray-400"
            onChange={updateInputData}
            value={inputData.authorId}
          >
            {authors.map((author, i) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-10">
        <button onClick={addPost} className="p-4 bg-green-300 rounded-md">
          Send
        </button>
        {message != '' && <div className="bg-green-400 p-4">{message}</div>}
      </div>

      <div className="p-4 mt-10 bg-gray-300">
        <h2>Live data:</h2>
        <div>
          Title: <br /> {inputData.title}
        </div>
        <div>
          Text: <br /> {inputData.text}
        </div>
        <div>
          Author: <br /> {inputData.authorId}
        </div>
      </div>
    </>
  );
};
