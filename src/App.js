class App{
	#calendar;
	#storeroom;

	constructor(){
		this.#calendar = Calendar();
		this.#storeroom = [];
	}

	giveAppointment(service, date){}
	cancelAppointment(service, date, name){}

	addProduct(product, initialQuantity){}
	removeProduct(productID){}

	addStock(productID, amount){}
}
