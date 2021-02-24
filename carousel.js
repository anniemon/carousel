/*
Day2
좌측 화살표 클릭시 이전 이미지 보여주기
우측 화살표 클릭시 다음 이미지 보여주기


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
    imageBox = container.querySelector(".image-box"),
    arrowLeft = container.querySelector(".arrow-left"),
    arrowRight = container.querySelector(".arrow-right"),
    listBox = imageBox.querySelector(".list-box");

/*
function paintImage() {
    const image = new Image();
    image.src = `images/image-1.jpg`;
    image.classList.add("currentImage");
    imageBox.prepend(image);       이걸 굳이 지금 js에서 해야되는지 잘 모르겠네.....음...
}
*/

function paintDot() {


}

paintDot();


function init() {
    paintImage();
}

init();