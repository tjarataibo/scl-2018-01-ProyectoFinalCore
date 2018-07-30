//Registro

/* var db = firebase.firestore();
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
            firebase.database().ref("users/" + userId).set( {
               nombreApellido: nombreApellido,
               rut: rut,
               telefono: telefono,
               correo: correo,
               contrasena: contrasena 
            })
            console.log('Registro exitoso');
            location.href ="../Alerta/alerta.html";
        })
       // location.href = '../login/login.html';
    }
}); */

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


//Funcionalidad Parallax
$(document).ready(function(){
  $('.parallax').parallax();
});

//Funcionalidad cámara
// navigator.getUserMedia = ( navigator.getUserMedia ||
//   navigator.webkitGetUserMedia ||
//   navigator.mozGetUserMedia ||
//   navigator.msGetUserMedia);

// navigator.getUserMedia (

// // constraints
// {
// video: true,
// audio: false
// },

// // successCallback
// function(localMediaStream) {
// var video = document.querySelector(video);
// video.src = window.URL.createObjectURL(localMediaStream);
// },

// // errorCallback
// function(err) {
// console.log("Ocurrió el siguiente error: " + err);
// }

// );

//Funcionalidad cámara
// function sedPhotoToStorage(){
//   const photoFile = photoFileSelector.files[0];
//   const fileName = photoFile.name;
//   const metadata = {
//       contentType : photoFile.type
//   }; 

//   const task = firebase.storage().ref('imagesPost')
//       .child(fileName)
//       .put(photoFile, metadata);

//   task.then(snapshot => snapshot.ref.getDownloadURL())
//       .then(url => {
//             console.log("URL del archivo > "+url);
//             const currentUsers = firebase.auth().currentUser;
//             cont.innerHTML += `
//             <img style="width: 25%; display: flex" src="${currentUsers.photoURL}">
//             <p> ${currentUsers.diplayName}</p>
//             <img style="width: 200px; display: flex" src="${url}">
//             `;
//        });
// }