const Calendar = require('./models/Calendar');
const Product = require('./models/Product');
const Service = require('./models/Service');
const Appointment = require('./models/Appointment')
const logger = require('./utils/logger');

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
		if(product){
			logger.info('Se ha creado el producto ' + product.getId());
		}else{
			logger.info('No se ha podido crear el producto ' + name);
		}
		return product.getId();
	}
	createServices(name,consuption,price){
		let service = new Service(name,consuption,price);
		this.services.push(service);
		if(service){
			logger.info('Se ha creado el servicio ' + service.getId());
		}else{
			logger.info('No se ha podido crear el servicio ' + name);
		}
		return service.getId();
	}
	getProducts(){
		return this.products;
	}
	getServices(){
		return this.services;
	}
	giveAppointment(name, day, hour, service){
        if(day.getDate() >= new Date()){
			if(!day.hourReservated(hour)){
				return day.addAppointment(new Appointment(name, service,hour));
			}else{
				logger.error('No se ha podido coger la cita porque la hora está ocupada');
			}
        }else{
			logger.error('No se ha podido coger la cita porque la fecha es incorrecta');
		}
    }
	cancelAppointment(day, id){
        if(day.getDate() >= new Date()){
			day.getAppointments().map( (appointment,index) => {
				if(appointment.getId() == id){
					day.cancelAppointment(index);
					Appointment.setMoneyCollected(appointment.getService().getPrice());
					logger.info('La cita ' + index + ' se ha cancelado correctamente');
				}else{
					logger.error('No se ha podido cancelar la cita porque no existe');
				}
			});
        }else{
			logger.error('No se ha podido cancelar la cita porque la fecha es incorrecta');
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