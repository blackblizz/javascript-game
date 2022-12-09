const buttons = document.querySelectorAll("button");
const h1 = document.querySelector("h1");

//startGame needs to be true to prevent keydown from triggering again in the middle of the game
let startGame = true;
document.addEventListener("keydown", () => {
    if(startGame==true) {
        h1.innerHTML="GO!";
        startGame=false;
        setTimeout(generate,1200);
     }
});

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
    }, 1200);
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let audio = new Audio("wooden.mp3");
        audio.play();
        play(); //every time a button is clicked, it will compare the button's color to the correct answer
    })
})



let i = 0;
const play = () => {
    if(document.activeElement.id == correctAnswer[i]){
        i++; //compares the next answer
        if(i == correctAnswer.length){ //when the number of clicks = the length of correctAnswer array
        i = 0;  //user has to click from the beginning of the pattern in the next round
        setTimeout(generate, 1500);
        } 
    } else {
        h1.innerHTML="Game Over..Game reloads in 3 seconds";
        setTimeout(() => {window.location.reload()},3000);
    }
}