// https://www.npmjs.com/package/dotenv
const dotenv = require('dotenv');
const bunyan = require('bunyan');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const log = bunyan.createLogger({
    name: "logger"
});

function init() {
    dotenv.config({
        debug: process.env.DEBUG
    });

    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    log.info("current log level: ", log.level());
    // $ node index.js | .\node_modules\.bin\bunyan

}

init();

app.get('/rest/mc/backup', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'minecraft backup complete'
    })
});

app.get('/rest/mc/restore', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'minecraft restored to last backup'
    })
});

app.listen(3000, 'localhost', function () {
    log.info(process.env.GREETING);
    log.info(new Date() + ': Server has started! http://localhost:3000');
});