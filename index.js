const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const requestFile = require("express-fileupload")
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
app.use(requestFile())

const router = require("./routes")

app.use(router)
app.listen(process.env.APP_PORT)