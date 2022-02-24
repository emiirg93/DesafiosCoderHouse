const recorrerTexto = (texto = '') => {
    console.log(texto);
}

const interval = (texto = '', timer = 1000, callback) => {
    return new Promise((res, rej) => {
        const textoArray = texto.split(' ');
        let i = 0;
        const ref = setInterval(() => {
            if (i < textoArray.length) {
                callback(textoArray[i]);
                i++;
            } else {
                clearInterval(ref);
                res(textoArray.length);
            }
        }, timer);
    })
}

(async () => {
    let countLetras = 0;
    countLetras += await interval('Hola soy', 500, recorrerTexto);
    countLetras += await interval('Emiliano Rago intentado', undefined, recorrerTexto);
    countLetras += await interval('resolver el desafío.', 2000, recorrerTexto);
    console.log(`Proceso completo - Palabras totales : ${countLetras}`);
})();