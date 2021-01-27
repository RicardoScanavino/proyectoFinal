var listaProductos = [];

function Producto(nombreProducto, precio, cantidad) {
    this.nombreProducto = nombreProducto;
    this.precio = precio;
    this.cantidad = cantidad;

    this.agreagrProducto = function () {
        listaProductos.push(producto);
    }
}

var nombre = prompt("ingrese el nombre del producto");
var precio = parseInt(prompt("ingrese el precio del producto"));
var cantidad = parseInt(prompt("ingrese la cantidad"));

var producto = new Producto(nombre, precio, cantidad);
console.log(producto);
producto.agreagrProducto();
console.log(listaProductos);