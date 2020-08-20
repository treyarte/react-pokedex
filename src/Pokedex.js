import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemens }) => {
  return (
    <div className='pokedex'>
      <h1 className='pokedex-title'>Pokedex</h1>
      <div className='pokemens-container'>
        {pokemens.map((pokeman) => {
          return (
            <Pokecard
              key={pokeman.id}
              id={pokeman.id}
              name={pokeman.name}
              type={pokeman.type}
              base_experience={pokeman.base_experience}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
