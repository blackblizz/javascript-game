const buttons = document.querySelectorAll("button");
const h1 = document.querySelector("h1");

// let startGame = true;
document.addEventListener("keydown", () => {
    // if(startGame==true) {
        h1.innerHTML="GO!";
        // startGame=false;
        setTimeout(generate,1200);
     }
);

//generate random pattern of colors//
let correctAnswer = [];
const generate = () => {
    let colors = ["mint", "cyan", "blurple", "lilac"];
    let choose = Math.floor(Math.random()*4);
    document.getElementById(colors[choose]).classList.add("add");

    let audio = new Audio("beep-6-96243.mp3");
    audio.play();
    correctAnswer.push(colors[choose]);

    setTimeout(() => {
    document.getElementById(colors[choose]).classList.remove("add");
    }, 3000);
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let audio = new Audio("wooden.mp3");
        audio.play();
    })
})

let userClicked = 0;
const play = () => {

}