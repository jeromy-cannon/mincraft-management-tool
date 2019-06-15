// https://www.npmjs.com/package/dotenv
const dotenv = require('dotenv');
const bunyan = require('bunyan');
const express = require('express');
const cors = require('cors');
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
    app.use(cors);

    log.info("current log level: ", log.level());
    // $ node index.js | .\node_modules\.bin\bunyan

}

init();

const backupUrl = '/rest/mc/backup';
app.get(backupUrl, (req, res) => {
    log.info('backing up...');
    res.status(200).send({
        success: 'true',
        message: 'minecraft backup complete'
    });
    log.info('...backed up');
});

const restoreUrl = '/rest/mc/restore';
app.get(restoreUrl, (req, res) => {
    log.info('restoring...');
    res.status(200).send({
        success: 'true',
        message: 'minecraft restored to last backup'
    });
    log.info('...restored');
});

const baseUrl = 'http://localhost' + ':' + process.env.PORT;
app.listen(3000, 'localhost', function () {
    log.info(process.env.GREETING);
    log.info(new Date() + ': Server has started! ' + baseUrl);
    log.info('backup URL: ' + baseUrl + backupUrl);
    log.info('restore URL: ' + baseUrl + restoreUrl);
});