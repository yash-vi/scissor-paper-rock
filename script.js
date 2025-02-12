let user = 0;  //initial user score
let bott = 0;  // initial bot score
const choices = document.querySelectorAll(".choice"); // 3 choice divs
const msg = document.querySelector("#msg");  //message div

let user_score = document.querySelector("#you"); //paragraph tag
let bot_score =document.querySelector("#bot"); // paragraph tag

const genBotChoice = () => {
    //rock, paper, scissor
    let options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3); // generate random number from 0-2
    return options[randomIndex]; //return random option acc to index
} 

const drawGame = () => {  //draw case changes
    msg.innerText = "game draw. play again?" //update message
    msg.style.backgroundColor= "#966fd6";
};


const showWinner= (userWin, userChoice, botChoice) => { //non draw cases change
    if(userWin) {
        user++; //increase numeric score 
        user_score.innerText = user; //update text on screen via para
        msg.innerText = `you win ! your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "#77dd77";
    }
    else {
        bott++; //increase numeric score
        bot_score.innerText = bott; //update text on screen via para
        msg.innerText = `you lose :( ${botChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "#ff764c";
    }
};

const playGame = (userChoice) => {
    //generate computer choice
    const botChoice = genBotChoice();

        if(userChoice === botChoice) {
            drawGame(); // callback draw game function
        }
        else {
        let userWin = true;

        if(userChoice ==="rock") {
            userWin = botChoice === "paper" ? false : true;
        }

        else if(userChoice ==="paper") {
            userWin = botChoice === "scissor" ? false : true;
        }
        else {
            userWin = botChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, botChoice); // callback to display outcome
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked!", userChoice);
        playGame(userChoice);
    });
});


