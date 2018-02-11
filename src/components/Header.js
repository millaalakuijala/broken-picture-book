import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Header extends Component {
  
  setText = () => {
    const text = (this.props.complete) ? "Play again?" : "New game"
    return text
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
