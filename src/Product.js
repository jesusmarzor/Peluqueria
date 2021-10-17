class Product {
	static #idCounter = 0;
	#id;
	#name;
	#stock;

	constructor(name, stock){
		this.#id = this.#idCounter;
		this.#name = name;
		this.#stock= stock;

		this.#idCounter++;
	}

	addQuantity(amount){
		this.#stock += amount;
	}

	substractQuantity(amount){
		if (this.#stock <= 0) {
			this.#stock = 0;
			throw 'Spent more than was available!';
		}

		this.#stock -= amount;
	}
}


export { Product };
