const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use("/v1", require('./routes'))

module.exports = {
    app
}