/* //Registro

const dataList = document.querySelector('#data-list');
const form = document.querySelector('#formulario');



//codigo que hace posible recibir la data 
db.collection('proyecto final').get().then((snapshot) => {
    //console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        //renderData();
    });
})

// codigo que guarda data en database
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('proyecto final').add({
        nombre: form.nombre.value,
        email: form.email.value,
        rut: form.rut.value,
        telefono: form.tlf.value,
        patente: form.patente.value
    })
    
    // para mantener limpio los input luego de haber enviado los datos
    form.nombre.value = '';
    form.email.value = '';
    form.rut.value = '';
    form.tlf.value = '';
    form.patente.value = '';
    })  
   
function paraIrALogin() {
    location.href = "alerta.html"
}

   
// Funcion para mandar mails

(function(){
    emailjs.init("user_lw0PCIJps1KFwrFZ3V8Wq");
 })();
const vue = new Vue({
    el: '#app',
    data(){
        return {
            from_name: '',
            from_email: '',
            message: '',
            subject: "Visita rut " + '',
        }
    },
    methods: {
        enviar(){
            let data = {
                from_name: this.from_name,
                from_email: this.from_email,
                message: this.message,
                subject: this.subject,
            };
            
            emailjs.send("gmail","identity", data)
            .then(function(response) {
                if(response.text === 'OK'){
                    alert('El correo se ha enviado de forma exitosa');
                }
               console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                alert('Ocurrió un problema al enviar el correo');
               console.log("FAILED. error=", err);
            });
        }
    }
});

let video = document.querySelector('#camera-stream'),
    image = document.querySelector('#snap'),
    start_camera = document.querySelector('#start-camera'),
    controls = document.querySelector('.controls'),
    take_photo_btn = document.querySelector('#take-photo'),
    delete_photo_btn = document.querySelector('#delete-photo'),
    download_photo_btn = document.querySelector('#download-photo'),
    error_message = document.querySelector('#error-message');

// Utilizamos la funcion getUserMedia para obtener la salida de la webcam
navigator.getMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);


if (!navigator.getMedia) {
    displayErrorMessage("Tu navegador no soporta la funcion getMedia.");
}
else {

    // Solicitamos la camara
    navigator.getMedia(
        {
            video: true
        },
        function (stream) {

            // A nuestro componente video le establecemos el src al stream de la webcam
            video.src = window.URL.createObjectURL(stream);

            // Reproducimos
            //video.play();
            video.onplay = function () {
                showVideo();
            };

        },
        function (err) {
            displayErrorMessage("Ocurrio un error al obtener el stream de la webcam: " + err.name, err);
        }
    );

}

// En los moviles no se puede reproducir el video automaticamente, programamos funcionamiento del boton inicar camara
start_camera.addEventListener("click", function (e) {

    e.preventDefault();

    // Reproducimos manualmente
    video.play();
    showVideo();

});


take_photo_btn.addEventListener("click", function (e) {

    e.preventDefault();

    let snap = takeSnapshot();

    // Mostramos la imagen
    image.setAttribute('src', snap);
    image.classList.add("visible");

    // Activamos los botones de eliminar foto y descargar foto
    delete_photo_btn.classList.remove("disabled");
    download_photo_btn.classList.remove("disabled");

    // Establecemos el atributo href para el boton de descargar imagen
    download_photo_btn.href = snap;

    // Pausamos el stream de video de la webcam
    video.pause();

});


delete_photo_btn.addEventListener("click", function (e) {

    e.preventDefault();

    // Ocultamos la imagen
    image.setAttribute('src', "");
    image.classList.remove("visible");

    // Deshabilitamos botones de descargar y eliminar foto
    delete_photo_btn.classList.add("disabled");
    download_photo_btn.classList.add("disabled");

    // Reanudamos la reproduccion de la webcam
    video.play();

});



function showVideo() {
    // Mostramos el stream de la webcam y los controles

    hideUI();
    video.classList.add("visible");
    controls.classList.add("visible");
}


function takeSnapshot() {

    let hidden_canvas = document.querySelector('canvas'),
        context = hidden_canvas.getContext('2d');

    let width = video.videoWidth,
        height = video.videoHeight;

    if (width && height) {

        // Configuramos el canvas con las mismas dimensiones que el video
        hidden_canvas.width = width;
        hidden_canvas.height = height;

        // Hacemos una copia
        context.drawImage(video, 0, 0, width, height);

        // Convertimos la imagen del canvas en datarurl
        return hidden_canvas.toDataURL('image/png');
    }
}


function displayErrorMessage(error_msg, error) {
    error = error || "";
    if (error) {
        console.log(error);
    }

    error_message.innerText = error_msg;

    hideUI();
    error_message.classList.add("visible");
}


function hideUI() {
    // Limpiamos

    controls.classList.remove("visible");
    start_camera.classList.remove("visible");
    video.classList.remove("visible");
    snap.classList.remove("visible");
    error_message.classList.remove("visible");
}
 */




ar db = firebase.firestore();
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e =>  {
    e.preventDefault();
    const nombreApellido = document.getElementById('nameLastname').value;
    const cedula = document.getElementById('di').value;
    const telefono = document.getElementById('phone').value;
    const patente = document.getElementById('placa').value;
    const correo = document.getElementById('email').value;
    const contraseña = document.getElementById('contrasena').value;
    if(nombreApellido.length != 0 && cedula.length != 0 && telefono.length != 0
    && patente.length != 0 && correo.length != 0 && contraseña.length != 0) {
        console.log('if')
        firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
        .then(Response => {
            const userId = Response.user.uid;
            firebase.database().ref('users/' + userId).set( {
               Nombre: nombreApellido,
               Rut: cedula,
               Telefono: telefono,
               Patente: patente,
               Correo: correo 
               Contraseña: contraseña 
            })
            console.log('ya envie los datos');
            
        })
       // location.href = '../login/login.html';
    }
});

function paraIrALogin() {
    location.href = "../scl-2018-01-ProyectoFinalCore/alerta.html";
}



