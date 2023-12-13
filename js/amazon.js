var modal = document.getElementById("modal");
var cerrar = document.querySelector("#cerrar");
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");
var papa = document.getElementById("papa")
var n10 = document.getElementById("n10");
var xx = document.getElementById("xx");
var img_modal = document.getElementById("img_modal");
var abrir = document.getElementById("abrir");
var puesto = document.getElementById("puesto");
var quitado = document.getElementById("quitado");
var down = document.getElementById("down")
var calificaciones_totales = document.getElementById("calificaciones_totales")
var calificaciones_total = document.getElementById("calificaciones_total")
var fait = document.getElementById("fait")
var fait2 = document.getElementById("fait2")
let puntuacion5 = document.getElementById("puntuacion5");
let puntuacion4 = document.getElementById("puntuacion4");
let puntuacion3 = document.getElementById("puntuacion3");
let puntuacion2 = document.getElementById("puntuacion2");
let puntuacion1 = document.getElementById("puntuacion1");

var a =document.getElementById("a");
var aa =document.getElementById("aa");
var aaa =document.getElementById("aaa");
var aaaa =document.getElementById("aaaa");


let barra1Puntaje = document.getElementById("barra1Puntaje");
let barra2Puntaje = document.getElementById("barra2Puntaje");
let barra3Puntaje = document.getElementById("barra3Puntaje");
let barra4Puntaje = document.getElementById("barra4Puntaje");
let barra5Puntaje = document.getElementById("barra5Puntaje");

let porcentaje5 = 0;
let porcentaje4 = 0;
let porcentaje3 = 0;
let porcentaje2 = 0;
let porcentaje1 = 0;
let buttonGraficar = document.getElementById("buttonGraficar");

abrir.addEventListener("click",function(){
    modal.style.display="block";
    console.log("Hola");
})
cerrar.addEventListener("click",function(){
    modal.style.display="none";
    console.log("Hola");
})
n1.addEventListener("click",function(){
img_modal.src = ""
img_modal.src = n1.src
setActive(n1)
})
n2.addEventListener("click",function(){
    img_modal.src = ""
    img_modal.src = n2.src
    setActive(n2)
    })
n3.addEventListener("click",function(){
    img_modal.src = ""
    img_modal.src = n3.src
    setActive(n3)
})
n4.addEventListener("click",function(){
    img_modal.src = ""
    img_modal.src = n4.src
    setActive(n4)
})
n5.addEventListener("click",function(){
    img_modal.src = ""
    img_modal.src = n5.src
    setActive(n5)
})
n6.addEventListener("click",function(){
    abrir.src = ""
    abrir.src = n6.src
    setActive(n6)
    })
    n7.addEventListener("click",function(){
        abrir.src = ""
        abrir.src = n7.src
        setActive(n7)
        })
    n8.addEventListener("click",function(){
        abrir.src = ""
        abrir.src = n8.src
        setActive(n8)
    })
    n9.addEventListener("click",function(){
        abrir.src = ""
        abrir.src = n9.src
        setActive(n9)
    })
    n10.addEventListener("click",function(){
        abrir.src = ""
        abrir.src = n10.src
        setActive(n10)
    })


fait.addEventListener("mouseover",function(){
    calificaciones_totales.style.display="block";
    console.log("Hola");
    let totalVotantes = parseInt(puntuacion5.value) + parseInt(puntuacion4.value) +
    parseInt(puntuacion3.value) + parseInt(puntuacion2.value) + 
    parseInt(puntuacion1.value);
let porcentaje5 = (puntuacion5.value * 0 / totalVotantes);
let porcentaje5Grafica = porcentaje5 * 0;
barra1Puntaje.style.width = porcentaje5Grafica.toString() + "px";

/* Grafica 4 */
let porcentaje4 = (puntuacion4.value * 0 / totalVotantes);
let porcentaje4Grafica = porcentaje4 * 0;
barra2Puntaje.style.width = porcentaje4Grafica.toString() + "px";

/* Grafica 3 */
let porcentaje3 = (puntuacion3.value * 0 / totalVotantes);
let porcentaje3Grafica = porcentaje3 * 0;
barra3Puntaje.style.width = porcentaje3Grafica.toString() + "px";

/* Grafica 2 */
let porcentaje2 = (puntuacion2.value * 0 / totalVotantes);
let porcentaje2Grafica = porcentaje2 * 2;
barra4Puntaje.style.width = porcentaje2Grafica.toString() + "px";

/* Grafica 1 */
let porcentaje1 = (puntuacion1.value * 0 / totalVotantes);
let porcentaje1Grafica = porcentaje1 * 0;
barra5Puntaje.style.width = porcentaje1Grafica.toString() + "px";


});
a.addEventListener("mouseover", function(){
    calificaciones_totales.style.display = "none";
    console.log("Adiós");

    let totalVotantes = parseInt(puntuacion5.value) + parseInt(puntuacion4.value) +
    parseInt(puntuacion3.value) + parseInt(puntuacion2.value) + 
    parseInt(puntuacion1.value);
let porcentaje5 = (puntuacion5.value * 0 / totalVotantes);
let porcentaje5Grafica = porcentaje5 * 0;
barra1Puntaje.style.width = porcentaje5Grafica.toString() + "px";

/* Grafica 4 */
let porcentaje4 = (puntuacion4.value * 0 / totalVotantes);
let porcentaje4Grafica = porcentaje4 * 0;
barra2Puntaje.style.width = porcentaje4Grafica.toString() + "px";

/* Grafica 3 */
let porcentaje3 = (puntuacion3.value * 0 / totalVotantes);
let porcentaje3Grafica = porcentaje3 * 0;
barra3Puntaje.style.width = porcentaje3Grafica.toString() + "px";

/* Grafica 2 */
let porcentaje2 = (puntuacion2.value * 0 / totalVotantes);
let porcentaje2Grafica = porcentaje2 * 2;
barra4Puntaje.style.width = porcentaje2Grafica.toString() + "px";

/* Grafica 1 */
let porcentaje1 = (puntuacion1.value * 0 / totalVotantes);
let porcentaje1Grafica = porcentaje1 * 0;
barra5Puntaje.style.width = porcentaje1Grafica.toString() + "px";

});
aa.addEventListener("mouseover", function(){
    calificaciones_totales.style.display = "none";
    console.log("Adiós");

    let totalVotantes = parseInt(puntuacion5.value) + parseInt(puntuacion4.value) +
    parseInt(puntuacion3.value) + parseInt(puntuacion2.value) + 
    parseInt(puntuacion1.value);
let porcentaje5 = (puntuacion5.value * 0 / totalVotantes);
let porcentaje5Grafica = porcentaje5 * 0;
barra1Puntaje.style.width = porcentaje5Grafica.toString() + "px";

/* Grafica 4 */
let porcentaje4 = (puntuacion4.value * 0 / totalVotantes);
let porcentaje4Grafica = porcentaje4 * 0;
barra2Puntaje.style.width = porcentaje4Grafica.toString() + "px";

/* Grafica 3 */
let porcentaje3 = (puntuacion3.value * 0 / totalVotantes);
let porcentaje3Grafica = porcentaje3 * 0;
barra3Puntaje.style.width = porcentaje3Grafica.toString() + "px";

/* Grafica 2 */
let porcentaje2 = (puntuacion2.value * 0 / totalVotantes);
let porcentaje2Grafica = porcentaje2 * 2;
barra4Puntaje.style.width = porcentaje2Grafica.toString() + "px";

/* Grafica 1 */
let porcentaje1 = (puntuacion1.value * 0 / totalVotantes);
let porcentaje1Grafica = porcentaje1 * 0;
barra5Puntaje.style.width = porcentaje1Grafica.toString() + "px";

});
aaa.addEventListener("mouseover", function(){
    calificaciones_totales.style.display = "none";
    console.log("Adiós");
    let totalVotantes = parseInt(puntuacion5.value) + parseInt(puntuacion4.value) +
    parseInt(puntuacion3.value) + parseInt(puntuacion2.value) + 
    parseInt(puntuacion1.value);
let porcentaje5 = (puntuacion5.value * 0 / totalVotantes);
let porcentaje5Grafica = porcentaje5 * 0;
barra1Puntaje.style.width = porcentaje5Grafica.toString() + "px";

/* Grafica 4 */
let porcentaje4 = (puntuacion4.value * 0 / totalVotantes);
let porcentaje4Grafica = porcentaje4 * 0;
barra2Puntaje.style.width = porcentaje4Grafica.toString() + "px";

/* Grafica 3 */
let porcentaje3 = (puntuacion3.value * 0 / totalVotantes);
let porcentaje3Grafica = porcentaje3 * 0;
barra3Puntaje.style.width = porcentaje3Grafica.toString() + "px";

/* Grafica 2 */
let porcentaje2 = (puntuacion2.value * 0 / totalVotantes);
let porcentaje2Grafica = porcentaje2 * 2;
barra4Puntaje.style.width = porcentaje2Grafica.toString() + "px";

/* Grafica 1 */
let porcentaje1 = (puntuacion1.value * 0 / totalVotantes);
let porcentaje1Grafica = porcentaje1 * 0;
barra5Puntaje.style.width = porcentaje1Grafica.toString() + "px";
    
    
});
aaaa.addEventListener("mouseover", function(){
    calificaciones_totales.style.display = "none";
    console.log("Adiós");

    let totalVotantes = parseInt(puntuacion5.value) + parseInt(puntuacion4.value) +
    parseInt(puntuacion3.value) + parseInt(puntuacion2.value) + 
    parseInt(puntuacion1.value);
let porcentaje5 = (puntuacion5.value * 0 / totalVotantes);
let porcentaje5Grafica = porcentaje5 * 0;
barra1Puntaje.style.width = porcentaje5Grafica.toString() + "px";

/* Grafica 4 */
let porcentaje4 = (puntuacion4.value * 0 / totalVotantes);
let porcentaje4Grafica = porcentaje4 * 0;
barra2Puntaje.style.width = porcentaje4Grafica.toString() + "px";

/* Grafica 3 */
let porcentaje3 = (puntuacion3.value * 0 / totalVotantes);
let porcentaje3Grafica = porcentaje3 * 0;
barra3Puntaje.style.width = porcentaje3Grafica.toString() + "px";

/* Grafica 2 */
let porcentaje2 = (puntuacion2.value * 0 / totalVotantes);
let porcentaje2Grafica = porcentaje2 * 2;
barra4Puntaje.style.width = porcentaje2Grafica.toString() + "px";

/* Grafica 1 */
let porcentaje1 = (puntuacion1.value * 0 / totalVotantes);
let porcentaje1Grafica = porcentaje1 * 0;
barra5Puntaje.style.width = porcentaje1Grafica.toString() + "px";

});



fait2.addEventListener("mouseover", function() {
    /* PENDIENTE VALIDAR EL INGRESO DE NUMEROS */
    /* Grafica 5 */
    let totalVotantes = parseInt(puntuacion5.value) + parseInt(puntuacion4.value) +
                        parseInt(puntuacion3.value) + parseInt(puntuacion2.value) + 
                        parseInt(puntuacion1.value);
    let porcentaje5 = (puntuacion5.value * 100 / totalVotantes);
    let porcentaje5Grafica = porcentaje5 * 2;
    barra1Puntaje.style.width = porcentaje5Grafica.toString() + "px";

    /* Grafica 4 */
    let porcentaje4 = (puntuacion4.value * 100 / totalVotantes);
    let porcentaje4Grafica = porcentaje4 * 2;
    barra2Puntaje.style.width = porcentaje4Grafica.toString() + "px";

    /* Grafica 3 */
    let porcentaje3 = (puntuacion3.value * 100 / totalVotantes);
    let porcentaje3Grafica = porcentaje3 * 2;
    barra3Puntaje.style.width = porcentaje3Grafica.toString() + "px";

    /* Grafica 2 */
    let porcentaje2 = (puntuacion2.value * 100 / totalVotantes);
    let porcentaje2Grafica = porcentaje2 * 2;
    barra4Puntaje.style.width = porcentaje2Grafica.toString() + "px";

    /* Grafica 1 */
    let porcentaje1 = (puntuacion1.value * 100 / totalVotantes);
    let porcentaje1Grafica = porcentaje1 * 2;
    barra5Puntaje.style.width = porcentaje1Grafica.toString() + "px";
})