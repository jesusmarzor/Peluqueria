class Appointment{
	constructor(customerName, service){
		this.customerName = customerName;
		this.service = service;
	}
	getCustomerName(){
		return this.customerName;
	}
	getService(){
		return this.service;
	}
}

module.exports = Appointment;