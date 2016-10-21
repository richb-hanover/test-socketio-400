const express = require('express');

const port = process.env.API_PORT;
const app = express();
const server = require('http').Server(app);       // this is the http listener

var io = require('socket.io')(server);                                    // this is the socket.io listener
io.on('connection', (socket) => {                                         // when we get a connection from a client
  const count = Object.keys(io.sockets.connected).length;
  console.log('Client connected. Socket id %s, (%s)', socket.id, count);  // log when they connect

  socket.on('disconnect', function () {                                   // log when they go away
    const count = Object.keys(io.sockets.connected).length;
    console.log('Client disconnected. Socket id %s (%s)', socket.id, count);
    // if (count == 0) {
    //   kali.kaliDisconnect();                                              // flush kali connections
    // }
  });
});

// Send a message to all connected clients every 10 seconds
// NB It is OK to io.emit() if no clients are connected,
//  The test for connected clients simply minimizes excess log messages
setInterval( () => {
  const count = Object.keys(io.sockets.connected).length;   // get number of clients
  if (count > 0) {                                          // if anyone's connected...
    const msg = `Time is now: ${new Date()}`;               // get the date & time
    // console.log(`Sending to (${count}) clients: ${msg}`);   // log it
    io.emit('time', { text: `${msg}`});                     // and send to all clients
  }
}, 10000);

// Start the HTTP server
server.listen(port);
console.log('Server is listening on port ' + port);