let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");

let valorProducto = 20000000;
let auxValorProducto =new Intl.NumberFormat("de-DE").format(valorProducto)
document.getElementById("precioUnidad").innerHTML=auxValorProducto

boxPlus.addEventListener("click",function(){
let auxCant= boxCantidad.innerHTML
if(auxCant < 10){
    auxCant++;
   boxCantidad.innerHTML = auxCant
   calcularSubtotal()
   sip()
}
})
boxMinus.addEventListener("click",function(){
    let auxCant= boxCantidad.innerHTML
    if(auxCant > 0){
        auxCant--;
       boxCantidad.innerHTML = auxCant
       calcularSubtotal()
       sip()
    }
})
function calcularSubtotal(){
    let auxCant = valorProducto*Number(boxCantidad.innerHTML);
    let auxCanTUMiL = Intl.NumberFormat("de-DE").format(auxCant);
    document.getElementById("subtotal").innerHTML="$" + auxCanTUMiL;
}
function sip(){
    let auxCant = boxCantidad.innerHTML;
    document.getElementById("numeroProductos").innerHTML=auxCant
}