const operacion = (num1: number, num2: number, NombreOperacion: string): Promise<number> => {
    return new Promise(async (res, rej) => {
        switch (NombreOperacion) {
            case 'suma':
                const operacion1 = await import('./models/suma');
                res(new operacion1.Suma(num1, num2).resultado());
                break;
            case 'resta':
                const operacion2 = await import('./models/resta');
                res(new operacion2.Resta(num1, num2).resultado());
                break;
            case 'multiplicacion':
                const operacion3 = await import('./models/multiplicacion');
                res(new operacion3.Multiplicacion(num1, num2).resultado());
                break;
            default:
                rej(`La operación "${NombreOperacion}" no encontrada.`);
                break;
        }
    });
};

const operaciones = (num1: number, num2: number, NombreOperacion: string) => {
    operacion(num1, num2, NombreOperacion).then(resultado => {
        console.log(`El resultado de la ${NombreOperacion} es : ${resultado}`);
    }).catch(console.log);
}

operaciones(25, 25, 'multiplicacion');