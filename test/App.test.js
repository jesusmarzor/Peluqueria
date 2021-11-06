const App = require('../src/App');
const app = new App();
const calendar = app.getCalendar();
const products = app.getProducts();
const services = app.getServices();
const day = calendar.getTimetable()[25];
const hour = '18:00';
describe('M1 - Sistema de Citas', () => {
    test('Añadir Productos', ()=>{
        app.addProducts('acondicionador',5,50);
        expect(products[0].getName()).toBe('acondicionador');
        expect(products[0].getStock()).toBe(5);
        expect(products[0].getPrice()).toBe(50);
        expect(products.length).toBe(1);
    })
    test('Añadir Servicios', () => {
        app.createServices('corte',[[products[0],15]],8);
        expect(services[0].getName()).toBe('corte');
        expect(services[0].getConsumption()).toEqual([[products[0],15]]);
        expect(services[0].getPrice()).toBe(8);
        expect(services.length).toBe(1);
    })
    test('Pedir cita', () => {
        app.giveAppointment('Jesus',day,hour,services[0]);
        let appointments = app.getAppointments(day);
        let appointmentGiven = appointments[hour];
        expect(appointmentGiven.getCustomerName()).toBe('Jesus');
        expect(appointmentGiven.getService()).toEqual(services[0]);
    })
    test('Pedir cita a una hora que está cerrado', () => {
        app.giveAppointment('Juan',day,'22:00',services[0]);
        let appointments = app.getAppointments(day);
        let appointmentGiven = appointments['22:00'];
        expect(appointmentGiven).toBe(undefined);
    })
    test('Pedir cita a una hora que está ocupada', () => {
        app.giveAppointment('Juan',day,hour,services[0]);
        let appointments = app.getAppointments(day);
        let appointmentGiven = appointments[hour];
        expect(appointmentGiven.getCustomerName()).toBe('Jesus');
        expect(appointmentGiven.getService()).toEqual(services[0]);
    })
})