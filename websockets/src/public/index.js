const socket = io();
let productos = [];
let messages = [];

socket.once('connectUser',(data)=> {
    productos = data.productos;
    console.log('PRODUCTOS',productos);
    productos.forEach(producto => {
        addTable(producto);
    });

    messages = data.messages;
    messages.forEach(message =>{
        console.log(message);
        addMessage(message);
    })
});

let user = {
    id:null,
    email: null,
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
    user.email = result.value; 
    socket.emit('userConnection',user);
    socket.once('clientConnect',(data) =>{
        user = data;
    });
});

const btn = document.getElementById('agregarProducto');

btn.addEventListener('click', () => {
    const producto = {
        nombre : document.getElementById('nombre').value,
        precio : document.getElementById('precio').value,
        fotoUrl : document.getElementById('foto').value
    }

    socket.emit('addProduct', producto);

    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('foto').value = '';
});

const btnSend = document.getElementById('send');

btnSend.addEventListener('click', () => {

    const message = {
        user,
        message : {
            date : new Date(),
            content : document.getElementById('inputMessage').value
        }
    }

    socket.emit('addMessage', message);

    document.getElementById('inputMessage').value = '';
});


socket.on('addTable', (data) => {
    addTable(data);
});

socket.on('getMessage', (data) =>{
    addMessage(data);
});

const addTable = (producto) => {

    const tbody = document.getElementById('tbody');

    tbody.innerHTML +=
        `<tr>
    <td> ${producto.nombre} </td>
    <td> ${producto.precio} </td>
    <td> <img class="img-fluid" style="height: 30px;" src="${producto.fotoUrl}" alt="img"> </td>
    
    </tr>
    `
}

const addMessage = (msg) => {

    const div = document.getElementById('containerMessages');

    const {user:{email},message:{date,content}} = msg; 
    
    div.innerHTML +=
        `
        <p><span class="email">${email}</span><span class="time">${generateFormatDate(date)}</span> : <span class="message">${content}</span></p>
    `
}

const generateFormatDate = (d) => {
    const date = new Date(d);
    return `[${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
}