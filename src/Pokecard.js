import React from 'react';
import './Pokecard.css';

const Pokecard = ({ id, name, type, base_experience }) => {
  return (
    <div className='pokecard'>
      <div className='pokecard-header'>
        <h4>{name}</h4>
      </div>
      <div className='pokeman'>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt='pokemon'
        />
      </div>
      <div className='poke-stats'>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    </div>
  );
};

export default Pokecard;
