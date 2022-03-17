import fs from 'fs';

class Archivo {

    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
        this.length = this.existeArchivo() ? JSON.parse(fs.readFileSync(this.nombreArchivo, 'utf-8')).length : 0;
    }

    leer() {
        if (this.existeArchivo()) {
            const contenido =  JSON.parse(fs.readFileSync(this.nombreArchivo, 'utf-8'));
            return {
                items: contenido,
                cantidad: contenido.length
            };
        }

        return rej([]);
    }

    leerRandom() {
        const numberRandom = this.getRandomArbitrary(0,this.length -1);
        const contenido = this.leer();
        return {
            item: contenido.items[numberRandom]
        };
    }

    existeArchivo() {
        return fs.existsSync(this.nombreArchivo);
    }

    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}

export default Archivo;