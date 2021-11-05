import { Service } from './Service';


class Appointment{
	#service;
	#startTime;
	#customerName;

	constructor(service, startTime, customerName){
		this.#service = service;
		this.#startTime = startTime;
		this.#customerName = customerName;
	}
}


class Day{
	#date;
	#appointments = [];

	constructor(date){
		this.#date = date;
		let dayOfTheWeek = date.getDay();

		this.#appointments = []
		switch (dayOfTheWeek) {
			case 'Lunes':
				Horario = {'18:00':false,'18:30':false,'19:00':false,'19:30':false,'20:00':false,'20:30':false}
				break;
				
			case 'Martes':
			case 'Miercoles':
			case 'Jueves':
			case 'Viernes':
			case 'Sabado':
				Horario = {'08:00':false,'08:30':false,'09:00':false,'09:30':false,'10:00':false,'10:30':false,'11:00':false,'11:30':false,'12:00':false,'12:30':false,'18:00':false,'18:30':false,'19:00':false,'19:30':false,'20:00':false,'20:30':false}
				break;
			
			case 'Domingo':
				Horario = []
				break;
		}
	}

}


export { Day };
