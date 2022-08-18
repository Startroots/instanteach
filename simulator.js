function paesSimulator() {

    var nem = document.getElementById("nem").value;
    var ranking = document.getElementById("ranking").value;
    var lenguaje = document.getElementById("lenguaje").value;
    var matematica = document.getElementById("matematica").value;
    var historia = document.getElementById("historia").value;
    var ciencias = document.getElementById("ciencias").value;

    var p_nem = document.getElementById("p_nem").value/100;
    var p_ranking = document.getElementById("p_ranking").value/100;
    var p_lenguaje = document.getElementById("p_lenguaje").value/100;
    var p_matematica = document.getElementById("p_matematica").value/100;
    var p_historia = document.getElementById("p_historia").value/100;
    var p_ciencias = document.getElementById("p_ciencias").value/100;


    paesSimulator_result = nem*p_nem + ranking*p_ranking + lenguaje*p_lenguaje + matematica*p_matematica + historia*p_historia + ciencias*p_ciencias

    console.log(paesSimulator_result);
    document.getElementById('score').innerHTML = paesSimulator_result;
}