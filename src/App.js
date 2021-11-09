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

	cancelAppointment(name,day,hour,service){
        if(day.hourReservated(hour)){
            if(day['hours'][hour] == name + ' tiene un ' + service.getName()){
                day['hours'][hour] = false;
                console.log(name + " ha anulado su cita");
            }
        }else{
            console.log('\n\nLo siento ' + name + ', el ' + day.getDateString() + ' a las ' + hour + ' no tienes cita')
        }
    }
	giveAppointment(name, day, hour, service){
        if(!day.hourReservated(hour)){
            new Appointment(service, day, hour, name);
            console.log(name + " ha reservado cita");
            day['hours'][hour] = name + ' tiene un ' + service.getName()
        }else{
            console.log('\n\nLo siento ' + name + ', el ' + day.getDateString() + ' a las ' + hour + ' ya esta ocupado')
        }
    }
	getHours(day){
		return day.getHours();
	}
}

