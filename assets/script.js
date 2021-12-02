
let min = 1,
    max = 100,
    winningNum = getRandomNum(min, max),
    guessesLeft = 10;

const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;


game.addEventListener("mousedown", function(e){
    if(e.target.className === "play-again"){
        window.location.reload();
    }
})

guessBtn.addEventListener("click", function(){

    let guess = parseInt(guessInput.value);

    if( isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a Number between ${min} and ${max}.`, "red");
        guessInput.style.borderColor = "red";
    }
     else {
        
        if(guess === winningNum){
            
            gameOver(true, `Bravo, vous etes un Génie`);
            } else {
            
            guessesLeft -=1;

            if(guessesLeft === 0){
    
                gameOver(false, `'C'est raté !!'`);
            }
      
            else {


                guessInput.style.borderColor = "red";

                guessInput.value = "";

                setMessage(`${guess} n'est pas correct , il reste ${guessesLeft} tentatives`, "red");
            }
        }
    }
    
});

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}


function gameOver(won, msg){
    let color;
    won === true ? color = "green" : color = "green";


    guessInput.disabled = true;

    guessInput.style.borderColor = color;

    message.style.color = color;

    setMessage(msg);


    guessBtn.value = "Restart";

    guessBtn.className += "play-again";
}


function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}