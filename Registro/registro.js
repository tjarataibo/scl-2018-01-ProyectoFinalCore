//Registro

var db = firebase.firestore();
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e =>  {
    e.preventDefault();
    const nombreApellido = document.getElementById('nameLastname').value;
    const rut = document.getElementById('di').value;
    const telefono = document.getElementById('phone').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    if(nombreApellido.length != 0 && rut.length != 0 && telefono.length != 0
    && correo.length != 0 && contrasena.length != 0) {
        console.log('if')
        firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
        .then(Response => {
            const userId = Response.user.uid;
            firebase.database().ref('users/' + userId).set( {
               nombreApellido: nombreApellido,
               rut: rut,
               telefono: telefono,
               correo: correo,
               contrasena: contrasena 
            })
            console.log('ya envié los datos');
            
        })
       // location.href = '../login/login.html';
    }
});

function paraIrALogin() {
    location.href = '../login/login.html';
}