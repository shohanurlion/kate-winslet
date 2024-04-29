let type = document.querySelector(".type");

let typed = type.innerHTML;

type.style .color="black";

let typing = typed.split("");

type.innerHTML = " ";

let started = 0;


function typejs(){
    if(started < typed.length){
        
        type.innerHTML += typed.charAt(started);

        started++;

        typing = typed.split("");
    }else{
         typing.pop("");
         type.innerHTML = typing.join("");

         if(typing.length == 0){
            started = 0;
         }
    }
}

setInterval(()=>{
    typejs();
},200)