var db = firebase.firestore();
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e =>  {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    if(nombre.length != 0 && correo.length != 0 && contrasena.length != 0) {
        console.log('if')
        firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
        .then(Response => {
            const userId = Response.user.uid;
            firebase.database().ref('users/' + userId).set( {
               nombre: nombre,
               correo: correo 
            })
            console.log('ya envie los datos');
            location.href = '../scl-2018-01-ProyectoFinalCore/administrador.html';
            
        })
       // location.href = '../login/login.html';
    }
    
}); 

// function paraIrALogin() {
//     location.href = '../../scl-2018-01-ProyectoFinalCore/administrador.html';
// }
    // location.href = '../../scl-2018-01-ProyectoFinalCore/administrador.html';


