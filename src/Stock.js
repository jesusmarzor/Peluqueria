class Stock {
	#product;
	#quantity;

	constructor(product, quantity){
		this.#product = product; 
		this.#quantity = quantity;
	}

	addQuantity(amount){
		this.#quantity += amount;
	}

	substractQuantity(amount){
		if (quantity <= 0) {
			this.#quantity = 0;
			throw 'Spent more than was available!';
		}

		this.#quantity -= amount;
	}
}


export { Stock };
