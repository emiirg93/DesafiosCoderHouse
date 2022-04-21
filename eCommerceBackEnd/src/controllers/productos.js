import { request, response } from 'express';
import fs from 'fs';
import config from '../config/index.js';

const getAll = (req = request , res = response) => {

    /* const productos = JSON.parse(fs.readFileSync(`${config.filePath}/productos.txt`));
    
    console.log(productos); */
    
    const prod = [];

    res.send(prod);
}

const create = (req = request , res = response) => {

    /* const productos = JSON.parse(fs.readFileSync(`${config.filePath}/productos.txt`));
    
    console.log(productos); */
    
    const prod = [];

    res.send(prod);
}

export {
    getAll
}