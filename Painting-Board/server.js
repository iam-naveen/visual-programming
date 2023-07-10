const express = require('express');
const { Server } = require('socket.io')
const app = express();

app.use(express.static('public'))

app.get('/', response => {
    response.sendFile(__dirname + '/index.html');
});

const server = app.listen(3000, console.log("Server is running in port 3000..."));

const io = new Server(server);

io.on('connection', (stream) => {
    console.log(stream.id + " Connected");

    stream.on('disconnect', () => console.log(stream.id + " Disconnected"))

    stream.on('painted', (data) => {
        stream.broadcast.emit('painted', data);
    })
});