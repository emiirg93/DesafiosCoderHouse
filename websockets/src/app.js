import express from 'express';
import { Server } from 'socket.io';
import __dirname from './utils.js';

const PORT = 8080;

const app = express();

app.use(express.static(`${__dirname}/public`));

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const clients = [];
const productos = [];

const io = new Server(server);

io.on('connection', socket => {
    socket.on('userConnection',(data) => {
        data.id = socket.id;
        clients.push(data);
    });

    socket.on('addProduct',(data) => {
        productos.push(data);
        io.emit('addTable',data);
    });

    io.emit('connectUser',productos);
});

