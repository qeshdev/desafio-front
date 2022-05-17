import React from 'react';
import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import GlobalState from './context/GlobalState';
import Router from './routes/Router';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <GlobalState>
        <Router/>
      </GlobalState>
    </>
  );
}

export default App;
