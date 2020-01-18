const {
    app
} = require("./server")

const port = process.env.PORT || 8080;

async function run() {

    const server = app.listen(port, function () {
        console.log("Server Start");
    });
    server.setTimeout(1800000)
}

run();