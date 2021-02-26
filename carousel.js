/*
이미지 하단의 Dot를 누를 경우, 해당 순번의 이미지 보여주기

dot = ul.li
brainstorming for carousel

1. dots -> ul> li, add or remove classlist 'active'
2. arrows
3. load first image -> ref. background.js // set as default, not form local storage.
someImageElement.src = "/images/image-1.png";
오른쪽 버튼 누르면 img number +1
왼쪽 버튼 -1
*/

const container = document.querySelector(".container"),
    image = container.querySelector("img"),
    arrowLeft = container.querySelector(".arrow-left"),
    arrowRight = container.querySelector(".arrow-right");


let Index = 1;
const ACTIVE = "active";
let LI = document.getElementById(Index);

function goLeft(){
    if (Index === 1){
        Index = 6;
    }
    LI.classList.remove(ACTIVE);
    const minusNumber = Index - 1;
    image.src = `images/image-${minusNumber}.jpg`;
    Index = minusNumber;
    LI = document.getElementById(Index);
    LI.classList.add(ACTIVE);
}

function goRight(){
    if (Index === 5){
        Index = 0;
    }
    LI.classList.remove(ACTIVE);
    const plusNumber = Index + 1;
    image.src = `images/image-${plusNumber}.jpg`;
    Index = plusNumber;
    LI = document.getElementById(Index);
    LI.classList.add(ACTIVE);
}


/*
li::marker에 eventlistner추가........가능한가?
각각 눌렀을 떄 해당 이미지 띄우기.
*/

function init() {
    arrowLeft.addEventListener("click", goLeft);
    arrowRight.addEventListener("click", goRight);
}

init();