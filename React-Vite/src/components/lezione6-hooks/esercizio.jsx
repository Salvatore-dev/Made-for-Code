import React, { useEffect, useRef } from 'react'

function Es2310() {
/*     const refUsers = useRef([]) */

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((res) => {
          let post = res.slice(0, 20);
          getPost(post);
          /*         refUsers.current = post */
        });
    }, []);

    function getPost (el){
        return el
    }

    console.log(refUsers)

    const [userPosts, setUserPosts] = useReducer(function (state, action) {
        switch (action.type) {
          case "show20":
            return getPost;
          case "show10":
            return refUsers.slice(0,10).sort(a,b);
        }
      });

      return (
        <>
     {/*      realizzare un app, che al caricamento, prende i dati da
    https://jsonplaceholder.typicode.com/posts, ma non li mostra
    
    al click su un pulsante, mostra i primi 20 post. al click su un altro pulsante, inverte l'ordine dei post dall'ultimo al primo e mostra i primi 10 risultati.
    per compiere questa operazione utilzzare ref per referenziare i pulsanti e reducer per la gestione dello stato */}
       <div>
          {userPosts.map((el)=>
            (
                <>
              <h1>{el.title}</h1>
              <h2>{el.body}</h2>
              </>
            )
          )}
         <button id="show20" onClick={() => setUserPosts({ type: 'show20' })} >Show 20 Post</button>
         <button is="show10" onClick={() => setUserPosts({ type: 'show10' })}>Invert Order and Show 10 post</button>
       </div>
        </>
    
      )
    }
    
    export default Es2310