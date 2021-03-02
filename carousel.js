const container = document.querySelector(".container"),
    image = container.querySelector("img"),
    arrowLeft = container.querySelector(".arrow-left"),
    arrowRight = container.querySelector(".arrow-right");


let Index = 1;
const ACTIVE = "active";
let BUTTON = document.getElementById(Index);

function goLeft(){
    if (Index === 1){
        Index = 6;
    }
    BUTTON.classList.remove(ACTIVE);
    const minusNumber = Index - 1;
    image.src = `images/image-${minusNumber}.jpg`;
    Index = minusNumber;
    BUTTON = document.getElementById(Index);
    BUTTON.classList.add(ACTIVE);
}

function goRight(){
    if (Index === 5){
        Index = 0;
    }
    BUTTON.classList.remove(ACTIVE);
    const plusNumber = Index + 1;
    image.src = `images/image-${plusNumber}.jpg`;
    Index = plusNumber;
    BUTTON = document.getElementById(Index);
    BUTTON.classList.add(ACTIVE);
}


function contronIndex(){
    const marker1 = document.getElementById("1");
    marker1.addEventListener("click", function(){
        image.src = `images/image-1.jpg`;
        BUTTON.classList.remove(ACTIVE);
        BUTTON = document.getElementById("1");
        BUTTON.classList.add(ACTIVE);
    })
    const marker2 = document.getElementById("2");
    marker2.addEventListener("click", function(){
        image.src = `images/image-2.jpg`;
        BUTTON.classList.remove(ACTIVE);
        BUTTON = document.getElementById("2");
        BUTTON.classList.add(ACTIVE);
    })
    const marker3 = document.getElementById("3");
    marker3.addEventListener("click", function(){
        image.src = `images/image-3.jpg`;
        BUTTON.classList.remove(ACTIVE);
        BUTTON = document.getElementById("3");
        BUTTON.classList.add(ACTIVE);
    })
    const marker4 = document.getElementById("4");
    marker4.addEventListener("click", function(){
        image.src = `images/image-4.jpg`
        BUTTON.classList.remove(ACTIVE);
        BUTTON = document.getElementById("4");
        BUTTON.classList.add(ACTIVE);
    })
    const marker5 = document.getElementById("5");
    marker5.addEventListener("click", function(){
        image.src = `images/image-5.jpg`;
        BUTTON.classList.remove(ACTIVE);
        BUTTON = document.getElementById("5");
        BUTTON.classList.add(ACTIVE);
    })
}

function init() {
    contronIndex();
    arrowLeft.addEventListener("click", goLeft);
    arrowRight.addEventListener("click", goRight);
}

init();