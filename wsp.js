function gotowhatsapp() {
    
    var name = document.getElementById("nombre").value;
    var clase = document.getElementById("clase").value;
    var cuando = document.getElementById("cuando").value;
    var email = document.getElementById("email").value;


    var url = "https://wa.me/+56975266900?text=" 
    + "Nombre: " + name + "%0a"
    + "clase: " + clase + "%0a"
    + "cuando: " + cuando  + "%0a"
    + "correo: " + email  + "%0a"

    window.open(url, '_blank').focus();
}

function gotowhatsappTutors() {
    
    var name = document.getElementById("tutor_name").value;
    var email = document.getElementById("tutor_email").value;
    var university = document.getElementById("tutor_university").value;
    var educational_level = document.getElementById("tutor_educational_level").value;
    var course = document.getElementById("tutor_course").value;

    var url = "https://wa.me/+56979945385?text=" 
    + "Hola Instanteach mi nombre es " + name +", soy alumno "+ educational_level +" de la "
    + university +" y estoy interesado en realizar clases como tutor del curso " + course + ".%0a"
    +"Mi correo de contacto es "+  email

    window.open(url, '_blank').focus();
}