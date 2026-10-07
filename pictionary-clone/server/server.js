const { Server } = require("socket.io");

const io = new Server(3000, {
  cors: {
    origin: "http://localhost:11663",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
});
