var express = require("express");
const { emit } = require("process");
var app = express();
var server = require("http").Server(app);
var io = require("Socket.io")(server);

app.use(express.static("client"));

app.get("/hello", function (req, res) {
  res.status(200).send("helloWorld");
});

var messages = [
  {
    id: 1,
    text: "Welcome to this chat",
    nickname: "Bot - Alejandro",
  },
];

io.on("connection", function (socket) {
  console.log(
    `the client with IP: ${socket.handshake.address} is connected...`
  );
  socket.emit("messages", messages);

  socket.emit("messages", messages);
  socket.on("add-message", function (data) {
    messages.push(data);
  });
  io.sockets.emit("messages", messages);
});

server.listen(6677, function () {
  console.log("server is running on : http://localhost:6677");
});

//https://alta-soft.eu/difarmed-fr-test/
