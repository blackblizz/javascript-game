let userClicked = [];
let correctAnswer = [];
let colors = ["mint", "cyan", "blurple", "lilac"];
const h1 = document.querySelector("h1");

//let startGame = true;
h1.addEventListener("keydown", () => {
    // if(startGame==true) {
        h1.innerHTML="GO!";
        //startGame=false;
        store();
     }
);

//generate random pattern of colors//
let choose = Math.floor(Math.random()*4);
const store = () => {
    document.getElementById(colors[choose]).classList.add("add");
    let audio = new Audio("beep.mp3");
    audio.play();
    correctAnswer.push(color[choose]);

    setTimeout(() => {
    document.getElementById(color[choose]).classList.remove("add");
    }, 200);
}
