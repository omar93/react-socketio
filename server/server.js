const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = 4000
const io = require('socket.io')(http,{
  cors: {
    origin: '*',
  }
})


io.on('connection', socket => {

  socket.emit('connection',null)

  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chat message', msg => {
    console.log('msg inc')
    socket.broadcast.emit('chat message', msg)
  })

})

http.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`)
})