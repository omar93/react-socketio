const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = 3000
const io = require('socket.io')(http)

app.use(express.static(__dirname + './public'))
io.on('connection', socket => {

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