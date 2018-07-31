//Registro

const dataList = document.querySelector('#data-list');
const form = document.querySelector('#formulario');

// se crea elemntos del Dom
/*function renderData(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let rut = document.createElement('span');
    let number = document.createElement('span');
    let patente = document.createElement('span');

    // se agregan atributos

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().nombre;
    email.textContent = doc.data().Email;
    rut.textContent = doc.data().Rut;
    number.textContent = doc.data().Telefono;
    patente.textContent = doc.data().patente;

    // se unen los hijos a los padres

    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(rut);
    li.appendChild(number);
    li.appendChild(patente);
    dataList.appendChild(li);


}*/


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
    location.href = "../Alerta/alerta.html"
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






