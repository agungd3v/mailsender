const app = require("express")()
const bodyParser = require("body-parser")
const cors = require("cors")
const requestFile = require("express-fileupload")
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
app.use(requestFile())

// const http = require('http').createServer(app)
// const socket = require("socket.io")(http, {
//   cors: {
//     origin: "*",
//     methods: ['GET', 'POST']
//   }
// })

// app.socket = socket

const router = require("./routes")

app.use(router)
app.listen(process.env.APP_PORT)
// http.listen(process.env.APP_PORT)