module.exports = server => {
  const socket = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ['GET', 'POST']
    }
  })

  socket.on("connection", socket => {
    console.log("Socket ready")
  })
}