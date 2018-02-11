import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Header extends Component {
  
  // Header button portrays a different text depending on the current view.
  // TODO: header button has different functionality depending on current view.
  setText = () => {
    if (this.props.view === 'lobby') {
      return 'Join game'
    }
    else if (this.props.complete) {
      return 'Play again?'
    }
    else return 'Start over'
  }

  render() {
  	return (
	  <header className="header">
	    <span>Broken picture book</span>
	    <Button className="button" onClick={() => this.props.newGame()}>{this.setText()}</Button>
	  </header>
    )
  }
}

export default Header
