import express from 'express';
import { getProductoRandom, getProductos, getVistas } from './controllers/producto.js';

const PORT = 8080;

const app = express();

app.get('/items',getProductos);

app.get('/item-random',getProductoRandom);

app.get('/vistas',getVistas);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

