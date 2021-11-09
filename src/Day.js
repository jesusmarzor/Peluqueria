class Day{
	constructor(date){
		this.date = date;
		this.appointments = [];
		this.work_hours = []

		let dayOfTheWeek = date.getDay();

		switch (dayOfTheWeek) {
			case 1:
				this.work_hours = ['18:00','18:30','19:00','19:30','20:00','20:30']
				break;
				
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				this.work_hours = ['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','18:00','18:30','19:00','19:30','20:00','20:30'];
				break;
		}
	}
	hourReservated(hour){
        if(this.work_hours.includes(hour)){
			if(this.getAppointment(hour) === undefined){
				return false
			}
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
	getAppointment(hour){
		let appointmentSelect = undefined;
		this.appointments.map( appointment => {
			if(appointment.getHour() === hour){
				appointmentSelect = appointment;
			}
		})
		return appointmentSelect;
	}
	addAppointment(appointment){
		this.appointments.push(appointment);
	}
	cancelAppointment(index){
		this.appointments.splice(index,1);
	}
	getAppointments(){
		return this.appointments;
	}
}

module.exports = Day;
