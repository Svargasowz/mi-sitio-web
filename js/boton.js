/*asociamos el id del toglee*/
let toggleBox = document.getElementById("toggleBox");
let choiceBox = document.getElementById("choiceBox");
/*2 verificamos que clase se encuentra en choice-box*/
toggleBox.addEventListener("click",function(){
    if(choiceBox.classList.contains("choice-box-off")){
        toggleBox.classList.add("choice-box-on");
        toggleBox.classList.remove("choice-box-off")
    }
    else{
        choiceBox.classList.remove("choice-box-on")
    }
})
/*3 al dar click quitamos la clase por defecto de choice-box
y agregamos la clase que venia con el hover de choice-box*/  