require('dotenv').config({ debug: process.env.DEBUG }); // https://www.npmjs.com/package/dotenv
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: "logger"});
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
log.info("current log level: ", log.level());
// $ node index.js | .\node_modules\.bin\bunyan

app.listen(3000, 'localhost', function () {
    log.info(new Date() + ': Server has started! http://localhost:3000');
});
