import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemens from './pokemens';

function App() {
  return (
    <>
      <Pokedex pokemens={pokemens} />
    </>
  );
}

export default App;
