const choices= ["heads", "tails"];
var image;

function wait(){
    image = "wait.png";
    document.getElementById('changeCat').src = image;
}

function outcome(){
    return choices[Math.floor(Math.random()*2)];
}

function play(playerChoice,compResult){
    if(playerChoice==compResult){
        return "win! :D";
    }else{
        return "lose! :C"
    }
}

const cats = document.querySelectorAll("button");
const choiceText = document.querySelector(".choiceText");
const resultText = document.querySelector(".resultText");
const winLoseText = document.querySelector(".winLose")

cats.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const playerChoice = button.id;
        const compResult = outcome();
        
        const winLose = play(playerChoice,compResult);
        choiceText.textContent = 'You choose: '+ playerChoice;
        resultText.textContent = 'You get: '+compResult; 
        winLoseText.textContent = 'You: ' +winLose;
        if(compResult == "heads"){
            image = "heads.png";
        }else{
            image = "tails.png";
        }
        document.getElementById('changeCat').src = image;
    });
});