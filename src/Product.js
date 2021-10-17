class Product {
	#id;
	#name;
	#stock;

	constructor(product, quantity){
		this.#id = id;
		this.#name = name;
		this.#stock= stock;
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
