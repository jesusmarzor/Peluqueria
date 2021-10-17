import { Calendar } from './Calendar'
import { Product } from './Product'


class App{
	#calendar;
	#calendarsize = 60;
	#storeroom;

	constructor(){
		this.#calendar = Calendar(calendarsize);
		this.#storeroom = [];
	}

	giveAppointment(service, date){}
	cancelAppointment(service, date, name){}

	addProduct(product, initialQuantity){}
	removeProduct(productID){}

	addStock(productID, amount){}
}
