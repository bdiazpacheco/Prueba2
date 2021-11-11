//Declaracion de preguntas
var preguntas = ["Primera pregunta","SP","TP","CP","QP"];
//Declaracion de opciones, de cada elemento de la lista (que a su vez es una lista)
//corresponde a las posibles respuestas de una pregunta
//Se mantiene el orden de la lista de preguntas
let interval;
var opciones = [
    ["arroz","papa","pollo","carne","pescado"],
    ["SP R1","SP R2","SP R3","SP R4","SP R5"],
    ["TP R1","TP R2","TP R3","TP R4","TP R5"],
    ["CP R1","CP R2","CP R3","CP R4","CP R5"],
    ["QP R1","QP R2","QP R3","QP R4","QP R5"]
];

var puntajePorOpcion = [
    [5,4,3,2,1],
    [5,4,3,2,1],
    [5,4,3,2,1],
    [5,4,3,2,1],
    [5,4,3,2,1]
]   

// Acá se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;

// Despliegue de los resultados
function mostrarResultado() {
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;


    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";

    if (puntaje > 25) {
        estiloVida = "<span id='estilo-excelente'>EXCELENTE</span>";
    } else if (puntaje > 22) {
        estiloVida = "<span id='estilo-bueno'>BUENO</span>";
    } else if (puntaje > 15) {
        estiloVida = "<span id='estilo-aceptable'>ACEPTABLE</span>";
    } else if (puntaje > 10) {
        estiloVida = "<span id='estilo-regular'>REGULAR</span>";
    } else {
        estiloVida = "<span id='estilo-malo'>MALO</span>";
    }
    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que me conoces ${estiloVida}.</p>`;
}

function iniciarCronometro() {
    const contador = 15, cronometroDisplay = document.getElementById("cronometro")
    iniciarTiempo(contador, cronometroDisplay)
}
  
function iniciarTiempo(duracion, componente) {
    interval = setInterval(() => {
        if (duracion === 0) {
            componente.innerHTML = "Se acabó el tiempo";
            clearInterval(interval);
            loadQuestions()
        } else {
            duracion = duracion < 10 ? "0" + duracion : duracion;
            componente.textContent = "00:" + duracion;
            duracion--;
        }
    }, 1000)
}
function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    document.getElementById("op5").innerHTML = opciones[i][4];
    
    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
    i++;
    iniciarCronometro()
}

function actualizarPuntaje(opciones) {
    var indice = opciones - 1;
    
    if (i < preguntas.length) {
        puntaje += puntajePorOpcion[i][indice];
        siguientePregunta();
    } else {
        
        mostrarResultado();
    }
}



siguientePregunta();  // Muestra la primera pregunta
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(4);
});
document.getElementById("op5").addEventListener("click", function () {
    actualizarPuntaje(5);
});