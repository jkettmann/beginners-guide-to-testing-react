import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <main>
        <Switch>
          <Route path="/how-it-works">
            <h1>How it works</h1>
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
