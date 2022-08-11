function gotowhatsapp() {
    
    var name = document.getElementById("nombre").value;
    var clase = document.getElementById("clase").value;
    var cuando = document.getElementById("cuando").value;

    var url = "https://wa.me/+56975266900?text=" 
    + "Nombre: " + name + "%0a"
    + "clase: " + clase + "%0a"
    + "cuando: " + cuando  + "%0a"

    window.open(url, '_blank').focus();
}