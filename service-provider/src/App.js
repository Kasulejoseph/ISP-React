import React from 'react';
import { Provider } from 'react-redux';

import LandingContainer from './container/LandingContainer';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LandingContainer />
      </div>
    </Provider>
  );
}

export default App;
