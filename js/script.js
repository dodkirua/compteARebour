let add = document.getElementById("add");
let container = document.getElementById("container");
let countdown;

add.addEventListener("click", function (){
  addCountdown();
});

function addCountdown(){
    countdown = document.getElementsByClassName("countdown");
    let newDiv = document.createElement("div");
    let divTime = document.createElement("div");
    let divButton = document.createElement("div");
    newDiv.className = ("countdown");
    container.append(newDiv);



}


