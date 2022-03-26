var menuBtn = document.querySelector(".hide");
var toggleMenu = document.querySelector(".enlaces");
var navNormal = document.querySelector(".logo-principal");
var enlaces =  document.querySelector(".enlaces ul li");

console.log("enlaces", enlaces);

function hideMenu(){
    toggleMenu.style.left = "-100%";
    navNormal.style.position = "static";
    navNormal.style.left = "0px";
    navNormal.style.transition = "all .5s";
    toggleMenu.style.transition = "all .5s";
}

function showMenu(){
    toggleMenu.style.left = "0px";
    navNormal.style.position = "relative";
    navNormal.style.left = "60%";
    navNormal.style.transition = "all .9s";
    toggleMenu.style.transition = "all .7s";
}

menuBtn.addEventListener("click", function(){
    var menuActive = toggleMenu.style.left;
    if(menuActive === "0px"){
        hideMenu();
    }
    else {
        showMenu();
    }
    console.log(menuActive);
});

window.addEventListener("resize", function(){
    if(window.screen.width < 800){
        hideMenu();
    }
});
enlaces.addEventListener("mouseover", function(){
    enlaces.style.background = "#4400006e";
});

