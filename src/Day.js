class Franja{
	#begin;
	#end;

	constructor(begin, end){
		this.#begin = begin;
		this.#end = end;
	}
}


class Turno{
	#service;
	#startTime;

	constructor(service, startTime){
		this.#service = service;
		this.#startTime = startTime;
	}
}


class Day{
	#date;
	#turnos;

	constructor(date){
		this.#date = date;
		dayOfTheWeek = date.getDay();

		this.#turnos = []
		switch (dayOfTheWeek) {
			case 'Lunes':
				Horario = [Franja(18, 21)]
				break;
				
			case 'Martes':
			case 'Miercoles':
			case 'Jueves':
			case 'Viernes':
			case 'Sabado':
				Horario = [Franja(8,13), Franja(18, 21)]
				break;
			
			case 'Domingo':
				Horario = []
				break;
		}
	}

}
