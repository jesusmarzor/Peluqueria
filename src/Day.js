class Day{
	constructor(date){
		this.date = date;
		this.appointments = {};

		let dayOfTheWeek = date.getDay();

		switch (dayOfTheWeek) {
			case 1:
				this.appointments = {'18:00':false,'18:30':false,'19:00':false,'19:30':false,'20:00':false,'20:30':false}
				break;
				
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				this.appointments = {'08:00':false,'08:30':false,'09:00':false,'09:30':false,'10:00':false,'10:30':false,'11:00':false,'11:30':false,'12:00':false,'12:30':false,'18:00':false,'18:30':false,'19:00':false,'19:30':false,'20:00':false,'20:30':false}
				break;
		}
	}
	hourReservated(hour){
        if(!this.appointments[hour] && this.appointments[hour] != undefined){
            return false
        }
        return true
    }
	getDateString(){
		let mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
        return this.date.getDate() + ' de ' + mes[this.date.getMonth()] + ' de ' + this.date.getFullYear()
    }
	getDate(){
		return this.date;
	}
	getAppointments(){
		return this.appointments;
	}
}
module.exports = Day;
