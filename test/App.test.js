const App = require('../src/App');
const app = new App();
const products = app.getProducts();
const services = app.getServices();
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
})
