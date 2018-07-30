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
            location.href ="../Alerta/alerta.html";
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



//Funcionalidad cámara

function startRead() {
    // obtain input element through DOM
  
    var file = document.getElementById('file').files[0];
    if(file){
      getAsText(file);
    }
  }
  
  function getAsText(readFile) {
  
    var reader = new FileReader();
  
    // Read file into memory as UTF-16
    reader.readAsText(readFile, "UTF-16");
  
    // Handle progress, success, and errors
    reader.onprogress = updateProgress;
    reader.onload = loaded;
    reader.onerror = errorHandler;
  }
  
  function updateProgress(evt) {
    if (evt.lengthComputable) {
      // evt.loaded and evt.total are ProgressEvent properties
      var loaded = (evt.loaded / evt.total);
      if (loaded < 1) {
        // Increase the prog bar length
        // style.width = (loaded * 200) + "px";
      }
    }
  }
  
  function loaded(evt) {
    // Obtain the read file data
    var fileString = evt.target.result;
    // Handle UTF-16 file dump
    if(utils.regexp.isChinese(fileString)) {
      //Chinese Characters + Name validation
    }
    else {
      // run other charset test
    }
    // xhr.send(fileString)
  }
  
  function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
      // The file could not be read
    }
  }