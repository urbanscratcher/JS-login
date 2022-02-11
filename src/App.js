import React from 'react';
import Home from './routes/Home';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App;