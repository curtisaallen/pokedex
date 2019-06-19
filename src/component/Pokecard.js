import React from 'react';

const Pokecard = (props) => {
  return (
    <div className="Card">
      <h2>{props.item.name}</h2>
       <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.item.id }.png`} alt={props.item.name} />
       <p>
           <b>Type:</b> {props.item.type}
           <br />
           <b>EXP:</b> {props.item.base_experience}
       </p>

    </div>
  )
};

export default Pokecard;
