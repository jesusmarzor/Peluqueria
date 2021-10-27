class Producto{
    constructor(nombre, stock, precio){
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }
    getNombre(){
        return this.nombre
    }
    getPrecio(){
        return this.precio
    }
    getStock(){
        return this.stock
    }
}
const p1 = new Producto('laca',10,100);
console.log(`${p1.getStock()} unidades de ${p1.getNombre()} han costado ${p1.getPrecio()} euros`);
