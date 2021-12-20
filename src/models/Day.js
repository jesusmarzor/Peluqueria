class Day{
	constructor(date){
		this.date = date;
		this.appointments = [];
		this.work_hours = []

		let dayOfTheWeek = date.getDay();
		let new_hour;
		if(dayOfTheWeek !== 7){
			if(dayOfTheWeek !== 1){
				for(let i = 9; i <= 13; i++){
					new_hour = new Date(date.setHours(i,0,0));
					this.work_hours.push(new_hour);
					new_hour = new Date(date.setHours(i,30,0));
					this.work_hours.push(new_hour);
				}
			}
			for(let i = 19; i <= 21; i++){
				new_hour = new Date(date.setHours(i,0,0));
				this.work_hours.push(new_hour);
				new_hour = new Date(date.setHours(i,30,0));
				this.work_hours.push(new_hour);
			}
		}
	}
	hourReservated(hour){
		let appointmentSelect = null;
		this.work_hours.map( (work_hour) => {
			if(work_hour.getTime() === hour.getTime()){
				appointmentSelect = undefined;
				this.appointments.map( appointment => {
					if(appointment.getHour().getTime() === hour.getTime()){
						appointmentSelect = appointment;
					}
				})
			}
		})
		if(appointmentSelect === undefined){
			return false
		}
		return true;
    }
	getDateString(){
		let mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
        return this.date.getDate() + ' de ' + mes[this.date.getMonth()] + ' de ' + this.date.getFullYear()
    }
	getDate(){
		return this.date;
	}
	getAppointment(id){
		let appointmentSelect = undefined;
		this.appointments.map( appointment => {
			if(appointment.getId() === id){
				appointmentSelect = appointment;
			}
		})
		return appointmentSelect;
	}
	addAppointment(appointment){
		this.appointments.push(appointment);
		return appointment.getId();
	}
	cancelAppointment(index){
		this.appointments.splice(index,1);
	}
	getAppointments(){
		return this.appointments;
	}
}

module.exports = Day;
