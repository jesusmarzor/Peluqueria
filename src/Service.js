import { Product } from './Product';


class Service{
	static #idCounter = 0;
	#id;
	#name;
	#consumption;
	#time;
	#price;
	
	constructor(name, consumption, time, price) {
		this.#id = this.#idCounter;
		this.#name = name;
		this.#consumption = consumption;		// Consumption is an array that constains a struct with a product and the quantity used
		this.#time = time;
		this.#price = price;

		this.#idCounter++;
	}
}


export { Service };
