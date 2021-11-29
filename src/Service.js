class Service{
	static idCounter = 0;
	constructor(name, consumption, price) {
		this.id = Service.idCounter;
		this.name = name;
		this.consumption = consumption;		// Consumption is an array that constains a struct with a product and the quantity used
		this.price = price;
		Service.idCounter++;
	}
	getId(){
		return this.id;
	}
	getName(){
		return this.name;
	}
	getConsumption(){
		return this.consumption;
	}
	getPrice(){
		return this.price;
	}
}
module.exports = Service;
