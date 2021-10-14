class Calendar {
	#timetable;
	#calendarSize;

	constructor(calendarSize){
		this.#calendarSize = calendarSize;

		let currentDate = (new Date());
		for (let counter = 0; counter < calendarSize; counter++) {
			currentDate.setDate(currentDate.getDate() + 1);
			this.#timetable.push(currentDate);
		}
	}

	giveAppointment(service, date){}
	cancelAppointment(service, date){}

	organizeNextBuy(){}
}
