class Product {
	static #idCounter = 0;
	#id;
	#name;
	#stock;
	static #price;

	constructor(name, stock, price){
		this.#id = this.#idCounter;
		this.#name = name;
		this.#stock = stock;
		this.#price += price;

		this.#idCounter++;
	}

	addQuantity(amount, price){
		this.#stock += amount;
		this.#price += price;
	}

	substractQuantity(amount){
		if ((this.#stock - amount) <= 0) {
			this.#stock = 0;
			throw 'Spent more than was available!';
		}

		this.#stock -= amount;
	}
}


export { Product };
