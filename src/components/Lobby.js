import React, { Component } from "react"
import socketIOClient from "socket.io-client"
import { ListGroupItem, ListGroup } from 'react-bootstrap'

class Lobby extends Component {
	constructor() {
    super();
    this.state = {
    	endpoint: "http://127.0.0.1:4001",
      games: [{id: 0, name: "peli1", players: [], maxPlayers: 8},
              {id: 1, name: "peli2", players: [], maxPlayers: 6}]
    }
  }

  // joinGame emits a message to all clients that player with playerName has joined game with gameIndex.
  joinGame = (gameIndex, playerName) => {
  	const socket = socketIOClient(this.state.endpoint)
    socket.emit('join game', gameIndex, playerName)
  }

render() {

  // When a join game event is received, the player is added to the game's player list.
	const socket = socketIOClient(this.state.endpoint)
    socket.on('join game', (gameIndex, playerName) => {
    	const copyOfGames = this.state.games.slice()
    	if (copyOfGames[gameIndex].players.length < copyOfGames[gameIndex].maxPlayers) {
    		copyOfGames[gameIndex].players.push(playerName)
    		this.setState({ games: copyOfGames })
        this.props.changeView('game')
    		console.log('Joining succeeded')
    	}
    	else console.log('Game is full')
    })

  // The games are mapped to a list.
  // TODO: clicking on a game doesn't instantly join it, but chooses it as active.
  const listOfGames = this.state.games.map((game, index) => {
  return (
    <ListGroupItem
      key={index}
      header={game.name}
      tag="a"
      href="#"
      onClick={() => this.joinGame(index, "Milla")}>
        Players {game.players.length}/{game.maxPlayers}
    </ListGroupItem>
  )
})
return (
  <div className="centered-list">
    <ListGroup>
      {listOfGames}
    </ListGroup>
  </div>
 )}
}

export default Lobby;