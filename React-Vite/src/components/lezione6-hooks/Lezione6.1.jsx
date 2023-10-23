import { useEffect, useReducer, useRef, useState } from 'react';

export default function Hooks() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [users, setUsers] = useState([]);

  const refCounter = useRef(10); // { current: 10 }
  const refDiv = useRef(null);

  // onMount
  useEffect(() => {
    console.log('component mounted');
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     setUsers(res);
    //   });
    refDiv.current.style.backgroundColor = 'green';
    refDiv.current.addEventListener('click', () => {
      console.log('refDiv clicked');
    });

    async function getData() {
    const resObj = { json: false, res: false };
    resObj.json = await fetch('https://jsonplaceholder.typicode.com/users');
    resObj.res = await resObj.json.json();
    setUsers(resObj.res);
    }

    getData()
  }, []);

  // onMount + onUpdate
  useEffect(() => {
    console.log('component updated');
  });

  // onUpdateCounter
  useEffect(() => {
    console.log('component updated counter');
  }, [counter]);

  // reducer
  const [userData, setUserData] = useReducer(
    function (state, action) {
      switch (action.type) {
        case 'mrossi':
          return {
            username: 'mariorossi',
            password: 'mrossi',
          };

        case 'lverdi':
          return {
            username: 'luigiverdi',
            password: 'lverdi',
          };

        case 'prev':
          return {
            username: 'ciao ' + state.username,
            password: 'ciao ' + state.password,
          };

        case 'invert':
          return {
            username: state.password,
            password: state.username,
          };
      }
    },
    {
      username: 'unknown',
      password: 'unknown',
    }
  );

  return (
    <main>
      <h1>App 4</h1>
      <div>
        <div onClick={() => setCounter((prev) => prev + 1)}>
          Counter: {counter} - Aumenta counter
        </div>
        <div onClick={() => setCounter2((prev) => prev + 1)}>
          Counter2: {counter2} - Aumenta counter 2
        </div>
      </div>

      <div className="my-10 p-4 bg-blue-100">
        <h1>UserData</h1>
        Username: {userData.username} <br />
        Password: {userData.password}
        <button
          className="p-2 bg-green-200 rounded-md m-2"
          onClick={() => setUserData({ type: 'mrossi' })}
        >
          Update user data with Mario Rossi
        </button>
        <button
          className="p-2 bg-green-200 rounded-md m-2"
          onClick={() => setUserData({ type: 'lverdi' })}
        >
          Update user data with Luigi Verdi
        </button>
        <button
          className="p-2 bg-green-200 rounded-md m-2"
          onClick={() => setUserData({ type: 'prev' })}
        >
          Update user data with previous values
        </button>
        <button
          className="p-2 bg-green-200 rounded-md m-2"
          onClick={() => setUserData({ type: 'invert' })}
        >
          Update user data with inversion
        </button>
      </div>

      <div>
        Ref counter: {refCounter.current}
        <button
          onClick={() => {
            console.log('ref counter updated');
            return (refCounter.current += 10);
          }}
        >
          aumenta ref counter
        </button>
      </div>

      <div>
        <div ref={refDiv}>Ref DOM</div>
      </div>

      {users.length > 0 && (
        <div>
          <h1>Users</h1>
          <div className="flex flex-col gap-4">
            {users.map((user) => (
              <div key={user.id} className="p-4 bg-gray-300">
                {user.username} ({user.email})
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}