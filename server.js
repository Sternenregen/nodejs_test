var express = require("express");
var app = express();
var server = app.listen(process.env.PORT || 3000);
app.use(express.static("public"));

console.log("My socket server is ready");

var socket = require("socket.io");
var io = socket(server);

io.sockets.on("connection", newConnection);

function newConnection(socket) {
    console.log("new connection:" + socket.id);

    socket.on("mouse", mouseMsg);
    function mouseMsg(data) {
        //send messages to all other clients besides the one where it's coming from
        socket.broadcast.emit('mouse', data);
        //send messages to all clients
        //io.sockets.emit("mouse", data);

        //console.log(data); //test
    }
}

