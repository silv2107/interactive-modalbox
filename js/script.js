
//header
const whopper = document.getElementById("burger-box");
// const span = document.querySelectorAll(".burger-box span");

// const contact = document.getElementById('button');

whopper.addEventListener("click", menuRollOut);
// contact.addEventListener("click", contactRollOut)

// ------------------the nav functionality in header---------------
function menuRollOut() {
    const navBox = document.querySelector("nav");
    navBox.classList.toggle("visible");
}

//----------dropdown functionality----------------------------






//end of header


let flag = ["./img/belarus.png", "./img/denmark.png", "./img/germany.png", "./img/kazakhstan.png", "./img/lithuanian.png", "./img/uk.png"];

//----------lightbox------------------------------------
let lightbox = document.querySelector('.lightBox-wrapper');
let images = document.querySelectorAll('.galleryImage');
let lightBoxImg = document.querySelector('#lightBoxImg');
//--------------------------------------------------------


const numberOne = document.querySelector("#one");
const numberTwo = document.querySelector("#two");
const numberThree = document.querySelector("#three");
const numberFour = document.querySelector("#four");
const numberFive = document.querySelector("#five");
const numberSix = document.querySelector("#six");


window.onload = function(){
    let figureOne =  Math.floor(Math.random() * 6);
    numberOne.src = flag[figureOne];
    flag.splice(figureOne, 1);

    let figureTwo =  Math.floor(Math.random() * 5);
    numberTwo.src = flag[figureTwo];
    flag.splice(figureTwo, 1);

    let figureThree =  Math.floor(Math.random() * 4);
    numberThree.src = flag[figureThree];
    flag.splice(figureThree, 1);

    let figureFour =  Math.floor(Math.random() * 3);
    numberFour.src = flag[figureFour];
    flag.splice(figureFour, 1);

    let figureFive =  Math.floor(Math.random() * 2);
    numberFive.src = flag[figureFive];
    flag.splice(figureFive, 1);

    let figureSix =  Math.floor(Math.random() * 1);
    numberSix.src = flag[figureSix];
    flag.splice(figureSix, 1);
    

    // -------------------Light-Box ----------------

    //let images = document.querySelectorAll('.galleryImage');
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(){
            lightbox.classList.remove('hidden');
            lightBoxImg.src = images[i].src;
        })
        lightbox.addEventListener('click', function(){
            lightbox.classList.add('hidden')
        })
    }

}









