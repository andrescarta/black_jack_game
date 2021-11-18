// var firstCard = Math.ceil( Math.random(0,1.1) * 10 )
var firstCard = Math.floor(Math.random() * (13 - 1 + 1) ) + 1;
var secondCard = Math.floor(Math.random() * (13 - 1 + 1) ) + 1;
var theerdCard 
var sum = firstCard + secondCard
var hasBlackJack = false
var isAlive = true
var message = ''
var messageEl = document.getElementById("message-el")
var sumEl = document.querySelector(".sum-el")
var cardsEl = document.querySelector("cards-el")

function startGame() {

    cardsEl.textContent = "Card: " + firstCard + " + " + secondCard 
    sumEl.textContent = "Sum: " + sum

    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo you've got a Blackjack!! "
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game 😭"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard (){
theerdCard = Math.floor(Math.random() * (13 - 1 + 1) ) + 1;
}