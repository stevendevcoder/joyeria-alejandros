var sizeNav = document.querySelector(".menu-navegacion").clientHeight;

console.log(sizeNav);
var main = document.querySelector('.main');

//main.style.setProperty("margin-top",`${sizeNav}px`);

let slider = document.querySelector(".novedades");
let sliderIndividual =  document.querySelectorAll(".novedades-slider");
let width = sliderIndividual[0].clientWidth;
let slidersLength = sliderIndividual.length - 1;
let contador = -1;

let intervalo = 2000;

let leftBtn = document.querySelectorAll(".left");
let rightBtn = document.querySelectorAll(".right");

window.addEventListener("resize", function() {  
    witdh = sliderIndividual[0].clientWidth;
})

function doSlide(value){
    slider.style.transform = `translate(${value}px)`;
}

function slideLeft(){
    console.log("left");
    slides("left");
}

function slideRight(){
    console.log("right");
    slides("right");
}

function slides(slide = "natural") {
    if(slide === "natural" || slide === "right"){
        if(slidersLength === contador){ //Llega al limite, entonces devolver
            doSlide(0); //Principio
            contador = 0;
        } else {
            contador++;
            doSlide(-width*contador);
        }
    } else if(slide === "left") {
        if(contador == 0){
            doSlide(-width*slidersLength);
            contador = slidersLength;
        } else {
            contador--;
            doSlide(-width*contador)
        }
    }
    
    slider.style.transition = "1s all";
    console.log("estoy en ",contador)
}

setInterval(slides("natural"),intervalo); //Establece intervalo de slide
leftBtn.forEach(e => e.addEventListener("click",slideLeft));
rightBtn.forEach(e => e.addEventListener("click",slideRight));

