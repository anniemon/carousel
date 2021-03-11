const container = document.querySelector(".container"),
    image = container.querySelector("img"),
    arrowLeft = container.querySelector(".arrow-left"),
    arrowRight = container.querySelector(".arrow-right"),
    marker = document.querySelectorAll('li');

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

function ControlIndex(){
    marker.forEach(function(indicator, ind){
        indicator.addEventListener('click', function(){
            INDEX = ind+1;
            image.src = `images/image-${INDEX}.jpg`;
            image.decode()
            .then(function(){
                BUTTON.classList.remove(ACTIVE);
                BUTTON = document.getElementById(INDEX);
                BUTTON.classList.add(ACTIVE);
            });
        });
    });
};

function init() {
    ControlIndex();
    arrowLeft.addEventListener("click", goLeft);
    arrowRight.addEventListener("click", goRight);
}

init();