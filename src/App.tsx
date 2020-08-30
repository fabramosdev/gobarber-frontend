import React from 'react';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

// import provisorio
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Fabiano Santos Ramos', age: 42 }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
