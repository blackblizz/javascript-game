let userClicked = [];
let correctAnswer = [];
// const colors = document.querySelector(".button-grid");
const h1 = document.querySelector("h1");

// let startGame = true;
document.addEventListener("keydown", () => {
    // if(startGame==true) {
        h1.innerHTML="GO!";
        // startGame=false;
        store();
     }
);

//generate random pattern of colors//

let choose = Math.floor(Math.random()*4);
const store = () => {
    let colors = ["mint", "cyan", "blurple", "lilac"];
    document.getElementById(colors[choose]).classList.add("add");
    let audio = new Audio("beep.mp3");
    audio.play();
    correctAnswer.push(colors[choose]);

    setTimeout(() => {
    document.getElementById(colors[choose]).classList.remove("add");
    }, 3000);
};
