let randNum = Math.floor(Math.random() * 100);
let guessNum;
let numHistory = [];
let tries = 10;

const guessInput = document.querySelector('.input-num');
const submit = document.querySelector('.input-btn');
const historyContent = document.querySelector('.history-content');
let alert = document.querySelector('.alert');

submit.addEventListener('click', function(){
    
    //I just put player's input value into a variable
    // I know this is maybe a waste but I like to work lik this :D 
    guessNum = guessInput.value;
    // I add player's guess into an array
    numHistory.push(guessNum);
    // so I can display the guess history with this
    historyContent.innerHTML = numHistory.join(" | ");


    // Check if player's guess is right or not
    if(guessNum == randNum){
        alert.classList.add('alert-right');
        alert.innerHTML = 'Congratulations! Your guess is right! <a href="#" onclick="window.location.reload(true);">PLAY AGAIN?</a>';
        guessInput.disabled = true;
        submit.disabled = true;
    }else if(guessNum < randNum){
        alert.classList.add('alert-wrong');
        alert.innerHTML = 'WRONG! Your guess is too <strong>LOW</strong>';
        tries--;
        gameOver();
    }else{
        alert.classList.add('alert-wrong');
        alert.innerHTML = 'WRONG! Your guess is too <strong>HIGH</strong>';
        tries--;
        gameOver();
    }
});

function gameOver(){
    if(tries == 0){
        guessInput.disabled = true;
        submit.disabled = true;
        alert.classList.add('alert-wrong');
        alert.innerHTML = 'GAME OVER! <a href="#" onclick="window.location.reload(true);">PLAY AGAIN?</a>';
    }
}