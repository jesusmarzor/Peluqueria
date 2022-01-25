const Day = require('./Day');
class Calendar {
	constructor(calendarSize){
		this.calendarSize = calendarSize;
		this.timetable = [];
		let date = (new Date());
		date.setDate(date.getDate() - date.getDay());
		for (let counter = 0; counter < calendarSize; counter++) {
			this.timetable.push(new Day(new Date(date.setDate(date.getDate()+1))));
		}
	}
	getTimetable(){
		return this.timetable;
	}
	organizeNextBuy(){}
}
module.exports = Calendar;