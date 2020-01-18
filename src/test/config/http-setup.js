const axios = require('axios')
const {
    app
} = require('../../server')

module.exports = async function httpSetup() {
    const listener = app.listen()
    const port = listener.address().port
    const baseURL = `http://localhost:${port}/v1/api`
    axios.defaults.baseURL = baseURL
    //PUT AUTHENTICATION HERE
    return listener
}