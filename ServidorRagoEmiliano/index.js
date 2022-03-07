const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end(JSON.stringify(createData()));
});

server.listen(PORT, () => {
    console.log(`Servidor Http levantado en el puerto ${PORT}`);
})

const createData = () => {
    return {
        id: createRandomNumber(1, 10),
        title: `Producto ${createRandomNumber(1, 10)}`,
        price: createRandomNumber(0.00, 9999.99, 2),
        thumbnail: `Foto ${createRandomNumber(1, 10)}`
    }
}

const createRandomNumber = (min, max, decimales) => {
    return decimales ?
        (Math.random() * (max - min) + min).toFixed(decimales) :
        Math.round(Math.random() * (max - min) + min);
}