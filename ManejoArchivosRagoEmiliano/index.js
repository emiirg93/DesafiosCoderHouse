const Archivo = require('./models/archivo');

const archivo = new Archivo('./files/productos.txt');

const producto = {
    title: 'Pepitos',
    price: 125,
    thumbnail: 'https://walmartar.vteximg.com.br/arquivos/ids/890704-1000-1000/Galletitas-Pepitos-119-Gr-1-479836.jpg?v=637514220800770000'
}

const ejecutarPrograma = async (producto) => {
    try {
        console.log(await archivo.guardar(producto));

        console.log(await archivo.leer());

        console.log(await archivo.borrar());
    } catch (error) {
        console.log(error);
    }
};

ejecutarPrograma(producto);