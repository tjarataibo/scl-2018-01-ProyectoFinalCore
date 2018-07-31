//Registro


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

