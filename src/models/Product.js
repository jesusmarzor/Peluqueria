class Product {
	static idCounter = 0;
	static moneySpent = 0;
	constructor(name, stock, price){
		this.id = Product.idCounter;
		this.name = name;
		this.stock = stock;
		Product.moneySpent += price;
		Product.idCounter++;
	}
	getId(){
		return this.id;
	}
	getName(){
		return this.name;
	}
	getStock(){
		return this.stock;
	}
	static getMoneySpent(){
		return Product.moneySpent;
	}
	addQuantity(amount, price){
		this.stock += amount;
		this.price += price;
	}

	substractQuantity(amount){
		if ((this.stock - amount) <= 0) {
			this.stock = 0;
			throw 'Spent more than was available!';
		}

		this.stock -= amount;
	}
}
module.exports = Product;
