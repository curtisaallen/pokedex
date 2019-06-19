import React from 'react';
import './App.css';
import PokeContainer from './component/PokeContainer';
import helper from './helper';
import pokemons from './data/pokemons';
import Logo from './component/Logo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        pokemons: helper.chunk(helper.shuffle(pokemons), 4)
    };
  }
  render() {
  return (
    <div className="App">
      <Logo  />
      <PokeContainer pokemons={this.state.pokemons} />
    </div>
  )
  }
}

export default App;
