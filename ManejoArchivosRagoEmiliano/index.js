const Archivo = require('./models/archivo');

const archivo = new Archivo('./files/productos.txt');

const productos = [
    {
        title: 'Escuadra',
        price: 123.45,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Squadra_45.jpg'
    },
    {
        title: 'Calculadora',
        price: 234.56,
        thumbnail: 'https://macoser.vteximg.com.br/arquivos/ids/155408-1000-1000/FX-350-LAPLUS.jpg?v=637006385201700000'
    },
    {
        title: 'Globo Terráqueo',
        price: 345.67,
        thumbnail: 'https://s3-sa-east-1.amazonaws.com/peluffo/f9c984ab-1b4f-4ab6-9246-1c43505d92a9.jpg'
    }
]

const ejecutarPrograma = async (productos) => {
    try {
        console.log(await agregarProductos(productos))

        console.log(await archivo.leer());

        console.log(await archivo.borrar());
    } catch (error) {
        console.log(error);
    }
};

const agregarProductos = (productos = []) => {
    return new Promise(async (res, rej) => {
        try {
            for (let i = 0; i < productos.length; i++) {
                await archivo.guardar(productos[i]);
            }
            res('Productos agregados correctamente.');
        } catch (error) {
            rej(error);
        }
    });
}
 
ejecutarPrograma(productos);
