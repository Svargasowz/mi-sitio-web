var modal = document.getElementById("modal")
var cerrar = document.querySelector("#cerrar")
var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var n3 = document.getElementById("n3")
var n4 = document.getElementById("n4")
var n5 = document.getElementById("n5")
var img_modal = document.getElementById("img_modal")
var abrir = document.getElementById("abrir")

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