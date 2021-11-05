const Calendar = require('./Calendar');
const Product = require('./Product');
const Service = require('../../Peluqueria/src/Service');
const Appointment = require('../../Peluqueria/src/Appointment')

class App{

	constructor(){
		this.calendar = new Calendar(60);
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

const app = new App();
let calendar = app.getCalendar();
let products = app.getProducts();
app.addProducts('acondicionador',5,50);
products.map((p)=>{
	console.log(p);
})
let services = app.getServices();
app.createServices('corte',[[products[0],15]],8);
services.map((s)=>{
	console.log(s);
})
app.giveAppointment('Jesus',calendar.getTimetable()[2],'18:00',services[0]);
app.giveAppointment('Pablo',calendar.getTimetable()[2],'19:30',services[0]);
app.cancelAppointment('Pablo',calendar.getTimetable()[2],'19:30',services[0]);
console.log(app.getHours(calendar.getTimetable()[2]));

