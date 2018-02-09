let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;
var users = [];
let roomno = 1;

io.on('connection', (socket) => {

  console.log('user connected');

  socket.on('nuevousuario', (user) => {
    console.log('usuario introducido');
    users.push(user);
    socket.username = user;
    console.log(users)
    io.emit('usuarios', users);

    socket.on('new-message', (message) => {
      io.emit('mensajechat', message);
    });


    socket.on('nuevapartida', function () {
      if (io.nsps['/'].adapter.rooms["sala-" + roomno] && io.nsps['/'].adapter.rooms["sala-" + roomno].length > 2) roomno++;
      socket.join("sala-" + roomno);

      io.to("sala-" + roomno).emit('conectarSala', "Estás en la sala:  " + roomno);
    });
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
    console.log(socket.username);
    users = users.filter(user => user !== socket.username);
    io.emit('usuarios', users);
  });

});


server.listen(port, () => {
  console.log(`started on port: ${port}`);
});


