const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4001

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

// The server listens to different inputs that come from the app and reacts accordingly.
// It emits the messages forward to all clients.

io.on('connection', socket => {
	console.log('User connected')
  socket.on('join game', (gameIndex, playerName) => {
  	console.log('Joining game', gameIndex, ', player ', playerName)
   	io.sockets.emit('join game', gameIndex, playerName)
  })
  socket.on('end game', () => {
  	console.log('Ending game')
   	io.sockets.emit('end game')
  })
  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))