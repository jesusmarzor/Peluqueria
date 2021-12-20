const {createLogger, format, transports} = require('winston');
const Configuration = require('./Configuration');

const config = new Configuration();
const log_dir = config.getLogDir();
const log_file = config.getLogFile();

const logger = createLogger({
    format: format.combine(
        format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        format.json()
    ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: (log_dir + log_file)
        })
    ]
});

module.exports = logger;
