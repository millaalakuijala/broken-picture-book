const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4001

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', socket => {
	console.log('User connected')
  socket.on('join game', (gameIndex, playerName) => {
  	console.log('Joining game', gameIndex, ', player ', playerName)
   	io.sockets.emit('join game', gameIndex, playerName)
  })
	socket.on('disconnect', () => {
		console.log('User disconnected')
	})
})

server.listen(port, () => console.log(`Listening on port ${port}`))