const Day = require('./Day');
class Calendar {
	constructor(calendarSize){
		this.calendarSize = calendarSize;
		this.timetable = [];
		let currentDate = (new Date());
		for (let counter = 0; counter < calendarSize; counter++) {
			currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
			this.timetable.push(new Day(currentDate));
		}
	}
	getTimetable(){
		return this.timetable;
	}
	organizeNextBuy(){}
}
module.exports = Calendar;