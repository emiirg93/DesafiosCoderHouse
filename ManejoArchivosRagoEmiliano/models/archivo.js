const fs = require('fs');

class Archivo {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    async leer() {
        if (this.existeArchivo()) {
            const contenido = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            return JSON.parse(contenido);
        }

        return rej([]);
    }

    async guardar(producto) {
        try {
            if (this.existeArchivo()) {
                const contenido = await this.leer();
                const nuevo = {
                    id: contenido.length + 1,
                    ...producto
                }
                contenido.push(nuevo);
                await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(contenido));
                return 'Producto agregado correctamente.';
            } else {
                const nuevo = {
                    id: 1,
                    ...producto
                }
                await fs.promises.writeFile(this.nombreArchivo, JSON.stringify([nuevo]));
                return 'Producto agregado correctamente.';
            }
        } catch (error) {
            return error;
        }
    }

    async borrar() {
            if (this.existeArchivo()) {
                await fs.promises.unlink(this.nombreArchivo);
                return 'Archivo borrado.';
            }

            return 'No existe archivo para borrar.';
    }

    existeArchivo() {
        return fs.existsSync(this.nombreArchivo);
    }
}

module.exports = Archivo;