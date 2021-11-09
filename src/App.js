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
            day.addAppointment(new Appointment(name, service,hour));
        }
    }
	cancelAppointment(name,day,hour,service){
        if(day.getDate() >= new Date() && day.hourReservated(hour)){
			day.getAppointments().map( (appointment,index) => {
				if(appointment.getCustomerName() == name && appointment.getService() == service && appointment.getHour() == hour){
					day.cancelAppointment(index);
				}
			});
        }
    }
	getAppointments(day){
		return day.getAppointments();
	}
	getAppointment(day, hour){
		return day.getAppointment(hour);
	}
}
module.exports = App;
