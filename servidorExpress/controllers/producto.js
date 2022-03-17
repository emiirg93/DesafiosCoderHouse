import { request, response } from 'express';
import Archivo from '../models/archivo.js';

const archivo = new Archivo('./files/productos.txt');

let vistasGetProductos = 0;
let vistasGetProductoRandom = 0;

const getProductos = async (req = response, res = response) => {
    const resp = await archivo.leer();
    vistasGetProductos++;
    res.send(resp);
}

const getProductoRandom = async (req = request, res = response) => {
    const resp = await archivo.leerRandom();
    vistasGetProductoRandom++;
    res.send({ resp });
}

const getVistas = async (req = request, res = response) => {
    res.send({
        vistas: {
            items: vistasGetProductos,
            item: vistasGetProductoRandom
        }
    });
}

export {
    getProductos,
    getProductoRandom,
    getVistas
}