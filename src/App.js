const Calendar = require('./Calendar');
const Product = require('./Product');
const Service = require('../../Peluqueria/src/Service');
const Appointment = require('../../Peluqueria/src/Appointment')

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
		this.products.push(new Product(name,stock,price));
	}
	createServices(name,consuption,price){
		this.services.push(new Service(name,consuption,price));
	}
	getProducts(){
		return this.products;
	}
	getServices(){
		return this.services;
	}
	giveAppointment(name, day, hour, service){
        if(day.getDate() >= new Date() && !day.hourReservated(hour)){
            day['appointments'][hour] = new Appointment(name, service);
        }
    }
	cancelAppointment(name,day,hour,service){
        if(day.getDate() >= new Date() && day.hourReservated(hour)){
            if(day['appointments'][hour].getCustomerName() == name && day['appointments'][hour].getService() == service){
                day['appointments'][hour] = false;
            }
        }
    }
	getAppointments(day){
		return day.getAppointments();
	}
}
module.exports = App;
