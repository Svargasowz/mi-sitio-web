var calificacion = document.getElementById("calificacion").value;
var respuesta = document.getElementById("respuesta");

function calcular() {
    // Convertir a número decimal
    var decimalNumber = parseFloat(calificacion);

    if (decimalNumber >= 0.5 && decimalNumber <= 1) {
        respuesta.innerHTML = "Hola"+decimalNumber;
    } 
}
