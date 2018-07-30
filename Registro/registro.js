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

function paraIrALogin() {
    location.href = '../login/login.html';
}


function getTime() {
let fecha = new Date(); 
let fecha2 = fecha.getDay()+" "+fecha.getDate()+" /"+fecha.getMonth()+" /"+fecha.getFullYear()+" "+fecha.getHours()+":"+fecha.getMinutes();
return(fecha2);

}
