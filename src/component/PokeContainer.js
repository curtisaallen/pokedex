import React from 'react';
import Pokecard from './Pokecard';
import helper from '../helper';

class PokeContainer extends React.Component {  
      render() {
        const {pokemons} = this.props;
        let pokemonsplayerone = pokemons[0].map((item, i) => {
              return <Pokecard item={item} key={i} />;
        });  
        let pokemonsplayertwo = pokemons[1].map((item, i) => {
             return <Pokecard item={item} key={i} />;
        });
        let playeronecount = helper.sum(pokemons[0])
        let playertwocount = helper.sum(pokemons[1])
        return (
            <div className="container">
                <div className="header">
                {playeronecount > playertwocount ? ( 
                    <h1 className="win">Winning Hand</h1>
                ) : (
                    <h1 className="lose">Losing Hand</h1>   
                )}
                <p>Total experience: {playeronecount}</p>
                </div>
                {pokemonsplayerone}
                <div className="header">
                {playeronecount < playertwocount ? ( 
                    <h1 className="win">Winning Hand</h1>
                ) : (
                    <h1 className="lose">Losing Hand</h1>  
                )}
                <p>Total experience: {playertwocount}</p>
                </div>
                {pokemonsplayertwo}
            </div>
        )
      }
}

export default PokeContainer;
