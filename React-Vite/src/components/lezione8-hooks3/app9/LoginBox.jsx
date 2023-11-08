import { createContext, useContext } from 'react';

import App9Context from './App9Context.jsx';

function LoginBox() {
  const { userData } = useContext(App9Context);

  return (
    <section>
      <div>
        Un: {userData.username} | Pw: {userData.password}
      </div>
    </section>
  );
}

export default LoginBox;
