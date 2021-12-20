const App = require('../src/App');
const Product = require('../src/models/Product');
const Appointment = require('../src/models/Appointment')

beforeAll(() => {
    app = new App();
    calendar = app.getCalendar();
    services = app.getServices();
    day = calendar.getTimetable()[25];
    hour = new Date(day.date.setHours(19,0,0));
    products = app.getProducts();
})

afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 1000));
});

describe('Clase Producto', () => {
    const id_acondicionador = () => app.addProducts('acondicionador',5,50);
    test('Añadir Productos', ()=>{
        let id_product = () => products[0].getId();
        expect(id_acondicionador()).toBe(id_product());
    })
    test('Dinero gastado en productos', () => {
        let money = Product.getMoneySpent();
        expect(money).toBe(50);
        let id_champu = () => app.addProducts('champu',5,20);
        id_champu();
        money = Product.getMoneySpent();
        expect(money).toBe(70);
    })
})
describe('Clase Servicio', () => {
    const id_corte = () => app.createServices('corte',[[products[0],15]],8);
    test('Añadir Servicios', () => {
        let id_service = () => services[0].getId();
        expect(id_corte()).toBe(id_service());
    })
})
describe('Clase Appointment', () => {
    const id = () => app.giveAppointment('Jesus',day,hour,services[0]);
    const dont_work_hour = () => new Date(day.date.setHours(23,0,0));
    const new_hour = () => new Date(day.date.setHours(20,0,0));
    const id_close = () => app.giveAppointment('Juan',day,dont_work_hour(),services[0]);
    const id_busy = () => app.giveAppointment('Juan',day,hour,services[0]);
    var money = Appointment.getMoneyCollected();
    test('Pedir cita', () => {
        let appointmentGiven = () => app.getAppointment(day,0);
        expect(id()).toBe(appointmentGiven().getId());
    })
    test('Pedir cita a una hora que está cerrado', () => {
        expect(id_close()).toBe(undefined);
    })
    test('Pedir cita a una hora que está ocupada', () => {
        expect(id_busy()).toBe(undefined);
    })
    test('Dinero ganado con las citas', () => {
        money = Appointment.getMoneyCollected();
        expect(money).toBe(8)
        const appointmentGiven = () => app.giveAppointment('Pepe',day,new_hour(),services[0]);
        appointmentGiven()
        money = Appointment.getMoneyCollected();
        expect(money).toBe(16)
    })
    test('Anular cita', () => {
        const cancelAppointment = () => {
            app.cancelAppointment(day,0)
            return app.getAppointment(day,0)
        };
        expect(cancelAppointment()).toBe(undefined);
    })
    test('Dinero ganado al anular una cita', () => {
        money = Appointment.getMoneyCollected();
        expect(money).toBe(8)
    })
})
