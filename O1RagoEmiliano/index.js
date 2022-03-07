const { fromEvent, map, Observable } = rxjs;
const { switchMap } = rxjs.operators;

const input = document.getElementById('input');

const span = document.getElementById('span');

const observable = fromEvent(input, 'keyup').pipe(
    map(event => event.target.value.toLowerCase()),
    switchMap(texto => new Observable(observer => {
        if (texto === 'error') {
            observer.error('El usuario a ingresado "error"');
        }
        if (texto === 'complete') {
            observer.complete();
        }
        observer.next(texto);
    }))
);

const subcripcion = observable.subscribe({
    next: (value) => {
        span.innerHTML = value
    },
    error: (error) => {
        disabledInput(input,span);
        console.error(error);
    },
    complete: () => console.log('la subcripcion termino al escribir "complete".')
});

setTimeout(() => {
    console.log('unsubcribe despues de 30 segundos.')
    subcripcion.unsubscribe();
    disabledInput(input,span);
}, 30000)

const disabledInput = (input, span) => {
    input.value = '';
    span.innerHTML = '';
    input.disabled = true;
}