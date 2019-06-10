require('dotenv').config()
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: "logger"});
log.info("current log level: ", log.level());
// $ node index.js | .\node_modules\.bin\bunyan

