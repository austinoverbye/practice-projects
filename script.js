'use strict';
/*
//use # for ID and . for class.
//text content gives us the text content within the attribute that has class = message.
console.log(document.querySelector('.message').textContent);

//what is the DOM? 
//Document Object Model: structued represenation of HTML documents. Allows JS to access HTML elements and styles to manipulate. 
// can change text, html attributes, and even CSS styles. 
//DOM is created by browser and is stored in a tree structure. 
//child element, parent element, sibling element, etc.
//Document is the head of the tree, so document.________ is the entry point of DOM. 
// DOM !== JScript. 
// DOM Is a web APIs which JScript that we can interact with. 

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 13;

console.log(document.querySelector('.guess').value);

//handle a click event: 
// need to use an event listener (like a mouse click, mouse moving, click, etc.)
*/

let randomNum = Math.floor(Math.random()*20 + 1);
let guess;
let score = 20;
let highScore = 0;

function setMessage(message) {
    document.querySelector('.message').textContent = message;
};
function scoreCount(i) {
    document.querySelector('.score').textContent = i;
}
function numberBlock(i) {
    document.querySelector('.number').textContent = i;
}


document.querySelector('.again'). addEventListener('click', function(){

    randomNum = Math.floor(Math.random()*20 + 1);
    score = 20;
    scoreCount(score);
    setMessage(`Start guessing...`);
    numberBlock('?');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    console.log(randomNum);
})


document.querySelector('.check').addEventListener('click', function(){
guess = Number(document.querySelector('.guess').value);

console.log(guess);
if (score > 1){
//when there is no input
if(!guess){

    alert(`Please enter a number between 1-20`);
//when guess equals random number
} else if(guess === randomNum){

    setMessage(`You are correct!`);
    numberBlock(randomNum);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highScore){
        document.querySelector('.highscore').textContent = score;
    }

//when guess is too high or low
} else if(guess !== randomNum){

    setMessage(guess > randomNum ? `Too high` : `Too low`);
    score--;
    scoreCount(score);
} 
}
//when guesses run out:
else{

setMessage(`You lost the game`);
score = 0;
scoreCount(score);
numberBlock(randomNum);

};
});




//implement a game rest functionality so that the player can make a new game. 
// 