const { Etcd3 } = require('etcd3');
require('dotenv').config({ path: './configuration.env'});
const client = new Etcd3();

class Configuration {
	constructor(){
	    this.logDir = null;
	    this.logFile = null;
	    (async () => this.logDir = await client.get('LOG_DIR').string().catch( err => console.log('Log_Dir', err.message)))();
	    if(this.logDir === null){
	      this.logDir = (process.env.LOG_DIR || '/tmp/logs/peluqueria/');
	    }
	    (async () => this.logFile = await client.get('LOG_FILE').string().catch( err => console.log('Log_File', err.message)))();
	    if(this.logFile === null){
	      this.logFile = (process.env.LOG_FILE || 'file.log');
	    }
	}

  getLogDir(){
		return this.logDir;
	}

  getLogFile(){
		return this.logFile;
	}

}
module.exports = Configuration;
