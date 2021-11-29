class Appointment{
	static idCounter = 0;
	static moneyCollected = 0;
	constructor(customerName, service, hour){
		this.id = Appointment.idCounter;
		this.customerName = customerName;
		this.service = service;
		this.hour = hour;
		Appointment.moneyCollected = Appointment.moneyCollected + this.service.getPrice();
		Appointment.idCounter++;
	}
	getId(){
		return this.id;
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
	static getMoneyCollected(){
		return Appointment.moneyCollected;
	}
	static setMoneyCollected(price){
		Appointment.moneyCollected -= price;
	}
}

module.exports = Appointment;