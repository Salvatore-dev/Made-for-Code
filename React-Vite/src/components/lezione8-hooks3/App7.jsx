import { createContext, useContext, useState } from 'react';

const UserDataContext = createContext(null);

function App7() {
  const [light, setLight] = useState(true);
  const userdata = { username: 'lverdi' };

  return (
    <UserDataContext.Provider value={{ userdata, light, setLight }}>
      <main style={{ backgroundColor: light ? 'white' : 'darkblue' }}>
        <h1>App 7</h1>
        <InnerComp />
      </main>
    </UserDataContext.Provider>
  );
}

function InnerComp() {
  const userdataCtx = useContext(UserDataContext);

  return (
    <div>
      <InnerComp2 />
      {userdataCtx.userdata.username}
    </div>
  );
}

function InnerComp2() {
  const userdataCtx = useContext(UserDataContext);

  return (
    <div onClick={() => userdataCtx.setLight((prev) => !prev)}>change bg</div>
  );
}

export default App7;
