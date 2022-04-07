const socket = io();
let productos = [];

socket.on('connectUser',(data)=> {
    productos = data;
    console.log('PRODUCTOS',productos);
    productos.forEach(producto => {
        addTable(producto);
    });
});

const user = {
    id:null,
    userName: null,
};

Swal.fire({
    title: 'Identifícate',
    input: 'text',
    allowOutsideClick: false,
    allowEscapeKey: false,
    inputValidator: (value) => {
        return !value && '¡Nombre de usuario es requerido!'
    }
}).then(result => {
    user.userName = result.value; 
    socket.emit('userConnection',user);
});

const btn = document.getElementById('agregarProducto');

btn.addEventListener('click', () => {
    const producto = {
        nombre : document.getElementById('nombre').value,
        precio : document.getElementById('precio').value,
        fotoUrl : document.getElementById('foto').value
    }

    socket.emit('addProduct', producto);
});


socket.on('addTable', (data) => {
    addTable(data);
})

const addTable = (producto) => {

    const tbody = document.getElementById('tbody');

    tbody.innerHTML +=
        `<tr>
    <td> ${producto.nombre} </td>
    <td> ${producto.precio} </td>
    <td> ${producto.fotoUrl} </td>
    </tr>
    `
}