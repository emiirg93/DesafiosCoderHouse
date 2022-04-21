import express from 'express';
import config from '../config/index.js';
import { productoRoutes } from '../routes/index.js';

class Server {
    constructor() {
        this.app = express();
        this.port = config.port;

        this.path = {
            productos: '/productos',
            carrito: '/carrito'
        }

        this.routes();
    }

    routes() {
        this.app.use(this.path.productos,productoRoutes);
    }

    listen() {
        return this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server;