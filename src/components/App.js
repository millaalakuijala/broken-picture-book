import React from 'react';  
import Header from './Header';
import Lobby from './Lobby';
import Game from './Game';

export default class App extends React.Component {
  state = {
    view: 'lobby',
  }

  // TODO: View changes will be implemented with a Router, not state

  changeView = (newView) => {
    this.setState({ view: newView })
  }

  render() { 
    if (this.state.view === 'lobby')
      return (
        <div>
          <Header
            view={this.state.view}
          />
          <Lobby
            changeView={(newView) => this.changeView(newView)}
          />
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