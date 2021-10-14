class Service{
	#id;
	#name;
	#consumption;
	#time;
	#price;
	
	// Consumption is an array that constains a struct with a product and the quantity used
	constructor(id, name, consumption, time, price) {
		this.#id = id;
		this.#name = name;
		this.#consumption = consumption;
		this.#time = time;
		this.#price = price;
	}
}
