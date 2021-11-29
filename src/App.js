const Calendar = require('./Calendar');
const Product = require('./Product');
const Service = require('./Service');
const Appointment = require('./Appointment')

class App{
	constructor(){
		this.calendar = new Calendar(new Date(new Date().getUTCFullYear(),(new Date().getMonth()+1),0).getDate());
		this.products = [];
		this.services = [];
	}
	getCalendar(){
		return this.calendar;
	}
	addProducts(name,stock,price){
		let product = new Product(name,stock,price)
		this.products.push(product);
		return product.getId();
	}
	createServices(name,consuption,price){
		let service = new Service(name,consuption,price);
		this.services.push(service);
		return service.getId();
	}
	getProducts(){
		return this.products;
	}
	getServices(){
		return this.services;
	}
	giveAppointment(name, day, hour, service){
        if(day.getDate() >= new Date() && !day.hourReservated(hour)){
            return day.addAppointment(new Appointment(name, service,hour));
        }
    }
	cancelAppointment(day, id){
        if(day.getDate() >= new Date()){
			day.getAppointments().map( (appointment,index) => {
				if(appointment.getId() == id){
					day.cancelAppointment(index);
					Appointment.setMoneyCollected(appointment.getService().getPrice());
				}
			});
        }
    }
	getAppointments(day){
		return day.getAppointments();
	}
	getAppointment(day, id){
		return day.getAppointment(id);
	}
}
module.exports = App;
