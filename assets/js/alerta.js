/*let button = document.getElementById("button");

/*button.addEventListener("click", function(){
    notify();
});

function notify(){
let properties = {
    body: "Tienes un nuevo mensaje",
    icon: "icononotificacionesj1.png"
}

    // verificar que el navegador soporta notificaciones
    if (!("Notification" in window)) {
        alert("Tu navegadir no soporta notificaciones");

        //Lanzar notificacion si ya esta autorizado el servicio
    }else if(Notification.permission !== "denied"){
        Notification.requestPermission(function(permission){
           if(Notification.permission === "granted"){
               let notificacion = new Notification("Tienes una nueva visita, ¿deseas recibirla?", properties);
               notificacion.onclick = (ev)=>{
                   ev.preventDefault();
                   window.open(`http://www.elestudio.cl`);
               }
           }
        });
    }

}*/

//Funcionalidad Parallax
$(document).ready(function(){
    $('.parallax').parallax();
  }); */
