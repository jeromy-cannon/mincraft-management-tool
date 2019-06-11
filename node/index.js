// https://www.npmjs.com/package/dotenv
const dotenv = require('dotenv');
const bunyan = require('bunyan');


dotenv.config({
    debug: process.env.DEBUG
});

const log = bunyan.createLogger({
    name: "logger"
});
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
log.info("current log level: ", log.level());
// $ node index.js | .\node_modules\.bin\bunyan

app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});

app.listen(3000, 'localhost', function () {
    log.info(process.env.TEST);
    log.info(new Date() + ': Server has started! http://localhost:3000');
});