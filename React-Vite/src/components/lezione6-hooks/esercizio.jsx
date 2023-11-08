import React, { useEffect, useRef, useReducer } from "react";

function Es2310() {
  const data = useRef();
  const button1 = useRef();
  const button2 = useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        data.current = res;
      });
  }, []);

  console.log([data, button1, button2]);

  const [userPosts, setUserPosts] = useReducer(reducer, null);
  
  function reducer(state, action) {
    switch (action.type) {
      case "show-20":
        console.log("id di riferimento", action.type);
        return data.current.slice(0, 20);
      case "show-10":
        console.log("id di riferimento", action.type);
        return data.current.slice(0, 10).reverse();
    }
  }

  return (
    <>
      <h1>Es2310</h1>
      <p>
        realizzare un app, che al caricamento, prende i dati da
        <a
          className="bg-red-200 text-lg"
          href="https://jsonplaceholder.typicode.com/posts"
          target="blank"
        >
          {" "}
          "Placeholder"
        </a>
        , ma non li mostra al click su un pulsante, mostra i primi 20 post. al
        click su un altro pulsante, inverte l'ordine dei post dall'ultimo al
        primo e mostra i primi 10 risultati. per compiere questa operazione
        utilzzare ref per referenziare i pulsanti e reducer per la gestione
        dello stato{" "}
      </p>

      <div className=" grid grid-cols-12 my-3 gap-2">
        <button
          ref={button1}
          id="show-20"
          className="col-span-6 bg-yellow-400 text-center text-lg p-2"
          onClick={() => setUserPosts({ type: button1.current.id })}
        >
          Show 20 Post
        </button>
        <button
          ref={button2}
          id="show-10"
          className="col-span-6 bg-yellow-400 text-center text-lg p-2"
          onClick={() => setUserPosts({ type: button2.current.id })}
        >
          Show 10 post
        </button>
      </div>
      {userPosts &&
        userPosts.map((el) => (
          <div className="flex flex-col gap-2 bg-slate-300 p-1 m-2" key={el.id}>
            <h1 className="text-xl">{el.title}</h1>
            <p className="text-l">{el.body}</p>
          </div>
        ))}
    </>
  );
}

export default Es2310;
