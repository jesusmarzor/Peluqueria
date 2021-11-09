class Appointment{
	constructor(customerName, service, hour){
		this.customerName = customerName;
		this.service = service;
		this.hour = hour;
	}
	getCustomerName(){
		return this.customerName;
	}
	getService(){
		return this.service;
	}
	getHour(){
		return this.hour;
	}
}

module.exports = Appointment;