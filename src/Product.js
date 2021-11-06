class Product {
	constructor(name, stock, price){
		this.name = name;
		this.stock = stock;
		this.price = price;
	}
	getName(){
		return this.name;
	}
	getStock(){
		return this.stock;
	}
	getPrice(){
		return this.price;
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
