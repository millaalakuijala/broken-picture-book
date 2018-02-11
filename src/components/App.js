import React from 'react';  
import Header from './Header';
import Lobby from './Lobby';
import Game from './Game';

export default class App extends React.Component {
  state = {
    view: 'game',
  }

  render() { 
    if (this.state.view === 'lobby')
      return (
        <div>
          <Header />
          <Lobby />
        </div>
      )
    else if (this.state.view === 'game')
      return (
        <div>
          <Game />
        </div>
      )
  }
}