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
var n10 = document.getElementById("n10");
var img_modal = document.getElementById("img_modal");
var abrir = document.getElementById("abrir");
var abrir = document.getElementById("abrir");
var puesto = document.getElementById("puesto");
var quitado = document.getElementById("quitado");
var down = document.getElementById("down")

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

down.addEventListener("click",function(){
    modal.style.display="block";
    console.log("Hola");
    
    modal.style.display="none";
    console.log("Hola");
})