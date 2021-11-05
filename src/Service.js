class Service{
	constructor(name, consumption, price) {
		this.name = name;
		this.consumption = consumption;		// Consumption is an array that constains a struct with a product and the quantity used
		this.price = price;
	}
	getName(){
		return this.name;
	}
}
module.exports = Service;
