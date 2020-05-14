
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


//----------lightbox------------------------------------

let flag = ["./img/belarus.png", "./img/denmark.png", "./img/germany.png", "./img/kazakhstan.png", "./img/lithuanian.png", "./img/uk.png"];
let lightbox = document.querySelector('.lightBox-wrapper');
lightbox.addEventListener('click', hideBigImage)

//--------------------------------------------------------

// mixing the flag gallery with Fisher-Yates algoritm
function mix(arr){
    for (let i = flag.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random()*i);
        let temp = flag[i]; // img index 5 first round
        flag[i] = flag[r]; // random image based on random index selection
        flag[r]= temp; // img index 5 first round
    }
}

// to show the image big
function showBigImage(){
    if (document.querySelector('#lightBox-wrapper').classList.contains('toSee')){
        return;
    }
    document.querySelector('#lightBox-wrapper').classList.add('toSee');
    document.querySelector('#lightBoxImg').src =this.src; // this refers to img source
}

//to hide the big image
function hideBigImage(){
    document.querySelector('#lightBox-wrapper').classList.remove('toSee');

}

mix(flag);

// appending images to  an empty gallery
const content = document.querySelector('#content');

for (let i = 0; i < flag.length; i++){
    //creating an image element to append to the gallery
    let img = document.createElement('img');
    // setting the src attribute of the image
    img.src = flag[i];
    // setting the alt attribute of the image
    img.alt = 'Image' + flag[i];

    img.addEventListener('click', showBigImage)
    //appending the images to the empty gallery in html
    content.append(img);
}
    
    

   









