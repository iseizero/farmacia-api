const { app } = require('./server');
const { url } = require('./config/config');

async function run(){

    app.listen(4020, function(){
        console.log('Server Start');
    });
}

run();