import { Service } from './Service';


class Stripe{
	#begin;
	#end;

	constructor(begin, end){
		this.#begin = begin;
		this.#end = end;
	}
}


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
	#appointments;

	constructor(date){
		this.#date = date;
		dayOfTheWeek = date.getDay();

		this.#appointments = []
		switch (dayOfTheWeek) {
			case 'Lunes':
				Horario = [Stripe(18, 21)]
				break;
				
			case 'Martes':
			case 'Miercoles':
			case 'Jueves':
			case 'Viernes':
			case 'Sabado':
				Horario = [Stripe(8,13), Stripe(18, 21)]
				break;
			
			case 'Domingo':
				Horario = []
				break;
		}
	}

}


export { Day };
