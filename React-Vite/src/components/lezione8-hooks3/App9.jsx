import { useReducer } from 'react';
import LoginBox from './app9/LoginBox';
import App9Context from './app9/App9Context.jsx';

function App9() {
  const [userData, setUserData] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'username':
          return {
            username: action.e.target.value,
            password: state.password,
          };
        case 'password':
          return {
            username: state.username,
            password: action.e.target.value,
          };
      }
    },
    { username: '', password: '' }
  );

  return (
    <App9Context.Provider value={{ userData }}>
      <div>
        <h1>Login</h1>
        <div>
          Username:{' '}
          <input
            type="text"
            className="border border-gray-400 p-2"
            value={userData.username}
            onChange={(e) => setUserData({ type: 'username', e })}
          />
        </div>

        <div>
          Password:{' '}
          <input
            type="password"
            className="border border-gray-400 p-2"
            value={userData.password}
            onChange={(e) => setUserData({ type: 'password', e })}
          />
        </div>

        <LoginBox />
      </div>
    </App9Context.Provider>
  );
}

export default App9;
