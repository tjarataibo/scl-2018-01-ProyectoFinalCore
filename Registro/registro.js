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
        console.log('Usuario ya existente')

        //  else (nombreApellido.length != 0 && rut.length != 0 && telefono.length != 0
        //         && correo.length != 0 && contrasena.length != 0) {
        //     alert("Usuario ya existente");
        //             var confirmar = confirm("Estás a punto de comenzar la trivia, ¿Quieres comenzar?.");
        //             if (confirmar)
        //             location.href ="../Despedida/despedida.html";;


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
            console.log('Registro exitoso');
            location.href ="../Despedida/despedida.html";
        })
       // location.href = '../login/login.html';
    }
});

// function paraIrAdespedida() {
//         // preventDefault() detiene el evento, en este caso el envio no ocurre.
//         evento.preventDefault();
//         const nombreApellido = document.getElementById('nameLastname').value;
//         const rut = document.getElementById('di').value;
//         const telefono = document.getElementById('phone').value;
//         const correo = document.getElementById('correo').value;
//         const contrasena = document.getElementById('contrasena').value;
//         if(correo.length != 0 && contrasena.length != 0) {
//             firebase.auth().register(nombreApellido, rut, telefono, correo, contrasena)
//             .then((respondse)=> {
//               location.href ="../Despedida/despedida.html";
//             })
//             .catch(function(error) {
//                 let errorCode = error.code;
//                 alert(errorCode);
//             });
//         };
//     }



//alert("Usuario registrado, inicia sesión");
// var iniciarSesion = iniciarSesion("Estás a punto de comenzar la trivia, ¿Quieres comenzar?");
// else (nombreApellido.length != 0 && rut.length != 0 && telefono.length != 0
//     && correo.length != 0 && contrasena.length != 0) {
//     location.href ="../Despedida/despedida.html";;