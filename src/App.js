import { Calendar } from './Calendar'
import { Product } from './Product'


class App{
	#calendar;
	#calendarsize = 60;
	#storeroom;

	constructor(){
		this.#calendar = new Calendar(this.#calendarsize);
		this.#storeroom = [];
	}

	giveAppointment(service, date){}
	cancelAppointment(service, date, customerName){}

	addProduct(name, initialQuantity){}
	removeProduct(productID){}

	addStock(productID, amount){}
}
