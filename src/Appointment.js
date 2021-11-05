class Appointment{
	constructor(service, day, hour, customerName){
		this.service = service;
		this.hour = hour;
		this.day = day;
		this.customerName = customerName;
	}
}

module.exports = Appointment;