alert("Welcome to MORAYA COMMERCE CLASSES");



// JOIN BUTTON MESSAGE

let btn = document.querySelector(".btn");

if(btn){

btn.onclick = function(){

alert("Admission Open - MORAYA COMMERCE CLASSES");

}

}



// SMOOTH SCROLL EFFECT

document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

if(this.hash !== ""){

e.preventDefault();

let id = this.hash;

document.querySelector(id).scrollIntoView({

behavior:"smooth"

});

}

});

});




// TEXT ANIMATION

let title = document.querySelector(".home h2");

let colors = ["orange","white","yellow"];

let i = 0;

setInterval(() => {

if(title){

title.style.color = colors[i];

i++;

if(i >= colors.length){

i = 0;

}

}

},1000);




// GLOW EFFECT LOOP

setInterval(()=>{

document.body.style.boxShadow =
"0 0 20px orange inset";

setTimeout(()=>{

document.body.style.boxShadow = "none";

},500)

},3000);
