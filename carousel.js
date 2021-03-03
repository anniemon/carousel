const container = document.querySelector(".container"),
    image = container.querySelector("img"),
    arrowLeft = container.querySelector(".arrow-left"),
    arrowRight = container.querySelector(".arrow-right"),
    marker1 = document.getElementById("1"),
    marker2 = document.getElementById("2"),
    marker3 = document.getElementById("3"),
    marker4 = document.getElementById("4"),
    marker5 = document.getElementById("5");

let INDEX = 1;
const ACTIVE = "active";
let BUTTON = document.getElementById(INDEX);

function goLeft(){
    if (INDEX === 1){
        INDEX = 6;
    }
    const minusNumber = INDEX - 1;
    image.src = `images/image-${minusNumber}.jpg`;
    image.decode()
    .then(function(){
        BUTTON.classList.remove(ACTIVE);
        INDEX = minusNumber;
        BUTTON = document.getElementById(INDEX);
        BUTTON.classList.add(ACTIVE);
    })
}

function goRight(){
    if (INDEX === 5){
        INDEX = 0;
    }
    const plusNumber = INDEX + 1;
    image.src = `images/image-${plusNumber}.jpg`;
    image.decode()
    .then(function(){
        BUTTON.classList.remove(ACTIVE);
        INDEX = plusNumber;
        BUTTON = document.getElementById(INDEX);
        BUTTON.classList.add(ACTIVE);
    })
}

function paint1(){
    image.src = `images/image-1.jpg`;
    image.decode()
    .then(function(){
        BUTTON.classList.remove(ACTIVE);
        BUTTON = document.getElementById("1");
        BUTTON.classList.add(ACTIVE);
        })
}
function paint2(){
    image.src = `images/image-2.jpg`;
    image.decode()
    .then(function(){
        BUTTON.classList.remove(ACTIVE);
        BUTTON = document.getElementById("2");
        BUTTON.classList.add(ACTIVE);
        })
}
function paint3(){
    image.src = `images/image-3.jpg`;
    image.decode()
    .then(function(){
        BUTTON.classList.remove(ACTIVE);
        BUTTON = document.getElementById("3");
        BUTTON.classList.add(ACTIVE);
        })
}

function paint4(){
    image.src = `images/image-4.jpg`;
    image.decode()
    .then(function(){
        BUTTON.classList.remove(ACTIVE);
        BUTTON = document.getElementById("4");
        BUTTON.classList.add(ACTIVE);
        })
}

function paint5(){
    image.src = `images/image-5.jpg`;
    image.decode()
    .then(function(){
        BUTTON.classList.remove(ACTIVE);
        BUTTON = document.getElementById("5");
        BUTTON.classList.add(ACTIVE);
        })
}


function init() {
    marker1.addEventListener("click", paint1);
    marker2.addEventListener("click", paint2);
    marker3.addEventListener("click", paint3);
    marker4.addEventListener("click", paint4);
    marker5.addEventListener("click", paint5);
    arrowLeft.addEventListener("click", goLeft);
    arrowRight.addEventListener("click", goRight);
}

init();