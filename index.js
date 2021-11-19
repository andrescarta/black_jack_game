var player = {
    name: "Per",
    chips: 145
}
var cards = []
var sum = 0
var hasBlackJack = false
var isAlive = false
var message = ''
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")
var playerEl = document.getElementById('player-el')


playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.ceil(Math.random() * 13);
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Card: " + cards.concat()
    sumEl.textContent = "Sum: " + sum

    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo you've got a Blackjack!!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard (){
    if (isAlive === true && hasBlackJack === false) {

        let card = getRandomCard ()
        sum += card
        cards.push(card);
        console.log("Drwing a new card from the desk")
        renderGame()
    }
}

function arraySum(array){
    let contador = 0
    for (let i = 0; i < array.length; i++) {
         contador += array[i];
    }
    return contador
}