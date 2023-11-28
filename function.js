const choices= ["heads", "tails"];

function outcome(){
    return choices[Math.floor(Math.random*2)];
}

function play(playerChoice,compResult){
    if(playerChoice==compResult){
        return "You win!";
    }else{
        return "You lose!"
    }
}

const cats = document.querySelectorAll("button");
const choiceText = document.querySelector(".choiceText");
const resultText = document.querySelector(".resultText");

cats.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const playerChoice = button.id;
        const compResult = outcome();
        play(playerChoice,compResult);
        choiceText.textContent = 'You choose: ${playerChoice}!';
        resultText.textContent = 'You get: ${compResult}!'; 
    });
});