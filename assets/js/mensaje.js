firebase.initializeApp({
    apiKey: 'AIzaSyCN56nwJ-HRhJNQsXaquVsNgFLIAU_cQ_0',
    authDomain: 'proyecto-final-8b8d1.firebaseapp.com',
    projectId: 'proyecto-final-8b8d1'
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

// Leer documentos
let mensaje = document.getElementById("mensaje");
db.collection("proyecto final").onSnapshot((querySnapshot) => {
    mensaje.innerHTML += `
    email
    nombre
    patente
    rut
    telefono
    
    `
}
